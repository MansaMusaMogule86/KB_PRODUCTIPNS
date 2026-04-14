import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icons } from './Icons';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'studio', label: 'Studio' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-3xl border-b border-white/5 flex justify-between items-center px-6 md:px-10 py-4">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <img 
            src="/logo/originallogo.png" 
            alt="KB Productions" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
        </motion.button>
        
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ y: -2 }}
              onClick={() => onNavigate(item.id)}
              className={`font-headline uppercase tracking-tighter transition-all duration-300 text-xs lg:text-sm font-medium ${
                activePage === item.id 
                  ? 'text-primary border-b-2 border-primary pb-1' 
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('booking')}
          className="hidden md:block bg-primary text-on-primary px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-headline font-bold uppercase tracking-tighter hover:brightness-110 shadow-lg shadow-primary/20 transition-all text-xs md:text-sm"
        >
          BOOK NOW
        </motion.button>

        <button 
          className="md:hidden text-on-surface"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
        >
          <Icons.Menu size={28} />
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md md:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-full bg-surface-dark flex flex-col"
            >
              <div className="flex justify-end p-6">
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-on-surface p-2"
                  aria-label="Close menu"
                >
                  <Icons.X size={32} />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center space-y-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`font-headline text-3xl uppercase tracking-tighter transition-colors duration-300 ${
                      activePage === item.id 
                        ? 'text-primary' 
                        : 'text-on-surface hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-8 pb-16"
              >
                <button 
                  onClick={() => handleNavClick('booking')}
                  className="w-full bg-primary text-on-primary py-4 rounded-2xl font-headline font-bold uppercase tracking-tighter text-xl"
                >
                  Book Now
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
