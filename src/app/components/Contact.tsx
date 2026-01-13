import { Mail, Send, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute top-10 right-20 w-40 h-40 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <motion.div
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 text-violet-600" />
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Gotowy na rozmowę?
            </motion.h2>
            <motion.div
              animate={{ rotate: [0, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Sparkles className="w-6 h-6 text-pink-600" />
            </motion.div>
          </div>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-violet-600 to-pink-600 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Masz pytania o cennik? Chcesz omówić swój projekt? Napisz - odpowiem w ciągu 24 godzin i chętnie pomogę!
          </motion.p>
        </motion.div>

        <motion.a
          href="mailto:sisiwebstudio@gmail.com"
          className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white rounded-full hover:shadow-2xl transition-all text-lg mb-12 group shadow-lg font-semibold"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          >
            <Mail className="w-5 h-5" />
          </motion.div>
          sisiwebstudio@gmail.com
          <motion.div
            whileHover={{ x: [0, 3, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <Send className="w-5 h-5" />
          </motion.div>
        </motion.a>

        <motion.p
          className="text-gray-500 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          © 2026 Lofi Web Studio. Stworzone z 💜 i dużą ilością ☕
        </motion.p>
      </div>
    </section>
  );
}
