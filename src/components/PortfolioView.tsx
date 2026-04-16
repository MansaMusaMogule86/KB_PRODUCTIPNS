import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icons } from './Icons';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface PortfolioViewProps {
  onProjectSelect?: (project: Project) => void;
  onNavigate?: (page: string) => void;
}

export default function PortfolioView({ onProjectSelect, onNavigate }: PortfolioViewProps) {
  const [activeFilter, setActiveFilter] = useState('ALL PROJECTS');
  const filters = ['ALL PROJECTS', 'REAL ESTATE', 'EVENTS', 'BRANDS', 'CARS', 'GYM'];

  const filteredProjects = activeFilter === 'ALL PROJECTS' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category.toUpperCase() === activeFilter);

  return (
    <div className="flex flex-col pt-20 md:pt-32">
      {/* Header */}
      <header className="px-6 md:px-10 mb-10 md:mb-20 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl sm:text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
          WORK <span className="text-primary text-glow">STUDIO</span>
        </h1>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
          Cinematic storytelling at the intersection of high-energy motion and editorial precision. Exploring the boundaries of visual production across global industries.
        </p>
      </header>

      {/* Filter Bar */}
      <section className="px-6 md:px-10 mb-8 md:mb-12 max-w-7xl mx-auto w-full overflow-x-auto scrollbar-none">
        <div className="flex items-center space-x-3 min-w-max pb-4">
          {filters.map((filter) => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full border font-bold uppercase text-[10px] tracking-widest transition-all ${
                activeFilter === filter 
                  ? 'border-primary bg-primary text-on-primary' 
                  : 'border-outline-variant bg-surface-container-low text-on-surface-variant hover:text-primary hover:border-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-6 md:px-10 mb-32 max-w-[1400px] mx-auto w-full min-h-[600px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isLarge = idx === 0;
              const isVertical = idx === 1;
              
              return (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ 
                    scale: 1.01,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.23, 1, 0.32, 1],
                    layout: { duration: 0.4 }
                  }}
                  key={project.id}
                  onClick={() => onProjectSelect?.(project)}
                  className={`group relative overflow-hidden rounded-2xl bg-surface-container-low cursor-pointer transition-all ${
                    isLarge ? 'md:col-span-8 h-[260px] sm:h-[360px] md:h-[600px]' :
                    isVertical ? 'md:col-span-4 h-[260px] sm:h-[360px] md:h-[600px]' :
                    'md:col-span-4 h-[220px] sm:h-[300px] md:h-[400px]'
                  }`}
                >
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 opacity-70 group-hover:opacity-100 group-hover:scale-105" 
                    src={project.thumbnail}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Icons.Play className="text-on-primary ml-1" size={32} fill="currentColor" />
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-8">
                    <span className="bg-primary text-on-primary px-3 py-1 rounded text-[10px] font-black uppercase tracking-tighter mb-4 inline-block">
                      {project.category}
                    </span>
                    <h3 className={`${isLarge ? 'text-4xl' : 'text-2xl'} font-black uppercase tracking-tighter text-white`}>
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <p className="text-on-surface-variant text-xl font-medium uppercase tracking-widest">No projects found in this category.</p>
            <button 
              onClick={() => setActiveFilter('ALL PROJECTS')}
              className="mt-6 text-primary font-bold uppercase tracking-widest text-sm hover:underline"
            >
              View all projects
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-10 py-16 md:py-32 bg-surface-container-low text-center">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 md:mb-10 max-w-4xl mx-auto">
          READY TO START YOUR <span className="text-primary">NEXT PRODUCTION</span>?
        </h2>
        <button onClick={() => onNavigate?.('booking')} className="group inline-flex items-center justify-center space-x-4 bg-primary text-on-primary px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black uppercase tracking-widest text-base md:text-lg mx-auto hover:scale-105 transition-all w-full sm:w-auto cursor-pointer">
          <span>START A PROJECT</span>
          <Icons.ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </button>
      </section>
    </div>
  );
}
