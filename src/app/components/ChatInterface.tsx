"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send, Trash2, AlertCircle, Loader2, Scale } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    try {
      // Add user message to chat
      const userMessage: Message = { role: 'user', content };
      setMessages(prev => [...prev, userMessage]);
      setInput('');
      setIsLoading(true);
      setError(null);

      console.log('Sending message to API:', [userMessage]);

      // Send message to API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API error:', errorData);
        throw new Error(errorData.error || 'Failed to get response');
      }

      const data = await response.json();
      console.log('API response:', data);

      // Add assistant message to chat
      setMessages(prev => [...prev, { role: 'assistant', content: data.content }]);
    } catch (err) {
      console.error('Error in chat:', err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(input);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setError(null);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden">
      {/* Floating clear button */}
      {messages.length > 0 && (
        <button 
          onClick={clearChat}
          className="fixed right-6 top-24 z-10 flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors px-3 py-2 rounded-full glass border border-gray-800 hover:border-orange-500/30 shadow-lg"
        >
          <Trash2 className="w-4 h-4" />
          <span>Clear</span>
        </button>
      )}

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 pt-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-4xl">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-700/20 flex items-center justify-center mb-8">
                <Scale className="w-12 h-12 text-orange-500" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Welcome to PakJustice AI</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                {[
                  "What are my rights if I'm arrested?",
                  "Explain the process of filing an FIR",
                  "What is the difference between PPC and CrPC?",
                  "How can I apply for bail in Pakistan?"
                ].map((suggestion, index) => (
                  <button
                    key={index}
                    className="glass p-4 rounded-xl text-left transition-all border border-gray-800 hover:border-orange-500/30 group"
                    onClick={() => handleSendMessage(suggestion)}
                  >
                    <span className="text-gray-300 group-hover:text-orange-400 transition-colors">{suggestion}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6 py-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-3xl rounded-2xl p-5 ${
                      message.role === 'user'
                        ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/10'
                        : 'glass text-gray-200 border border-gray-800'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-3xl rounded-2xl p-5 glass text-gray-200 border border-gray-800">
                    <div className="flex items-center space-x-3">
                      <Loader2 className="w-5 h-5 animate-spin text-orange-500" />
                      <span>PakJustice AI is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              {error && (
                <div className="flex justify-center">
                  <div className="max-w-3xl rounded-2xl p-5 bg-red-900/20 text-red-200 border border-red-800/50 backdrop-blur-sm">
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                      <span>Error: {error}</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </div>

      {/* Input area */}
      <div className="bg-black/80 backdrop-blur-md border-t border-gray-800 p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Pakistani law..."
              className="w-full glass text-white rounded-xl border border-gray-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none p-4 pr-16 resize-none h-[60px] placeholder-gray-500"
              disabled={isLoading}
            />
            <button
              onClick={() => handleSendMessage(input)}
              disabled={!input.trim() || isLoading}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-3 ${
                !input.trim() || isLoading
                  ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                  : 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/10'
              } transition-all`}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <div className="text-xs text-gray-500 mt-2 text-center">
            Press Enter to send, Shift+Enter for a new line
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
