import { useState } from 'react';
import { motion } from 'motion/react';
import { Icons } from './Icons';
import { Project } from '../types';

interface ProjectDetailViewProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetailView({ project, onBack }: ProjectDetailViewProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const maxLength = 200;
  const shouldTruncate = project.description.length > maxLength;
  const displayDescription = isExpanded || !shouldTruncate 
    ? project.description 
    : project.description.slice(0, maxLength) + '...';

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex flex-col pt-20">
      {/* Top Bar */}
      <div className="px-6 md:px-10 py-8 max-w-7xl mx-auto w-full flex justify-between items-center">
        <button 
          onClick={onBack}
          className="group flex items-center space-x-2 text-on-surface-variant hover:text-primary transition-colors font-bold uppercase tracking-widest text-xs"
        >
          <Icons.ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={16} />
          <span>BACK TO PORTFOLIO</span>
        </button>

        <button 
          onClick={handleShare}
          className="group flex items-center space-x-2 text-on-surface-variant hover:text-primary transition-colors font-bold uppercase tracking-widest text-xs"
        >
          {copied ? (
            <>
              <Icons.CheckIcon className="text-primary" size={16} />
              <span className="text-primary">LINK COPIED</span>
            </>
          ) : (
            <>
              <Icons.Share size={16} />
              <span>SHARE PROJECT</span>
            </>
          )}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full object-cover"
          src={project.heroImage}
          alt={project.title}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="bg-primary text-on-primary px-4 py-1.5 rounded text-xs font-black uppercase tracking-tighter mb-6 inline-block">
                {project.category}
              </span>
              <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none text-white mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-8 text-on-surface-variant font-bold uppercase tracking-widest text-xs">
                {project.client && (
                  <div className="flex flex-col">
                    <span className="text-primary/60 mb-1">CLIENT</span>
                    <span className="text-white">{project.client}</span>
                  </div>
                )}
                {project.year && (
                  <div className="flex flex-col">
                    <span className="text-primary/60 mb-1">YEAR</span>
                    <span className="text-white">{project.year}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-10 py-24 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <h2 className="text-primary font-black uppercase tracking-widest text-sm mb-6">THE BRIEF</h2>
          <div className="mb-12">
            <p className="text-2xl md:text-3xl text-on-surface leading-relaxed font-medium">
              {displayDescription}
            </p>
            {shouldTruncate && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 text-primary font-black uppercase tracking-widest text-xs hover:underline transition-all"
              >
                {isExpanded ? 'VIEW LESS' : 'VIEW MORE'}
              </button>
            )}
          </div>
          
          {(project.client || project.year) && (
            <div className="flex flex-wrap gap-12 pt-12 border-t border-outline-variant/20">
              {project.client && (
                <div className="flex flex-col">
                  <span className="text-primary font-black uppercase tracking-widest text-[10px] mb-2">CLIENT</span>
                  <span className="text-on-surface font-bold uppercase tracking-widest text-lg">{project.client}</span>
                </div>
              )}
              {project.year && (
                <div className="flex flex-col">
                  <span className="text-primary font-black uppercase tracking-widest text-[10px] mb-2">YEAR</span>
                  <span className="text-on-surface font-bold uppercase tracking-widest text-lg">{project.year}</span>
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-primary font-black uppercase tracking-widest text-[10px] mb-2">CATEGORY</span>
                <span className="text-on-surface font-bold uppercase tracking-widest text-lg">{project.category}</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="lg:col-span-5">
          <h2 className="text-primary font-black uppercase tracking-widest text-sm mb-6">KEY FEATURES</h2>
          <ul className="space-y-4">
            {project.keyFeatures.map((feature, idx) => (
              <motion.li 
                key={idx}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30"
              >
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(237,255,78,0.8)]"></div>
                <span className="font-bold uppercase tracking-widest text-sm text-on-surface-variant">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-6 md:px-10 py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-primary font-black uppercase tracking-widest text-sm mb-12 text-center">VISUAL ASSETS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="aspect-video rounded-2xl overflow-hidden bg-surface-container-low group cursor-pointer"
              >
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={img} 
                  alt={`${project.title} asset ${idx + 1}`}
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="px-6 md:px-10 py-32 text-center border-t border-outline-variant/20">
        <p className="text-primary font-black uppercase tracking-widest text-sm mb-6">NEXT PROJECT</p>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">IRON LEGACY</h2>
        <button 
          onClick={onBack}
          className="group flex items-center space-x-4 bg-primary text-on-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-lg mx-auto hover:scale-105 transition-all"
        >
          <span>VIEW ALL WORK</span>
          <Icons.ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </button>
      </section>
    </div>
  );
}
