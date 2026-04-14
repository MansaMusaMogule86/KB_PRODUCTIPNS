import { motion } from 'motion/react';
import { Icons } from './Icons';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface HomeViewProps {
  onProjectSelect?: (project: Project) => void;
  onNavigate?: (page: string) => void;
}

export default function HomeView({ onProjectSelect, onNavigate }: HomeViewProps) {
  // Use first 3 projects for home view
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover grayscale opacity-40" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5apuNwPP50bIykaC8G9tvG0mJS74xpzlcbVH5jjZJcXR2ME3MZSTw6-PpfmgwRbyXjz_pb19PWR0hbhPbAmILKj-zb41Hobmgw1txK1WcIVUQhPc6gkX4Me0CAwHNOWr5KPsgWGZbR8OOEju6agGRRS7t4MpcPEoMUzGTjsrN22XaVX6G5hUSTRUKHmLaXBiMigOV5Qs88d3dHkGO8k7VAXop6l7ggCTEtU70W5NGLYuTGzATTpr0Z3QcbhDONvd7ZnNE23FHjno"
            alt="Cinematic Film Set"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 cinematic-vignette"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <h1 className="font-headline font-black text-5xl md:text-8xl lg:text-9xl tracking-tighter leading-tight uppercase mb-8">
            CINEMATIC <span className="text-stroke-primary">STORYTELLING.</span> <br/> PREMIUM CONTENT.
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Elevating brands through high-impact visual narratives. We blend technical precision with cinematic artistry to create unforgettable moments.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => onNavigate?.('booking')}
              className="w-full md:w-auto bg-primary text-on-primary font-headline font-bold px-10 py-5 rounded-2xl uppercase tracking-tighter hover:brightness-110 transition-all"
            >
              Book a Shoot
            </button>
            <button 
              onClick={() => onNavigate?.('portfolio')}
              className="w-full md:w-auto bg-surface-container-highest text-on-surface font-headline font-bold px-10 py-5 rounded-2xl uppercase tracking-tighter border border-outline-variant/20 hover:bg-surface-variant transition-all"
            >
              View Work
            </button>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll to Explore</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Icons.ChevronDown size={24} />
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-32 bg-black border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-4xl md:text-5xl font-serif italic font-medium text-white text-center mb-24 tracking-tight">
            Some of Our Clients
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-16 md:gap-24 items-center justify-items-center">
            {/* Row 1 */}
            <img className="h-10 md:h-14 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" src="https://logo.clearbit.com/puma.com" alt="Puma" referrerPolicy="no-referrer" />
            <img className="h-12 md:h-16 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" src="https://logo.clearbit.com/cellucor.com" alt="C4 Energy" referrerPolicy="no-referrer" />
            <img className="h-10 md:h-14 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" src="https://logo.clearbit.com/optimumnutrition.com" alt="Optimum Nutrition" referrerPolicy="no-referrer" />
            <img className="h-10 md:h-14 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" src="https://logo.clearbit.com/bpisports.com" alt="BPI Sports" referrerPolicy="no-referrer" />
            <div className="flex flex-col items-center group cursor-default">
              <span className="text-white font-black text-2xl tracking-tighter leading-none">SIX NINÉ 69</span>
              <span className="text-[7px] text-on-surface-variant tracking-[0.4em] mt-1 font-bold">AESTHETIC SPORTS</span>
            </div>

            {/* Row 2 */}
            <div className="flex items-center space-x-2 group cursor-default">
              <div className="relative">
                <div className="w-10 h-14 border-2 border-white flex items-center justify-center">
                  <Icons.Zap size={24} className="text-white fill-white" />
                </div>
                <span className="absolute -top-1 -right-2 text-[8px] font-bold text-white">TM</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl leading-none tracking-tighter">GYM</span>
                <span className="text-white font-black text-2xl leading-none tracking-tighter">SOX</span>
              </div>
            </div>

            <div className="flex flex-col items-center group cursor-default">
              <div className="relative mb-2">
                <Icons.Layers size={32} className="text-white" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] font-black text-black">LL</span>
                </div>
              </div>
              <span className="text-white font-black text-[10px] tracking-[0.3em]">LUXURY LOUNGE</span>
              <div className="w-8 h-px bg-white/30 mt-1"></div>
            </div>

            <div className="flex flex-col items-center group cursor-default">
              <span className="text-white font-serif italic text-3xl leading-none mb-1">triple</span>
              <div className="flex flex-col items-center">
                <span className="text-white font-black text-xs tracking-[0.6em] leading-none">SEVEN</span>
                <div className="w-full h-0.5 bg-primary mt-1"></div>
                <span className="text-[6px] text-on-surface-variant tracking-[0.2em] mt-1">PREMIUM GERMAN TOBACCO</span>
              </div>
            </div>

            <div className="border-2 border-white p-3 flex items-start space-x-2 group cursor-default">
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl leading-none">BL</span>
                <span className="text-white font-black text-2xl leading-none">U</span>
              </div>
              <div className="flex flex-col text-[6px] font-bold text-white tracking-widest pt-1">
                <span>D</span>
                <span>U</span>
                <span>B</span>
                <span>A</span>
                <span>I</span>
              </div>
            </div>

            <div className="flex flex-col items-center group cursor-default">
              <span className="text-white font-serif text-3xl tracking-[0.2em] leading-none mb-1">AUGUST</span>
              <span className="text-[7px] text-on-surface-variant tracking-[0.3em] font-bold">RESTAURANT & LOUNGE</span>
            </div>
          </div>

          <div className="mt-24 flex flex-col items-center">
            <span className="text-white font-headline font-medium text-xl mb-3 tracking-wide">And More ...</span>
            <div className="h-1 w-40 bg-primary shadow-[0_0_10px_rgba(237,255,78,0.5)]"></div>
          </div>
        </div>
      </section>

      {/* Selected Projects Section */}
      <section className="py-32 px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="font-headline font-black text-5xl md:text-7xl uppercase tracking-tighter">
            SELECTED <span className="text-primary">PROJECTS</span>
          </h2>
          <div className="h-px flex-grow bg-outline-variant/20 mx-10 hidden md:block"></div>
          <button 
            onClick={() => onNavigate?.('portfolio')}
            className="font-headline font-bold text-on-surface hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-tighter"
          >
            ALL PROJECTS <Icons.ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[400px]">
          {featuredProjects.map((project, idx) => {
            const isLarge = idx === 0;
            return (
              <div 
                key={project.id}
                onClick={() => onProjectSelect?.(project)}
                className={`${isLarge ? 'lg:col-span-8 lg:row-span-2' : 'lg:col-span-4 lg:row-span-1'} group relative overflow-hidden rounded-2xl bg-surface-container-highest cursor-pointer`}
              >
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={project.thumbnail}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8">
                  <span className="bg-primary text-on-primary font-headline font-bold text-[10px] px-3 py-1 rounded-full uppercase mb-4 inline-block">
                    {project.category}
                  </span>
                  <h3 className={`font-headline font-black ${isLarge ? 'text-4xl' : 'text-2xl'} uppercase text-white tracking-tighter`}>
                    {project.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-24">
            <span className="text-primary font-headline font-bold uppercase tracking-[0.4em] text-xs mb-4 block">WHAT WE DO</span>
            <h2 className="font-headline font-black text-5xl md:text-6xl uppercase tracking-tighter leading-tight">PRECISION <br/> PRODUCTION TOOLS.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl flex flex-col h-full group hover:-translate-y-2 transition-all duration-300">
              <div className="text-primary mb-12">
                <Icons.Film size={48} />
              </div>
              <h3 className="font-headline font-black text-2xl text-background uppercase mb-4 tracking-tighter">DIRECTING & CINEMATOGRAPHY</h3>
              <p className="text-on-surface-variant font-medium leading-relaxed mb-10 flex-grow">
                Crafting visual languages that define brand identities. From high-speed action to intimate portraits.
              </p>
              <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500"></div>
            </div>
            <div className="bg-white p-10 rounded-2xl flex flex-col h-full group hover:-translate-y-2 transition-all duration-300">
              <div className="text-primary mb-12">
                <Icons.Edit size={48} />
              </div>
              <h3 className="font-headline font-black text-2xl text-background uppercase mb-4 tracking-tighter">POST-PRODUCTION & COLOR</h3>
              <p className="text-on-surface-variant font-medium leading-relaxed mb-10 flex-grow">
                Precision editing and high-end color grading that gives your content a distinct cinematic aesthetic.
              </p>
              <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500"></div>
            </div>
            <div className="bg-white p-10 rounded-2xl flex flex-col h-full group hover:-translate-y-2 transition-all duration-300">
              <div className="text-primary mb-12">
                <Icons.Layers size={48} />
              </div>
              <h3 className="font-headline font-black text-2xl text-background uppercase mb-4 tracking-tighter">CREATIVE STRATEGY</h3>
              <p className="text-on-surface-variant font-medium leading-relaxed mb-10 flex-grow">
                End-to-end concept development to ensure your story resonates with the right audience across all platforms.
              </p>
              <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
