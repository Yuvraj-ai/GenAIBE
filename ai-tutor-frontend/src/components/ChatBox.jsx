import { useState } from 'react';
import Message from './Message';

export default function ChatBox() {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendQuery = async () => {
    if (!query.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text: query }]);
    setLoading(true);
    setQuery('');
    
    try {
      // Send request to backend
      const response = await fetch('/api/proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      
      const data = await response.json();
      
      // Add tutor response with thinking part if available
      setMessages(prev => [
        ...prev, 
        { 
          sender: 'tutor', 
          text: data.answer, 
          thinking: data.thinking 
        }
      ]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [
        ...prev, 
        { sender: 'tutor', text: 'Sorry, there was an error processing your request.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendQuery();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="h-[60vh] overflow-y-auto p-4 border rounded-lg bg-white mb-4">
        {messages.map((msg, index) => (
          <Message 
            key={index} 
            sender={msg.sender} 
            text={msg.text}
            thinking={msg.thinking}
          />
        ))}
        {loading && (
          <div className="flex justify-start mb-4">
            <div className="bg-gray-100 rounded-xl p-3">
              <div className="font-medium">Tutor</div>
              <div className="animate-pulse">Thinking...</div>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <textarea
          rows="2"
          className="flex-grow p-3 border rounded-lg resize-none"
          placeholder="Ask a question about physics..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
          onClick={sendQuery}
          disabled={loading || !query.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
}