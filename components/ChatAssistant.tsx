
import React, { useState, useRef, useEffect } from 'react';
import { getChatResponse } from '../services/geminiService';
import { Candidate } from '../types';
import { MessageSquare, Send, X, Loader, User, Sparkles } from './icons/Icons';

interface ChatAssistantProps {
    allCandidates: Candidate[];
}

interface Message {
    sender: 'user' | 'ai';
    text: string;
}

const ChatAssistant: React.FC<ChatAssistantProps> = ({ allCandidates }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;
        
        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const aiResponseText = await getChatResponse(input, allCandidates);
            const aiMessage: Message = { sender: 'ai', text: aiResponseText };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error("Error fetching AI response:", error);
            const errorMessage: Message = { sender: 'ai', text: 'Sorry, I am having trouble connecting. Please try again.' };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handlePresetQuery = (query: string) => {
        setInput(query);
    }
    
    const ChatWindow = () => (
        <div className="fixed bottom-24 right-5 w-96 h-[32rem] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col border border-slate-300 dark:border-slate-700 transition-all duration-300 animate-slide-up">
            <header className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-lg flex items-center gap-2"><Sparkles className="text-primary-500" /> HireSense Assistant</h3>
                <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700">
                    <X className="h-5 w-5" />
                </button>
            </header>
            <div className="flex-grow p-4 overflow-y-auto space-y-4">
                {messages.length === 0 && (
                    <div className="text-center text-sm text-slate-500 dark:text-slate-400">
                        <p>Ask me anything about your candidates!</p>
                        <div className="mt-4 space-y-2">
                             <button onClick={() => handlePresetQuery('Show me top 3 candidates')} className="w-full text-left bg-slate-100 dark:bg-slate-700/50 p-2 rounded-lg text-xs hover:bg-slate-200 dark:hover:bg-slate-700">Show me top 3 candidates</button>
                             <button onClick={() => handlePresetQuery('Who has Python and AWS skills?')} className="w-full text-left bg-slate-100 dark:bg-slate-700/50 p-2 rounded-lg text-xs hover:bg-slate-200 dark:hover:bg-slate-700">Who has Python and AWS skills?</button>
                             <button onClick={() => handlePresetQuery('Compare Elena and Ben for a frontend role')} className="w-full text-left bg-slate-100 dark:bg-slate-700/50 p-2 rounded-lg text-xs hover:bg-slate-200 dark:hover:bg-slate-700">Compare Elena and Ben for a frontend role</button>
                        </div>
                    </div>
                )}
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                        {msg.sender === 'ai' && <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center"><Sparkles className="h-5 w-5 text-white" /></div>}
                        <div className={`max-w-xs px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-primary-500 text-white rounded-br-none' : 'bg-slate-200 dark:bg-slate-700 rounded-bl-none'}`}>
                            <p className="text-sm" dangerouslySetInnerHTML={{__html: msg.text.replace(/\n/g, '<br />')}}></p>
                        </div>
                         {msg.sender === 'user' && <div className="flex-shrink-0 h-8 w-8 rounded-full bg-slate-600 flex items-center justify-center"><User className="h-5 w-5 text-white" /></div>}
                    </div>
                ))}
                {isLoading && (
                    <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center"><Sparkles className="h-5 w-5 text-white" /></div>
                        <div className="max-w-xs px-4 py-3 rounded-2xl bg-slate-200 dark:bg-slate-700 rounded-bl-none">
                            <Loader className="animate-spin h-5 w-5 text-slate-500" />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <footer className="p-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                    <input 
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask a question..."
                        className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 text-sm focus:ring-primary-500 focus:border-primary-500"
                    />
                    <button onClick={handleSend} disabled={isLoading} className="bg-primary-500 text-white p-2 rounded-lg hover:bg-primary-600 disabled:bg-primary-300">
                        <Send className="h-5 w-5" />
                    </button>
                </div>
            </footer>
        </div>
    );

    return (
        <>
            {isOpen && <ChatWindow />}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-5 right-5 h-16 w-16 bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-700 transition-transform transform hover:scale-110"
                aria-label="Toggle Chat Assistant"
            >
                {isOpen ? <X className="h-8 w-8" /> : <MessageSquare className="h-8 w-8" />}
            </button>
        </>
    );
};

export default ChatAssistant;
