import { motion } from 'motion/react';
import { Icons } from './Icons';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const navItems = [
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'studio', label: 'Studio' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-2xl flex justify-between items-center px-6 md:px-10 py-6">
      <div 
        className="text-2xl font-black text-primary tracking-tighter uppercase font-headline cursor-pointer"
        onClick={() => onNavigate('home')}
      >
        KB PRODUCTIONS
      </div>
      
      <div className="hidden md:flex items-center space-x-10">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`font-headline uppercase tracking-tighter transition-colors duration-300 text-sm lg:text-base ${
              activePage === item.id 
                ? 'text-primary border-b-2 border-primary pb-1' 
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <button 
        onClick={() => onNavigate('booking')}
        className="bg-primary text-on-primary px-6 md:px-8 py-2 md:py-3 rounded-2xl font-headline font-bold uppercase tracking-tighter scale-95 active:scale-90 hover:brightness-110 transition-all text-sm md:text-base"
      >
        BOOK NOW
      </button>
    </nav>
  );
}
