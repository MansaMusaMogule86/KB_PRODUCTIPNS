import { motion } from 'motion/react';
import { Icons } from './Icons';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-surface-container-low w-full py-20 px-6 md:px-10 mt-auto border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img 
              src="/logo/originallogo.png" 
              alt="KB Productions" 
              className="h-8 md:h-10 w-auto object-contain" 
            />
          </motion.button>
          <p className="text-on-surface-variant text-sm tracking-wide leading-relaxed max-w-xs font-light">
            Pushing the boundaries of cinematic storytelling through tactical visual engineering.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h4 className="text-on-surface font-mono font-bold text-xs uppercase tracking-[0.3em]">Navigation</h4>
            <ul className="space-y-3">
              {['Portfolio', 'Services', 'About', 'Studio'].map((item) => (
                <li key={item}>
                  <motion.button 
                    whileHover={{ x: 5, color: 'var(--color-primary)' }}
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="text-on-surface-variant transition-colors text-sm tracking-wide uppercase text-left font-light"
                  >
                    {item}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-8 text-left md:text-right"
        >
          <div className="space-y-4">
            <h4 className="text-on-surface font-mono font-bold text-xs uppercase tracking-[0.3em]">Contact</h4>
            <p className="text-on-surface-variant text-sm tracking-wide uppercase font-light">STUDIO@KBPRODUCTIONS.COM</p>
            <p className="text-on-surface-variant text-sm tracking-wide uppercase font-light">LOS ANGELES, CA</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-on-surface font-mono font-bold text-xs uppercase tracking-[0.3em]">Connect</h4>
            <div className="flex gap-6 justify-start md:justify-end">
              {[
                { Icon: Icons.Instagram, href: '#', label: 'Instagram' },
                { Icon: Icons.Vimeo, href: '#', label: 'Vimeo' },
                { Icon: Icons.Linkedin, href: '#', label: 'Linkedin' }
              ].map((social) => (
                <motion.a 
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -4, color: 'var(--color-primary)' }}
                  className="text-on-surface-variant transition-colors"
                >
                  <social.Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-7xl mx-auto mt-16 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p className="text-on-surface-variant text-[10px] tracking-widest uppercase font-light">
          © 2026 KB PRODUCTIONS. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-on-surface-variant text-[10px] tracking-widest uppercase hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="text-on-surface-variant text-[10px] tracking-widest uppercase hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </motion.div>
    </footer>
  );
}
