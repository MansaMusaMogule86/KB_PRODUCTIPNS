import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import PortfolioView from './components/PortfolioView';
import BookingView from './components/BookingView';
import ProjectDetailView from './components/ProjectDetailView';
import { Project } from './types';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage, selectedProject]);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setActivePage('project-detail');
  };

  const handleBackToPortfolio = () => {
    setSelectedProject(null);
    setActivePage('portfolio');
  };

  const renderPage = () => {
    if (activePage === 'project-detail' && selectedProject) {
      return <ProjectDetailView project={selectedProject} onBack={handleBackToPortfolio} />;
    }

    switch (activePage) {
      case 'home':
        return <HomeView onProjectSelect={handleProjectSelect} onNavigate={setActivePage} />;
      case 'services':
        return <ServicesView />;
      case 'portfolio':
        return <PortfolioView onProjectSelect={handleProjectSelect} />;
      case 'studio':
        return <PortfolioView onProjectSelect={handleProjectSelect} />;
      case 'booking':
        return <BookingView />;
      case 'about':
        return <HomeView onProjectSelect={handleProjectSelect} onNavigate={setActivePage} />;
      default:
        return <HomeView onProjectSelect={handleProjectSelect} onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={setActivePage} />
    </div>
  );
}
