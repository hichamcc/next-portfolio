'use client';

import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBubbleLeftEllipsisIcon, XMarkIcon, PaperAirplaneIcon, CheckIcon } from '@heroicons/react/24/outline';

type Status = 'idle' | 'sending' | 'success' | 'error';

const AskMe: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const panelRef = useRef<HTMLDivElement>(null);

  // Close panel on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: '',
          subject: 'Quick question via Ask Me',
          email,
          message: question,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
        setQuestion('');
        setTimeout(() => {
          setStatus('idle');
          setOpen(false);
        }, 2500);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[140] flex flex-col items-end gap-3" ref={panelRef}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-80 bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-700">
              <div>
                <p className="text-white font-semibold text-sm">Ask me anything</p>
                <p className="text-gray-400 text-xs mt-0.5">I'll reply to your email</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Close"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div>
                <label htmlFor="ask-email" className="block text-xs font-medium text-gray-400 mb-1.5">
                  Your email
                </label>
                <input
                  id="ask-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="ask-question" className="block text-xs font-medium text-gray-400 mb-1.5">
                  Your question
                </label>
                <textarea
                  id="ask-question"
                  required
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="What would you like to know?"
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white text-gray-900 text-sm font-semibold hover:bg-gray-100 transition-colors disabled:opacity-60"
              >
                {status === 'sending' && (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-gray-400 border-t-gray-900 rounded-full inline-block"
                    />
                    Sending…
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckIcon className="w-4 h-4" />
                    Sent!
                  </>
                )}
                {(status === 'idle' || status === 'error') && (
                  <>
                    <PaperAirplaneIcon className="w-4 h-4" />
                    {status === 'error' ? 'Try again' : 'Send message'}
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="text-xs text-red-400 text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        className="flex items-center gap-2 px-5 py-3 bg-white text-gray-900 rounded-full shadow-lg hover:bg-gray-100 transition-colors font-semibold text-sm"
        aria-label="Ask me a question"
      >
        <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />
        Ask me
      </motion.button>
    </div>
  );
};

export default AskMe;
