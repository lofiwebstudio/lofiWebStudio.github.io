import { motion } from 'motion/react';
import { Sparkles, X, Check } from 'lucide-react';

export function WhyNotBuilder() {
  const comparison = [
    {
      feature: 'Szybkość ładowania',
      builder: 'Wolna (dużo zbędnego kodu)',
      custom: 'Błyskawiczna (czysty kod)',
      builderBad: true,
    },
    {
      feature: 'Koszty miesięczne',
      builder: '50-200 zł/mies (abonament)',
      custom: '0 zł (płacisz raz)',
      builderBad: true,
    },
    {
      feature: 'Własność strony',
      builder: 'Należy do platformy',
      custom: 'W 100% Twoja',
      builderBad: true,
    },
    {
      feature: 'Aktualizacje',
      builder: 'Problemy po update',
      custom: 'Stabilna, bez niespodzianek',
      builderBad: true,
    },
    {
      feature: 'SEO i wydajność',
      builder: 'Ograniczona kontrola',
      custom: 'Pełna optymalizacja',
      builderBad: true,
    },
    {
      feature: 'Bezpieczeństwo',
      builder: 'Podatne na ataki (wtyczki)',
      custom: 'Bezpieczne (bez wtyczek)',
      builderBad: true,
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
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
              Dlaczego nie darmowy kreator?
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
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            WordPress, Wix i inne kreatory są dobre na start, ale mają ograniczenia. Oto porównanie z profesjonalnie zakodowaną stroną.
          </motion.p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-white border-b-2 border-violet-200">
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-500 uppercase">Porównanie</h3>
            </div>
            <div className="text-center">
              <h3 className="text-sm font-semibold text-rose-600 uppercase">WordPress/Wix</h3>
            </div>
            <div className="text-center">
              <h3 className="text-sm font-semibold text-violet-600 uppercase">Kod ręcznie</h3>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-violet-100">
            {comparison.map((item, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-3 gap-4 p-6 hover:bg-white/50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900">{item.feature}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <X className="w-5 h-5 text-rose-500 flex-shrink-0" />
                  <span className="text-gray-600 text-sm text-center">{item.builder}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-900 font-medium text-sm text-center">{item.custom}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Info Box */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl p-6 border border-violet-200"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className="text-lg font-bold text-violet-900 mb-2">💰 Oszczędność</h4>
            <p className="text-violet-700 text-sm">
              Płacisz raz ~2000 zł zamiast ~100 zł/mies przez lata. Po 2 latach oszczędzasz już 400 zł!
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 border border-purple-200"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className="text-lg font-bold text-purple-900 mb-2">⚡ Szybkość</h4>
            <p className="text-purple-700 text-sm">
              Strona ładuje się 3-5x szybciej niż WordPress. Google to uwielbia = wyższa pozycja w wynikach!
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-6 border border-pink-200"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className="text-lg font-bold text-pink-900 mb-2">🔒 Bezpieczeństwo</h4>
            <p className="text-pink-700 text-sm">
              Bez wtyczek = bez luk bezpieczeństwa. WordPress to cel nr 1 dla hakerów ze względu na popularność.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-600 mb-6 text-lg">
            <b>Wniosek?</b> Jeśli zależy Ci na szybkiej, bezpiecznej stronie bez miesięcznych opłat - kod ręczny to najlepsza inwestycja.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full hover:shadow-xl transition-all font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Zamów profesjonalną stronę
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
