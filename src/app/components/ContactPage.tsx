import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface ContactPageProps {
  selectedPackage?: string;
}

export function ContactPage({ selectedPackage }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: selectedPackage || '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mdaaojnk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          package: formData.package,
          message: formData.message,
          _subject: `Nowe zapytanie z portfolio${formData.package ? ` - Pakiet: ${formData.package}` : ''}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            package: selectedPackage || '',
            message: '',
          });
        }, 3000);
      } else {
        alert('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto mt-20">
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
            <Mail className="w-6 h-6 text-violet-600" />
            <h1 className="text-4xl md:text-6xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skontaktuj się
            </h1>
            <Mail className="w-6 h-6 text-pink-600" />
          </motion.div>
          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Masz pytania? Potrzebujesz wyceny? A może chcesz po prostu porozmawiać o swoim projekcie? Napisz - odpowiem w ciągu 24 godzin!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center h-full text-center py-12"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ duration: 0.6, type: 'spring' }}
                >
                  <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Dziękuję za wiadomość!</h3>
                <p className="text-gray-600 text-lg mb-2">Twoja wiadomość została wysłana pomyślnie.</p>
                <p className="text-gray-500 text-sm">Odezwę się do Ciebie w ciągu 24 godzin na podany adres email.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {formData.package && (
                  <motion.div
                    className="bg-gradient-to-r from-violet-100 to-purple-100 p-4 rounded-xl border border-violet-200"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-violet-600" />
                      <span className="text-sm text-violet-900">
                        Wybrany pakiet: <strong>{formData.package}</strong>
                      </span>
                    </div>
                  </motion.div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-600 focus:ring-2 focus:ring-violet-200 outline-none transition-all"
                    placeholder="np. Jan Kowalski"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-600 focus:ring-2 focus:ring-violet-200 outline-none transition-all"
                    placeholder="np. jan@mojafirma.pl"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon <span className="text-gray-500 font-normal">(opcjonalnie)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-600 focus:ring-2 focus:ring-violet-200 outline-none transition-all"
                    placeholder="np. +48 123 456 789"
                  />
                </div>

                <div>
                  <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                    Interesujący pakiet <span className="text-gray-500 font-normal">(opcjonalnie)</span>
                  </label>
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-600 focus:ring-2 focus:ring-violet-200 outline-none transition-all bg-white"
                  >
                    <option value="">Wybierz pakiet lub napisz o swoich potrzebach...</option>
                    <option value="MINI">Pakiet MINI - 1 400 zł netto (wizytówka online)</option>
                    <option value="STANDARD">Pakiet STANDARD - 2 000 zł netto (najpopularniejszy)</option>
                    <option value="PLUS">Pakiet PLUS - 2 600 zł netto (zaawansowana strona)</option>
                    <option value="INDYWIDUALNY">Oferta indywidualna - dopasowana do budżetu</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-600 focus:ring-2 focus:ring-violet-200 outline-none transition-all resize-none"
                    placeholder="Opowiedz mi o swoim projekcie... Np.: Jaki jest cel strony? Kto jest grupą docelową? Czy masz już materiały (logo, zdjęcia, teksty)?"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-semibold text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Wyślij zapytanie
                </motion.button>
                <p className="text-xs text-gray-500 text-center -mt-2">
                  Odpowiadam na wszystkie wiadomości w ciągu 24h
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Info Cards */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900">Email</h3>
                  <a
                    href="mailto:sisiwebstudio@gmail.com"
                    className="text-violet-600 hover:underline font-medium"
                  >
                    sisiwebstudio@gmail.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Najszybszy sposób kontaktu - odpowiadam w ciągu 24h</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900">Telefon</h3>
                  <a href="tel:+48728285265" className="text-purple-600 hover:underline font-medium">
                    +48 728 285 265
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Pon-Pt: 9:00 - 17:00 (preferowany kontakt mailowy)</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900">Lokalizacja</h3>
                  <p className="text-gray-700 font-medium">Kraków, Polska</p>
                  <p className="text-sm text-gray-600 mt-1">Spotkania online (cała Polska) lub osobiście w Krakowie</p>
                </div>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              className="bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl shadow-xl p-6 text-white"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Dlaczego warto się skontaktować?
              </h3>
              <ul className="space-y-3 text-sm text-white/95">
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0">✅</span>
                  <span>Darmowa konsultacja - porozmawiamy o Twoich potrzebach bez zobowiązań</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0">✅</span>
                  <span>Szybka odpowiedź - gwarantowana reakcja w ciągu 24 godzin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0">✅</span>
                  <span>Konkretna wycena - transparentne ceny dostosowane do Twojego budżetu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0">✅</span>
                  <span>Profesjonalne doradztwo - pomogę wybrać najlepsze rozwiązanie dla Twojego biznesu</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
