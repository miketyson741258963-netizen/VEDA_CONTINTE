
import React, { useState, useEffect, useRef } from 'react';
import { chatWithVeda } from '../services/geminiService';
import { COLORS } from '../constants';
import { Message } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Namaste! 👋 I am the VEDA Studio Concierge. How may I assist you with your home journey today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const responseData = await chatWithVeda(userMsg, messages);
    setMessages(prev => [...prev, { 
      role: 'model', 
      text: responseData.text,
      sources: responseData.sources
    }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[120] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-6 w-[360px] md:w-[420px] h-[600px] bg-white rounded-[2rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden border border-gray-100">
          <div className="p-8 bg-black text-white flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-black font-black">V</div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest">VEDA Concierge</h3>
                <p className="text-[10px] text-[#D4AF37] font-bold tracking-widest">ONLINE | STUDIO EXPERT</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar bg-[#FDFDFD]">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-black text-white rounded-br-none' : 'bg-gray-50 text-gray-700 rounded-bl-none border border-gray-100'}`}>
                  {m.text}
                  
                  {/* Render Search Sources if available */}
                  {m.sources && m.sources.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200/20 text-[10px] space-y-2">
                      <p className={`font-bold uppercase tracking-widest ${m.role === 'user' ? 'text-[#D4AF37]' : 'text-gray-400'}`}>Sources:</p>
                      <div className="flex flex-col space-y-1">
                        {m.sources.map((source, sIdx) => (
                          <a 
                            key={sIdx} 
                            href={source.uri} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-500 hover:underline truncate block max-w-full"
                            title={source.title}
                          >
                            • {source.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-50 p-4 rounded-2xl rounded-bl-none flex space-x-2">
                  <div className="w-2 h-2 bg-gray-200 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-200 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-gray-200 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-6 bg-white border-t border-gray-50">
            <div className="flex items-center bg-gray-50 rounded-2xl px-5 py-2">
              <input
                type="text"
                placeholder="Ask about design or budget..."
                className="flex-1 bg-transparent py-3 text-sm focus:outline-none font-light"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="ml-4 text-black hover:text-[#D4AF37] transition-colors disabled:opacity-20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modern Floating Toggle Button */}
      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 text-white floating"
          style={{ backgroundColor: isOpen ? '#000000' : '#D4AF37' }}
        >
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" /></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
