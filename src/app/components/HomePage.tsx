import { Hero } from './Hero';
import { About } from './About';
import { WhyNotBuilder } from './WhyNotBuilder';
import { Projects } from './Projects';
import { FAQ } from './FAQ';
import { Contact } from './Contact';
import { FloatingContactButton } from './FloatingContactButton';

interface HomePageProps {
  onProjectClick: (projectId: number) => void;
  onNavigate: (page: 'contact') => void;
}

export function HomePage({ onProjectClick, onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <WhyNotBuilder />
      <Projects onProjectClick={onProjectClick} />
      <FAQ />
      <Contact />
      <FloatingContactButton onNavigate={onNavigate} />
    </div>
  );
}
