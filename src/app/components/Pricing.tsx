import { motion } from 'motion/react';
import { Check, Clock, MessageSquare, Sparkles, Star, Zap, Rocket, Crown } from 'lucide-react';

interface PricingProps {
  onSelectPackage: (page: 'contact', packageName: string) => void;
}

export function Pricing({ onSelectPackage }: PricingProps) {
  const packages = [
    {
      name: 'MINI',
      price: '1 400 zł',
      priceNote: 'netto',
      color: 'from-violet-400 to-purple-400',
      icon: 'Zap',
      subtitle:
        'Dla bardzo małych firm i usług lokalnych, które potrzebują solidnej obecności online',
      description: 'Idealne rozwiązanie na start - profesjonalna wizytówka online',
      features: [
        '1 strona (one-page) lub do 3 sekcji',
        'w pełni responsywny design (telefon, tablet, desktop)',
        'formularz kontaktowy',
        'podstawowa optymalizacja SEO (meta tagi, szybkość ładowania)',
        'wdrożenie i publikacja na serwerze',
      ],
      time: 'do 5 dni',
      revisions: '1 runda poprawek',
      popular: false,
      ctaText: 'Sprawdź dostępność',
    },
    {
      name: 'STANDARD',
      price: '2 000 zł',
      priceNote: 'netto',
      color: 'from-violet-600 to-purple-600',
      icon: 'Rocket',
      subtitle: 'Najlepszy balans między ceną, jakością i funkcjonalnością',
      description: 'Kompleksowa strona z wszystkim, czego potrzebuje rozwijający się biznes',
      features: [
        'do 5 podstron',
        'w pełni responsywny design (telefon, tablet, desktop)',
        'formularze kontaktowe z walidacją',
        'optymalizacja SEO (meta tagi, struktura URL, szybkość)',
        'integracja z mapami Google',
        'galeria zdjęć z lightbox',
      ],
      time: 'do 7 dni',
      revisions: '2 rundy poprawek',
      popular: true,
      ctaText: 'Wybieram Standard',
    },
    {
      name: 'PLUS',
      price: '2 600 zł',
      priceNote: 'netto',
      color: 'from-purple-600 to-pink-600',
      icon: 'Crown',
      subtitle: 'Dla firm, które chcą budować zaufanie i wyglądać profesjonalnie',
      description: 'Zaawansowana strona, która wyróżni Cię na rynku',
      features: [
        'do 8 podstron',
        'w pełni responsywny design (telefon, tablet, desktop)',
        'zaawansowane formularze kontaktowe',
        'rozbudowane interaktywne elementy i animacje',
        'pełna optymalizacja SEO (+ schema.org, Open Graph)',
        'zaawansowana galeria zdjęć',
        'mapy Google + dodatkowe integracje',
      ],
      time: 'do 10 dni',
      revisions: '3 rundy poprawek',
      popular: false,
      ctaText: 'Sprawdź dostępność',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto mt-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-6 h-6 text-violet-600" />
            <h1 className="text-4xl md:text-6xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Cennik
            </h1>
            <Sparkles className="w-6 h-6 text-pink-600" />
          </motion.div>

          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Profesjonalne strony w przystępnej cenie. Płacisz tylko raz - żadnych abonamentów,
            żadnych ukrytych kosztów.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-violet-600' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <motion.div
                  className="absolute top-4 right-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <Star className="w-3 h-3" />
                  <span>Najczęściej wybierany</span>
                </motion.div>
              )}

              {/* Header */}
              <div className={`p-8 bg-gradient-to-br ${pkg.color} relative overflow-hidden`}>
                <motion.div
                  className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <div className="relative z-10">
                  <div className="mb-3">
                    {pkg.icon === 'Zap' && <Zap className="w-10 h-10 text-white" />}
                    {pkg.icon === 'Rocket' && <Rocket className="w-10 h-10 text-white" />}
                    {pkg.icon === 'Crown' && <Crown className="w-10 h-10 text-white" />}
                  </div>
                  <h3 className="text-2xl text-white mb-2">Pakiet {pkg.name}</h3>
                  <p className="text-white/90 text-sm mb-6">{pkg.subtitle}</p>
                  <div className="flex items-baseline gap-2">
                    <div className="text-4xl font-bold text-white">{pkg.price}</div>
                    <div className="text-white/80 text-sm">{pkg.priceNote}</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <p className="text-sm text-gray-600 mb-6 font-medium">
                  {pkg.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm uppercase text-gray-500 mb-5 font-semibold tracking-wide">W cenie:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      >
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Time & Revisions */}
                <div className="border-t border-gray-200 pt-6 space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4 text-violet-600" />
                    <span className="text-sm">
                      Termin realizacji: <strong>{pkg.time}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MessageSquare className="w-4 h-4 text-violet-600" />
                    <span className="text-sm">{pkg.revisions}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={() => onSelectPackage('contact', pkg.name)}
                  className={`mt-8 w-full py-3 rounded-full transition-all cursor-pointer font-semibold ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {pkg.ctaText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl mb-6 text-gray-900 font-semibold">💡 Dodatkowe informacje</h3>
            <div className="text-gray-600 space-y-3 text-sm">
              <p>✅ Hosting na pierwszy miesiąc gratis</p>
              <p>✅ Domena .pl lub .com w cenie (pierwszy rok)</p>
              <p>✅ Płatność w 2 ratach (50% przed, 50% po zakończeniu)</p>
              <p>✅ 30 dni wsparcia technicznego po wdrożeniu (potem opcjonalnie płatne)</p>
              <p>
                ✅ Potrzebujesz innego zakresu?{' '}
                <button
                  onClick={() => onSelectPackage('contact', 'INDYWIDUALNY')}
                  className="text-violet-600 hover:underline cursor-pointer font-medium"
                >
                  Skontaktuj się
                </button>{' '}
                - przygotuję wycenę szytą na miarę
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
