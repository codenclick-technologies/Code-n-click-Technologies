import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { MessageSquare, Send, X, Loader2, Sparkles, User, Bot, HelpCircle, ChevronRight, Mic, Volume2, VolumeX, Activity } from 'lucide-react';
import { chatbotAPI } from '../../services/api';
import MarketingService from '../../services/marketing';

// --- HELPER: Basic Markdown Renderer ---
const renderMessageContent = (content) => {
  // 1. Split by newlines to handle paragraphs/lists
  return content.split('\n').map((line, lineIdx) => {
    // Check for Headers
    if (line.startsWith('### ')) {
      return <h3 key={lineIdx} className="text-md font-bold text-white mt-2 mb-1">{line.replace('### ', '')}</h3>;
    }
    if (line.startsWith('## ')) {
      return <h2 key={lineIdx} className="text-lg font-bold text-white mt-3 mb-2">{line.replace('## ', '')}</h2>;
    }

    // 2. Parse Bold, Italic, and Links
    // Split by Bold (**...**), Italic (*...*), and Links ([...](...))
    // Note: The regex order matters.
    const parts = line.split(/(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\))/g);
    
    const renderedLine = parts.map((part, partIdx) => {
      // Bold
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={`${lineIdx}-${partIdx}`} className="font-bold text-blue-300">{part.slice(2, -2)}</strong>;
      }
      // Italic (simple check, avoiding accidental match like * list)
      if (part.startsWith('*') && part.endsWith('*') && part.length > 2 && !part.includes(' ')) { 
         // Note: basic italic support, strict to avoid bullets
         return <em key={`${lineIdx}-${partIdx}`} className="italic text-gray-300">{part.slice(1, -1)}</em>;
      }
      // Link
      if (part.startsWith('[') && part.endsWith(')')) {
        const match = part.match(/\[(.*?)\]\((.*?)\)/);
        if (match) {
           return <a key={`${lineIdx}-${partIdx}`} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">{match[1]}</a>;
        }
      }
      return part;
    });

    return (
      <div key={lineIdx} className={`${line.trim().startsWith('-') ? 'pl-4' : 'min-h-[1.2em]'} mb-1`}>
        {line.trim().startsWith('-') && <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 align-middle"></span>}
        {renderedLine}
      </div>
    );
  });
};

// --- COMPONENT: Typewriter Effect for Bot Messages ---
const Typewriter = ({ text, onComplete, onUpdate }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const speed = 10; // Faster typing speed
    setIsComplete(false);
    setDisplayedText('');

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        if (onUpdate) onUpdate(); // Signal parent to scroll
      } else {
        clearInterval(interval);
        setIsComplete(true);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  // While typing, we render a partial view. 
  // To avoid markdown "flicker" (e.g. seeing '**' before it becomes bold), 
  // we can use a simpler approach: just show text. 
  // Once complete, we switch to the full Rich Markdown renderer.
  if (isComplete) {
     return <div className="animate-fade-in">{renderMessageContent(text)}</div>;
  }

  // During typing, we use a whitespace-pre-wrap to respect newlines
  return (
    <div className="whitespace-pre-wrap leading-relaxed">
      {displayedText}
      <span className="inline-block w-1.5 h-4 ml-1 align-middle bg-blue-400 animate-pulse"></span>
    </div>
  );
};


const Chatbot = () => {
  // --- STATE MANAGEMENT ---
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi there! 👋 I am your AI Business Assistant. How can I help you grow your business today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  // Voice State
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Speech Recognition Reference
  const recognitionRef = useRef(null);
  const synthRef = useRef(window.speechSynthesis);

  // Ref to track voice mode for async callbacks
  const isVoiceModeRef = useRef(isVoiceMode);
  useEffect(() => {
     isVoiceModeRef.current = isVoiceMode;
  }, [isVoiceMode]);

  // --- INITIALIZATION ---

  // Proactive Greeting Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && messages.length === 1) {
        setIsOpen(true);
        playSound('notification');
        MarketingService.trackChatInteraction('proactive_open');
      }
    }, 10000); // Open after 10 seconds
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll to bottom - Smart Implementation
  const scrollToBottom = (force = false) => {
    const container = messagesEndRef.current?.parentElement;
    if (container) {
      // Check if user is near bottom (within 100px)
      const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100;
      
      // Scroll if forced (new message start) or if user is already following the conversation
      if (force || isNearBottom) {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    // Force scroll on new message arrival
    scrollToBottom(true);
  }, [messages, loading]); // Scroll on new message or loading toggle

  // Voice Recognition Setup (Web Speech API)
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false; // Stop after one sentence for turn-taking
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onstart = () => {
        setIsListening(true);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
        // If voice mode is on but we just finished getting input, we don't restart immediately
        // We wait for the bot to reply.
      };

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setInput(transcript);
          handleSend(transcript); // Auto-send when voice is detected
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error", event.error);
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) recognitionRef.current.abort();
      if (synthRef.current) synthRef.current.cancel();
    };
  }, []);


  // --- HANDLERS ---

  const toggleChat = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (newState) {
      setTimeout(() => inputRef.current?.focus(), 100);
      MarketingService.trackChatInteraction('user_opened_chat');
    }
  };

  // Toggle Voice Mode
  const toggleVoiceMode = () => {
    if (!recognitionRef.current) {
      // Graceful Fallback: specific message in chat instead of annoying alert
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "**System Notification**: Voice mode is not available in this browser. Please use **Google Chrome**, **Edge**, or **Safari** for voice features." 
      }]);
      return;
    }

    const newMode = !isVoiceMode;
    setIsVoiceMode(newMode);

    if (newMode) {
      // Turn ON Voice
      MarketingService.trackChatInteraction('voice_mode_enabled');
      // Speak a welcome message
      speakText("Voice mode enabled. I am listening.");
      // Start listening after a short delay
      setTimeout(() => startListening(), 1500);
    } else {
      // Turn OFF Voice
      stopListening();
      stopSpeaking();
      MarketingService.trackChatInteraction('voice_mode_disabled');
    }
  };

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.error("Mic start error:", e);
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) recognitionRef.current.stop();
  };

  const speakText = (text) => {
    if (!synthRef.current) return;

    // Stop any current speech
    synthRef.current.cancel();

    // Clean markdown formatting before speaking
    const cleanText = text
      .replace(/\*\*(.*?)\*\*/g, '$1')  // Remove bold **text**
      .replace(/\*(.*?)\*/g, '$1')      // Remove italic *text*
      .replace(/\{\{NAVIGATE:.*?\}\}/g, '')  // Remove navigation commands
      .replace(/#+\s/g, '')             // Remove markdown headers
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'); // Remove links [text](url)

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.volume = 1;
    utterance.rate = 0.9; // Slower for better clarity
    utterance.pitch = 1;

    // Attempt to pick a good voice
    const voices = synthRef.current.getVoices();
    const preferredVoice = voices.find(v => v.name.includes('Google US English')) || voices.find(v => v.lang === 'en-US');
    if (preferredVoice) utterance.voice = preferredVoice;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => {
      setIsSpeaking(false);
      // Use Ref to check current state, not captured state
      if (isVoiceModeRef.current) {
        startListening();
      }
    };

    synthRef.current.speak(utterance);
  };

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  }

  const handleSend = async (messageText = input) => {
    if (!messageText.trim()) return;

    // 1. Add User Message
    const userMessage = { role: 'user', content: messageText };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    stopSpeaking(); // Stop speaking if user interrupts

    try {
      // 2. API Call to Backend
      // We pass the last 10 messages for context
      const historyContext = messages.slice(-10);
      const response = await chatbotAPI.chat(messageText, historyContext);

      // 3. Prepare AI Response for Display (Keep Markdown, Remove System Commands)
      const displayReply = response.reply.replace(/\{\{NAVIGATE:.*?\}\}/g, '');

      // 4. Voice Output (Clean Text entirely)
      const speechText = response.reply
          .replace(/\*\*(.*?)\*\*/g, '$1')
          .replace(/\{\{NAVIGATE:.*?\}\}/g, '');

      const botMessage = { role: 'assistant', content: displayReply };
      setMessages(prev => [...prev, botMessage]);

      playSound('message');

      // 5. Voice Output (if Voice Mode is ON)
      if (isVoiceMode) {
        speakText(speechText);
      }

      // (Voice already handled above)

      // 5. Check if it was a Lead Capture event (based on backend signal or loose heuristic)
      // For now, we assume if the bot says "Thanks" and we have sufficient turns, it might be a lead.
      // Ideally, the backend should return a flag `isLeadCapturing: true`.
      // We will perform a basic check:
      if (response.reply.toLowerCase().includes("contact") && response.reply.toLowerCase().includes("save")) {
        MarketingService.trackLeadCaptured();
      }

      MarketingService.trackChatInteraction('message_sent');

    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting right now. Please try again later." }]);
      if (isVoiceMode) speakText("I am having trouble connecting. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const playSound = (type) => {
    // Simple notification sound logic (optional, for polish)
    // Could integrate a real Audio object here
  };

  // --- UI COMPONENTS ---

  const suggestedQuestions = [
    "What services do you offer?",
    "How much for a website?",
    "I need SEO for my business",
    "Contact sales team"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-[#0f0f13]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/5"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-white/10 flex justify-between items-center relative overflow-hidden">
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl" />

              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg relative">
                  <Bot className="w-5 h-5 text-white" />
                  {/* Online Indicator */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0f0f13] rounded-full">
                    <span className="absolute w-full h-full bg-green-500 rounded-full animate-ping opacity-75"></span>
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">AI Assistant</h3>
                  <p className="text-xs text-blue-300 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Premium Support
                  </p>
                </div>
              </div>

              <div className="flex gap-2 relative z-10">
                <button
                  onClick={toggleVoiceMode}
                  className={`p-2 rounded-lg transition-all ${isVoiceMode ? 'bg-red-500/20 text-red-500 animate-pulse' : 'bg-white/5 text-gray-400 hover:text-white'}`}
                  title={isVoiceMode ? "Disable Voice Mode" : "Enable Voice Mode"}
                >
                  {isSpeaking ? <Volume2 className="w-4 h-4" /> : isVoiceMode ? <Mic className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleChat}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Voice Status Indicator (Only Visible in Voice Mode) */}
            <AnimatePresence>
              {isVoiceMode && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: '40px' }}
                  exit={{ height: 0 }}
                  className="bg-black/40 border-b border-white/5 flex items-center justify-center"
                >
                  {isListening ? (
                    <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-widest">
                      <div className="flex gap-1 items-end h-4">
                        <span className="w-1 bg-red-400 h-2 animate-[bounce_1s_infinite]"></span>
                        <span className="w-1 bg-red-400 h-3 animate-[bounce_1.2s_infinite]"></span>
                        <span className="w-1 bg-red-400 h-4 animate-[bounce_0.8s_infinite]"></span>
                        <span className="w-1 bg-red-400 h-2 animate-[bounce_1.1s_infinite]"></span>
                      </div>
                      Listening...
                    </div>
                  ) : isSpeaking ? (
                    <div className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-widest">
                      <Activity className="w-4 h-4 animate-pulse" />
                      Speaking...
                    </div>
                  ) : (
                    <span className="text-gray-500 text-xs">Ready</span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-black/20">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none shadow-lg shadow-blue-900/20'
                        : 'bg-white/10 text-gray-200 rounded-bl-none border border-white/5'
                      }`}
                  >
                    {/* ONLY animate the LAST message if it is from the assistant */}
                    {(msg.role === 'assistant' && idx === messages.length - 1 && !loading) ? (
                        <Typewriter text={msg.content} onComplete={scrollToBottom} onUpdate={scrollToBottom} />
                    ) : (
                        renderMessageContent(msg.content)
                    )}
                  </div>
                </motion.div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 rounded-2xl rounded-bl-none p-3 border border-white/5 flex items-center gap-3">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                    </div>
                    <span className="text-xs text-blue-300/80 animate-pulse">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions (Quick Replies) */}
            {messages.length < 3 && !loading && (
              <div className="px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
                {suggestedQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="whitespace-nowrap bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-400 px-3 py-1.5 rounded-full transition-all hover:text-white"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white/5 border-t border-white/10">
              <div className="relative flex items-center bg-black/40 border border-white/10 rounded-xl focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/20 transition-all">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder={isListening ? "Listening..." : "Type a message..."}
                  className="w-full bg-transparent text-white px-4 py-3 text-sm focus:outline-none placeholder:text-gray-600"
                  disabled={loading || isListening}
                />

                <div className="flex items-center gap-1 pr-2">
                  <button
                    onClick={toggleVoiceMode}
                    className={`p-2 rounded-lg transition-all ${isVoiceMode ? 'text-blue-400 bg-blue-500/10' : 'text-gray-500 hover:text-gray-300'}`}
                    title="Voice Input"
                  >
                    <Mic className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleSend()}
                    disabled={!input.trim() || loading || isListening}
                    className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-900/20"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-[10px] text-gray-600 flex items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Powered by Codenclick Engines
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 relative group ${isOpen
            ? 'bg-gray-800 text-white'
            : 'bg-gradient-to-br from-blue-600 to-purple-600 text-white'
          }`}
      >
        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-0 group-hover:opacity-75 duration-1000" />

        {isOpen ? (
          <ChevronRight className="w-6 h-6 rotate-90" />
        ) : (
          <div className="relative">
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default Chatbot;
