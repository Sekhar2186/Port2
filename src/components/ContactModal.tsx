import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, AlertTriangle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus('submitting');
    
    const formData = new FormData();
    formData.append('access_key', '20a69267-0040-4122-8619-abf794f3efe7');
    formData.append('from_name', name || 'Portfolio Visitor');
    formData.append('email', email || 'not-provided@example.com');
    formData.append('feedback', message);
    formData.append('subject', 'New Contact Form Submission - Sekhar Portfolio');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        setStatusMsg('Message sent successfully! I will get back to you soon.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setStatusMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setStatusMsg('Failed to send message. Please check your network connection.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-[30px] border border-[#D7E2EA]/20 bg-[#121212] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 rounded-full bg-white/5 p-2 text-[#D7E2EA] transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>

            <h3 className="mb-2 text-2xl font-bold uppercase tracking-wide text-white">
              Let&apos;s Connect
            </h3>
            <p className="mb-6 text-sm text-[#D7E2EA]/60">
              Have an idea, project, or feedback? Drop me a message below.
            </p>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <CheckCircle size={60} className="mb-4 text-green-500" />
                <h4 className="text-xl font-medium text-white mb-2">Thank You!</h4>
                <p className="text-sm text-[#D7E2EA]/80 max-w-sm mb-6">{statusMsg}</p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    onClose();
                  }}
                  className="rounded-full bg-white/10 px-6 py-2 text-sm text-white hover:bg-white/20 transition-colors"
                >
                  Close Window
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/70 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-[#D7E2EA]/10 bg-white/5 px-4 py-3 text-white placeholder-[#D7E2EA]/30 outline-none transition-all focus:border-[#D7E2EA]/40 focus:ring-1 focus:ring-[#D7E2EA]/40"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/70 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-[#D7E2EA]/10 bg-white/5 px-4 py-3 text-white placeholder-[#D7E2EA]/30 outline-none transition-all focus:border-[#D7E2EA]/40 focus:ring-1 focus:ring-[#D7E2EA]/40"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/70 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Let's build something incredible together..."
                    className="w-full resize-none rounded-xl border border-[#D7E2EA]/10 bg-white/5 px-4 py-3 text-white placeholder-[#D7E2EA]/30 outline-none transition-all focus:border-[#D7E2EA]/40 focus:ring-1 focus:ring-[#D7E2EA]/40"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-xl bg-red-500/10 p-3 text-xs text-red-400">
                    <AlertTriangle size={16} />
                    <span>{statusMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-black transition-all hover:bg-[#D7E2EA] active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
