import ResponseDisplay from './ResponseDisplay';

export default function Message({ sender, text, thinking = null }) {
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-md rounded-xl shadow-sm ${isUser ? 'bg-blue-600 text-white p-3' : 'bg-gray-100'}`}>
        <div className="font-medium mb-1 px-3 pt-2">
          {isUser ? 'You' : 'Tutor'}
        </div>
        
        {isUser ? (
          <div className="px-3 pb-2 whitespace-pre-wrap">{text}</div>
        ) : (
          <ResponseDisplay thinking={thinking} answer={text} />
        )}
      </div>
    </div>
  );
}