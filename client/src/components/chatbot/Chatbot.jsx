import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, MessageCircle, Sparkles, Loader2, Send, Mic, MicOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { chatbotAPI } from '../../services/api';

const Chatbot = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hello! I'm your AI assistant. How can I help you today?",
    }
  ]);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize Speech Recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US'; // Can dynamically change based on user pref or detection

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.start();
          setIsListening(true);
        } catch (error) {
           console.error("Failed to start speech recognition:", error);
        }
      } else {
        alert("Voice input is not supported in this browser. Please use Chrome or Edge.");
      }
    }
  };

  // Proactive Greeting: Open after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('chat_opened')) {
        setIsOpen(true);
        localStorage.setItem('chat_opened', 'true');
      }
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const processResponse = (text) => {
    // 1. Extract Navigation Command
    const navMatch = text.match(/{{NAVIGATE:(.*?)}}/);
    let cleanText = text;
    
    if (navMatch) {
      const path = navMatch[1];
      cleanText = text.replace(navMatch[0], '').trim();
      
      // Execute Navigation after a small delay for effect
      setTimeout(() => {
        navigate(path);
      }, 1500);
    }

    // 2. Linkify URLs (Simple Regex)
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = cleanText.split(urlRegex);
    
    return parts.map((part, i) => {
        if (part.match(urlRegex)) {
            return <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline break-all">{part}</a>;
        }
        return part;
    });
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setIsLoading(true);

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: userText,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      // Prepare history for API
      const history = messages.map(msg => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.text
      }));

      const response = await chatbotAPI.chat(userText, history);
      
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: response.reply || "I'm sorry, I couldn't process that request right now.",
      }; // We store raw text here for history
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: "Sorry, something went wrong. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-110'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Tooltip */}
        {!isOpen && (
          <motion.div
            className="absolute right-full mr-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-white text-sm whitespace-nowrap border border-white/10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
          >
            Ask me anything!
          </motion.div>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] z-50 flex flex-col glass-panel rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">AI Assistant</h3>
                  <p className="text-xs text-blue-200 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Online • Knows Everything
                  </p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.type === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-br-none shadow-lg'
                        : 'bg-white/10 backdrop-blur-md border border-white/10 text-gray-100 rounded-bl-none shadow-lg'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{processResponse(msg.text)}</p>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/5 backdrop-blur-md border border-white/5 px-4 py-3 rounded-2xl rounded-bl-none flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                    <span className="text-xs text-gray-400">Thinking...</span>
                  </div>
                </motion.div>
              )}
              {isListening && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-end"
                >
                  <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 px-4 py-3 rounded-2xl rounded-br-none flex items-center gap-2">
                    <div className="flex gap-1">
                        <span className="w-1 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-1 h-4 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-1 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></span>
                    </div>
                    <span className="text-xs text-red-300">Listening...</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-black/20 backdrop-blur-md border-t border-white/10">
              <form onSubmit={handleSend} className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything in English or Hinglish..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-20 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-gray-500"
                />
                <button
                  type="button"
                  onClick={toggleListening}
                  className={`absolute right-12 p-2 rounded-lg transition-all ${isListening ? 'text-red-500 bg-red-500/10 hover:bg-red-500/20 animate-pulse' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                  title="Speak to Chat"
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="text-center mt-2">
                <p className="text-[10px] text-gray-500">I may make mistakes. Please verify important info.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
