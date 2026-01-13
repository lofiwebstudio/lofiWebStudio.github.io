import { motion } from 'motion/react';
import { Sparkles, MessageSquare, Palette, Code, Rocket, CheckCircle } from 'lucide-react';

export function ProcessTimeline() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Rozmowa i wycena',
      description: 'Opowiadasz o swoim biznesie i potrzebach. Przygotowuję szczegółową wycenę i plan działania.',
      duration: '1 dzień',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: Palette,
      title: 'Projekt i mockupy',
      description: 'Przedstawiam propozycję wyglądu strony. Wprowadzam poprawki zgodnie z Twoimi uwagami.',
      duration: '2-3 dni',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Code,
      title: 'Kodowanie strony',
      description: 'Tworzę stronę od zera z czystym, profesjonalnym kodem. Regularnie informuję o postępach.',
      duration: '3-7 dni',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Rocket,
      title: 'Testy i publikacja',
      description: 'Sprawdzam wszystko na różnych urządzeniach, wdrażam na serwer i przekazuję Ci dostępy.',
      duration: '1-2 dni',
      color: 'from-violet-400 to-purple-400',
    },
    {
      icon: CheckCircle,
      title: 'Wsparcie po wdrożeniu',
      description: '30 dni darmowego wsparcia - pomoc techniczna, drobne poprawki, szkolenie z obsługi.',
      duration: '30 dni',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-6 h-6 text-violet-600" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Jak wygląda współpraca?
            </h2>
            <Sparkles className="w-6 h-6 text-pink-600" />
          </motion.div>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-violet-600 to-pink-600 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Jasny proces, przejrzysta komunikacja i żadnych niespodzianek. Wiesz dokładnie, co się dzieje na każdym etapie.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-violet-200 via-purple-200 to-pink-200" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Content */}
                <motion.div
                  className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <p className="text-sm text-violet-600 font-medium">{step.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>

                {/* Center dot */}
                <motion.div
                  className="hidden md:block relative z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                >
                  <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full border-4 border-white shadow-lg`} />
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-6">
            Masz pytania o proces współpracy? Chętnie wszystko wyjaśnię!
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full hover:shadow-xl transition-all font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Zapytaj o szczegóły
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
