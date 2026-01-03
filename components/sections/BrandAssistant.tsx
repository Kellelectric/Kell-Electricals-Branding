import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Send, User, Bot, Loader2, Sparkles } from 'lucide-react';
import { BRAND_NAME } from '../../constants';

const BrandAssistant: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: `Hello! I am your Kell Electricals brand consultant. How can I help you implement this brand identity today? You can ask me about marketing slogans, how to apply our colors to specific scenarios, or our brand voice.` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Create a new GoogleGenAI instance right before making an API call to ensure it always uses the most up-to-date API key.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are a senior brand consultant for ${BRAND_NAME}. 
          The brand identity is: Professional, Trustworthy, Innovative, and Premium.
          Primary Colors: Deep Midnight (#0F172A), Electric Cyan (#22D3EE), Conductive Copper (#B45309).
          Tone: Credible, Technical yet accessible, Forward-thinking.
          Target Audience: Residential, Commercial, Industrial, Corporate.
          Services include: repairs, solar, home automation, CCTV, contracting.
          Answer questions about brand implementation, marketing ideas, or corporate values.`,
          temperature: 0.7,
        }
      });

      // Extract generated text from response property (not a method).
      const aiText = response.text || "I'm sorry, I couldn't generate a response. Please try again.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Error: Could not connect to the brand engine. Please verify the API environment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col h-[600px]">
      <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-cyan-500 rounded-lg">
            <Sparkles size={20} className="text-slate-900" />
          </div>
          <div>
            <h3 className="font-bold text-sm">Brand Consultant</h3>
            <p className="text-[10px] text-cyan-300 uppercase tracking-widest">Powered by Gemini</p>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl flex gap-3 ${m.role === 'user' ? 'bg-cyan-600 text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-800 shadow-sm rounded-tl-none'}`}>
              <div className="shrink-0">
                {m.role === 'user' ? <User size={18} /> : <Bot size={18} className="text-cyan-600" />}
              </div>
              <div className="text-sm leading-relaxed whitespace-pre-wrap">
                {m.content}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-200 p-3 rounded-2xl flex gap-3 rounded-tl-none shadow-sm">
              <Loader2 size={18} className="animate-spin text-cyan-600" />
              <p className="text-sm text-slate-400 italic">Thinking...</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about marketing slogans, brand tone, or application..."
          className="flex-1 px-4 py-2 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-cyan-500 outline-none"
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          className="p-2 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors disabled:opacity-50"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default BrandAssistant;