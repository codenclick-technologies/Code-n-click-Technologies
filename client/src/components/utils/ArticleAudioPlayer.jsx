import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, Volume2, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

const ArticleAudioPlayer = ({ title, content }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [supported, setSupported] = useState(typeof window !== 'undefined' && 'speechSynthesis' in window);
  const utteranceRef = useRef(null);

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handlePlay = () => {
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPlaying(true);
      setIsPaused(false);
    } else {
      // Strip HTML tags for reading
      const cleanText = content.replace(/<[^>]+>/g, ' ');
      const textToRead = `${title}. ${cleanText}`;

      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      // Try to find a good English voice
      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(v => v.lang.includes('en-US')) || voices[0];
      if (englishVoice) utterance.voice = englishVoice;

      utterance.onend = () => {
        setIsPlaying(false);
        setIsPaused(false);
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    window.speechSynthesis.pause();
    setIsPlaying(false);
    setIsPaused(true);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  if (!supported) return null;

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-12 flex flex-col md:flex-row items-center gap-6 shadow-xl relative overflow-hidden group">

      {/* Background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

      <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20 shrink-0 relative">
        {isPlaying ? (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute inset-0 bg-blue-500 rounded-full opacity-50"
          />
        ) : null}
        <Volume2 size={28} className="text-white relative z-10" />
      </div>

      <div className="flex-1 text-center md:text-left">
        <h3 className="text-white font-serif font-bold text-xl mb-1">Listen to this Article</h3>
        <p className="text-gray-400 text-sm">Don't have time to read? Listen to the audio version.</p>
      </div>

      <div className="flex items-center gap-3">
        {!isPlaying ? (
          <button
            onClick={handlePlay}
            className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105"
          >
            <Play size={18} fill="currentColor" /> {isPaused ? "Resume" : "Play Audio"}
          </button>
        ) : (
          <button
            onClick={handlePause}
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white border border-gray-700 rounded-full font-bold hover:bg-gray-700 transition-all"
          >
            <Pause size={18} fill="currentColor" /> Pause
          </button>
        )}

        {(isPlaying || isPaused) && (
          <button
            onClick={handleStop}
            className="p-3 bg-red-500/10 text-red-500 rounded-full hover:bg-red-500/20 transition-all border border-red-500/20"
            title="Stop Audio"
          >
            <Square size={18} fill="currentColor" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ArticleAudioPlayer;
