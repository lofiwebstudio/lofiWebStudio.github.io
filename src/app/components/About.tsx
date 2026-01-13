import { Code2, Palette, Rocket, Users, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const skills = [
    {
      icon: Code2,
      title: 'Solidna technicznie',
      description:
        'Kod napisany ręcznie przez doświadczoną programistkę. Bez gotowych szablonów WordPress, które psują się po aktualizacji',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: Palette,
      title: 'Design z myślą o konwersji',
      description:
        'Czytelny układ, przemyślana nawigacja i wyraźne przyciski CTA. Strona, która prowadzi użytkownika do kontaktu',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Rocket,
      title: 'Szybka i responsywna',
      description:
        'Błyskawiczne ładowanie, płynne działanie na każdym urządzeniu. SEO-friendly i zoptymalizowana pod Google',
      color: 'from-violet-400 to-purple-400',
    },
    {
      icon: Users,
      title: 'Bez ukrytych kosztów',
      description: 'Płacisz raz, strona jest Twoja na zawsze. Bez miesięcznych abonamentów, bez zaskoczenia ceną',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto">
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
            <motion.h2
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              O Mnie
            </motion.h2>
            <Sparkles className="w-6 h-6 text-pink-600" />
          </motion.div>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-violet-600 to-pink-600 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Pomagam właścicielom małych firm rozwijać się online, tworząc{' '}
            <b>solidne, dopracowane strony internetowe</b>, które naprawdę wspierają sprzedaż i budują zaufanie klientów.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Jestem programistką 👩‍💻 z <b>8-letnim doświadczeniem komercyjnym</b>. Na co dzień pracuję przy profesjonalnych projektach, a po godzinach tworzę strony dla małych firm, które oczekują jakości, stabilności i spokoju we współpracy.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Moje strony są <b>szybkie, niezawodne i wolne od błędów</b>, bo powstają w oparciu o dobre praktyki programistyczne, a nie gotowe „klikane szablony". Płacisz raz - strona jest Twoja na zawsze, bez abonamentów.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group cursor-pointer relative overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity`}
              />
              <motion.div
                className={`w-14 h-14 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-5 shadow-lg relative z-10`}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -10, 10, -10, 0],
                }}
                transition={{ duration: 0.5 }}
              >
                <skill.icon className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 relative z-10 group-hover:text-violet-600 transition-colors">{skill.title}</h3>
              <p className="text-gray-600 relative z-10 leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
