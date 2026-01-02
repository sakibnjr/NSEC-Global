import React, { useState } from 'react';
import { Bot, MessageSquareText, SendHorizontal, X } from 'lucide-react';
import { callGemini } from '../utils/geminiApi';

const AIChatWidget = () => {
    const [showChat, setShowChat] = useState(false);
    const [chatInput, setChatInput] = useState('');
    const [chatMessages, setChatMessages] = useState([
        { role: 'ai', text: 'Welcome to NSEC Global. I am your AI concierge. How may I assist your journey today?' }
    ]);
    const [isTyping, setIsTyping] = useState(false);

    const handleChatSubmit = async (e) => {
        e.preventDefault();
        if (!chatInput.trim()) return;
        const userMsg = { role: 'user', text: chatInput };
        setChatMessages(prev => [...prev, userMsg]);
        setChatInput('');
        setIsTyping(true);
        try {
            const result = await callGemini(chatInput, "You are NSEC's AI Assistant. Be professional, concise, and polite.");
            setChatMessages(prev => [...prev, { role: 'ai', text: result }]);
        } catch (e) {
            console.error("Chat Widget Error:", e);
            setChatMessages(prev => [...prev, { role: 'ai', text: "System is currently optimizing. Please try again." }]);
        } finally { setIsTyping(false); }
    };

    return (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-4 pointer-events-none">
            {/* Chat Window */}
            {showChat && (
                <div className="pointer-events-auto w-[90vw] sm:w-[350px] md:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-1 responsive-chat flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in zoom-in duration-300 origin-bottom-right">
                    <div className="p-4 bg-slate-900 text-white flex justify-between items-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-slate-900 opacity-50" />
                        <div className="flex items-center gap-3 relative z-10">
                            <div className="relative">
                                <div className="w-2 h-2 bg-green-500 rounded-full absolute -right-0.5 -bottom-0.5 border border-slate-900 animate-pulse" />
                                <Bot size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold">Concierge AI</h4>
                                <p className="text-[10px] text-slate-300 font-medium">Online</p>
                            </div>
                        </div>
                        <button onClick={() => setShowChat(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors relative z-10"><X size={16} /></button>
                    </div>

                    <div className="flex-1 bg-slate-50 overflow-y-auto p-4 space-y-4">
                        {chatMessages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                                <div className={`max-w-[85%] p-3 rounded-2xl text-xs font-medium leading-relaxed ${msg.role === 'user'
                                    ? 'bg-blue-600 text-white rounded-tr-none shadow-md'
                                    : 'bg-white text-slate-700 rounded-tl-none shadow-sm border border-slate-100'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex items-center gap-1 ml-2 animate-in fade-in duration-300">
                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleChatSubmit} className="p-3 bg-white border-t border-slate-100">
                        <div className="relative">
                            <input
                                value={chatInput}
                                onChange={(e) => setChatInput(e.target.value)}
                                placeholder="Ask a question..."
                                className="w-full h-10 pl-4 pr-10 rounded-xl bg-slate-100 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all focus:bg-white"
                            />
                            <button type="submit" className="absolute right-1 top-1 w-8 h-8 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm hover:shadow-md transition-all hover:scale-110 active:scale-95">
                                <SendHorizontal size={14} />
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Trigger Button */}
            <button
                onClick={() => setShowChat(!showChat)}
                className="pointer-events-auto w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-blue-600 hover:scale-110 active:scale-95 transition-all group relative border border-blue-50"
            >
                <div className="absolute inset-0 rounded-full bg-blue-100 animate-ping opacity-20 duration-1000" />
                {showChat ? <X size={24} /> : <Bot size={24} className="group-hover:rotate-12 transition-transform" />}
            </button>
        </div>
    );
};

export default AIChatWidget;
