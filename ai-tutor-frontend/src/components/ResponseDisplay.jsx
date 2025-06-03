import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default function ResponseDisplay({ thinking, answer }) {
  const [showThinking, setShowThinking] = useState(false);
  
  return (
    <div className="response-container mt-2">
      {thinking && (
        <div className="thinking-section">
          <button 
            onClick={() => setShowThinking(!showThinking)}
            className={`text-xs px-2 py-1 mb-2 rounded ${showThinking ? 'bg-blue-200' : 'bg-gray-200'}`}
          >
            {showThinking ? 'Hide Thinking Process' : 'Show Thinking Process'}
          </button>
          
          {showThinking && (
            <div className="thinking-content bg-gray-50 border-l-4 border-gray-300 p-3 rounded mb-3 text-sm overflow-auto">
              <h4 className="text-gray-700 font-medium mb-1">Tutor's Thinking:</h4>
              <div className="text-gray-600">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm, remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {thinking}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      )}
      
      <div className="answer-section bg-white p-3 rounded-lg prose prose-sm max-w-none">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {answer}
        </ReactMarkdown>
      </div>
    </div>
  );
}