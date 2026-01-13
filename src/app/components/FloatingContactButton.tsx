import { MessageCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

interface FloatingContactButtonProps {
  onNavigate: (page: 'contact') => void;
}

export function FloatingContactButton({ onNavigate }: FloatingContactButtonProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [200, 300], [0, 1]);
  const scale = useTransform(scrollY, [200, 300], [0.8, 1]);

  return (
    <motion.button
      onClick={() => onNavigate('contact')}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-violet-500/50 transition-all cursor-pointer group"
      style={{ opacity, scale }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.div>
      <span className="font-semibold hidden sm:block">Darmowa wycena</span>

      {/* Pulsing ring effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-violet-600"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />
    </motion.button>
  );
}
