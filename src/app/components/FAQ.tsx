import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Czy potrzebuję hostingu i domeny?',
      answer:
        'Nie musisz się tym martwić! Pomogę Ci wybrać odpowiedni hosting (od ~20 zł/mies) i domenę (od ~50 zł/rok). Mogę też zająć się całą konfiguracją - Ty dostajesz gotową, działającą stronę.',
    },
    {
      question: 'Jak długo trwa realizacja strony?',
      answer:
        'To zależy od wybranego pakietu: MINI (do 5 dni), STANDARD (do 7 dni), PLUS (do 10 dni). Terminy są realne - nie obiecuję niemożliwego. Większość projektów kończę nawet wcześniej.',
    },
    {
      question: 'Co jeśli będę chciał coś zmienić po wdrożeniu?',
      answer:
        'Przez pierwsze 30 dni masz darmowe wsparcie - drobne poprawki, zmiany tekstów czy zdjęć bez dodatkowych kosztów. Po tym okresie mogę przygotować wycenę godzinową dla większych zmian.',
    },
    {
      question: 'Czy mogę sam edytować treść na stronie?',
      answer:
        'Tak! Strony koduję tak, aby można było łatwo edytować teksty i zdjęcia bez znajomości programowania. Pokażę Ci jak to zrobić. Jeśli wolisz, mogę też zająć się aktualizacjami za Ciebie.',
    },
    {
      question: 'Czy strona będzie responsywna (mobilna)?',
      answer:
        'Absolutnie! Wszystkie strony projektuję mobile-first, czyli najpierw dla telefonów, potem dla desktopów. Strona będzie wyglądać świetnie i szybko działać na każdym urządzeniu.',
    },
    {
      question: 'Co z SEO? Czy strona będzie widoczna w Google?',
      answer:
        'Każda strona ma podstawową optymalizację SEO - odpowiednie meta tagi, szybkość ładowania, strukturę URL. To fundament. Pozycjonowanie (Google Ads, linki, treści) to osobna usługa, którą możesz zlecić specjalistom SEO.',
    },
    {
      question: 'Czy strona będzie należeć do mnie?',
      answer:
        'Tak! Płacisz raz i strona jest Twoja na zawsze. Dostajesz pełny kod źródłowy i wszystkie dostępy. Możesz w przyszłości przenieść ją do innego programisty lub samodzielnie rozwijać.',
    },
    {
      question: 'Dlaczego nie WordPress/Wix?',
      answer:
        'WordPress i Wix to dobre narzędzia, ale mają wady: wolniejsze ładowanie, problemy z aktualizacjami, miesięczne abonامenty. Strony kodowane ręcznie są szybsze, bezpieczniejsze i należą do Ciebie bez żadnych opłat miesięcznych.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
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
              Najczęściej zadawane pytania
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
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Odpowiedzi na pytania, które najczęściej słyszę od klientów
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-violet-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-6">
            Masz inne pytanie? Napisz - chętnie odpowiem!
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full hover:shadow-xl transition-all font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Zadaj pytanie
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
