import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface ProjectsProps {
  onProjectClick: (projectId: number) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      id: 0,
      title: 'Strona fotografa ślubnego',
      description:
        'Elegancka strona dla fotografa z interaktywną galerią, pakietami cenowymi i systemem rezerwacji sesji',
      image: '/wedding-photographer.png',
      tags: ['Galeria', 'Cennik', 'Rezerwacje'],
      gradient: 'from-violet-400 to-purple-400',
      url: "https://lofiwebstudio.github.io/wedding-photos-portfolio/"
    },
    {
      id: 4,
      title: 'Doradca finansowy',
      description:
          'Profesjonalna strona doradcy z obszarami specjalizacji, opiniami klientów i formularzem wstępnej konsultacji',
      image: '/doradca.png',
      tags: ['Finanse', 'Opinie', 'One-page'],
      gradient: 'from-purple-500 to-indigo-500',
      url: "https://lofiwebstudio.github.io/doradca/"
    },
    {
      id: 2,
      title: 'Trener Personalny - Fitness',
      description:
        'Dynamiczna strona dla trenera z pakietami treningowymi, sekcją transformacji klientów i kalendarzem rezerwacji',
      image: '/trener.png',
      tags: ['Fitness', 'Opinie', 'Kalendarze'],
      gradient: 'from-purple-400 to-pink-400',
      url: "https://lofiwebstudio.github.io/trener-personalny/"
    },
    {
      id: 1,
      title: 'Korepetycje online z angielskiego',
      description:
          'Strona dla korepetytora z opisem metody nauczania, pakietami godzinowymi, opiniami uczniów i formularzem zapisu',
      image: '/korepetytor.png',
      tags: ['Edukacja', 'Rezerwacje', 'Opinie'],
      gradient: 'from-violet-500 to-purple-500',
      url: "https://lofiwebstudio.github.io/korepetytor/"
    },
    {
      id: 3,
      title: 'Wedding planner',
      description:
          'Romantyczna strona konsultanta ślubnego z portfolio realizacji, pakietami usług i formularzem kontaktowym',
      image: '/wedding-planner.png',
      tags: ['Śluby', 'Portfolio', 'One-page'],
      gradient: 'from-pink-400 to-rose-400',
      url: "https://lofiwebstudio.github.io/wedding-planner/"
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-6 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
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
              className="text-3xl md:text-4xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Ostatnie realizacje
            </motion.h2>
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
            className="text-lg text-gray-700 max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Zobacz, jak tworzę nowoczesne strony internetowe dla małych firm i freelancerów.
            Każdy projekt zaprojektowany z myślą o konwersji i łatwości obsługi.
          </motion.p>
          <motion.p
            className="text-sm text-gray-500 max-w-2xl mx-auto mt-3 italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Kliknij w projekt, aby zobaczyć pełną stronę w akcji
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative cursor-pointer border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => window.open(project.url, '_blank')}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                <motion.div
                  className="absolute top-3 right-3"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{
                    scale: hoveredIndex === index ? 1 : 0,
                    rotate: hoveredIndex === index ? 0 : -180,
                  }}
                  transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
                ></motion.div>
              </div>

              <div className="p-6">
                <motion.div
                  className="flex items-start justify-between gap-2 mb-3"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-violet-600 transition-colors">{project.title}</h3>
                  <motion.div
                    animate={hoveredIndex === index ? { x: [0, 3, 0] } : {}}
                    transition={{ duration: 1, repeat: hoveredIndex === index ? Infinity : 0 }}
                    className="flex-shrink-0"
                  >
                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-violet-600" />
                  </motion.div>
                </motion.div>
                <motion.p
                  className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {project.description}
                </motion.p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 text-xs rounded-full hover:from-violet-200 hover:to-purple-200 transition-all font-medium border border-violet-200/50"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + tagIndex * 0.05, type: 'spring' }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
