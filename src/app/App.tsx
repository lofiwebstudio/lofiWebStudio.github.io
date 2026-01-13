import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { Pricing } from './components/Pricing';
import { ContactPage } from './components/ContactPage';
import { ProjectDetail } from './components/ProjectDetail';
import { useState, useEffect } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'pricing' | 'contact' | 'project'>(
    'home'
  );
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(undefined);
  const [selectedProjectId, setSelectedProjectId] = useState<number>(0);

  const handleNavigate = (page: 'home' | 'pricing' | 'contact', packageName?: string) => {
    setCurrentPage(page);
    if (packageName) {
      setSelectedPackage(packageName);
    }
  };

  const handleProjectClick = (projectId: number) => {
    setSelectedProjectId(projectId);
    setCurrentPage('project');
  };

  const handleBackFromProject = () => {
    setCurrentPage('home');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentPage={currentPage === 'project' ? 'home' : currentPage}
        onNavigate={handleNavigate}
      />
      {currentPage === 'home' && <HomePage onProjectClick={handleProjectClick} onNavigate={handleNavigate} />}
      {currentPage === 'pricing' && <Pricing onSelectPackage={handleNavigate} />}
      {currentPage === 'contact' && <ContactPage selectedPackage={selectedPackage} />}
      {currentPage === 'project' && (
        <ProjectDetail projectId={selectedProjectId} onBack={handleBackFromProject} />
      )}
    </div>
  );
}
