import { Icons } from './Icons';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-background w-full py-16 px-6 md:px-10 mt-auto border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div 
            className="text-xl font-black text-primary uppercase font-headline cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            KB PRODUCTIONS
          </div>
          <p className="text-on-surface-variant text-sm tracking-wide leading-relaxed max-w-xs">
            Pushing the boundaries of cinematic storytelling through tactical visual engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-4">
            <h4 className="text-on-surface font-headline font-bold text-xs uppercase tracking-[0.2em]">Navigation</h4>
            <ul className="space-y-3">
              {['Portfolio', 'Services', 'About', 'Studio'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="text-on-surface-variant hover:text-on-surface transition-colors text-sm tracking-wide uppercase text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8 text-left md:text-right">
          <div className="space-y-4">
            <h4 className="text-on-surface font-headline font-bold text-xs uppercase tracking-[0.2em]">Contact</h4>
            <p className="text-on-surface-variant text-sm tracking-wide uppercase">STUDIO@KBPRODUCTIONS.COM</p>
            <p className="text-on-surface-variant text-sm tracking-wide uppercase">LOS ANGELES, CA</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-on-surface font-headline font-bold text-xs uppercase tracking-[0.2em]">Connect</h4>
            <div className="flex gap-6 justify-start md:justify-end">
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                <Icons.Instagram size={20} />
              </a>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                <Icons.Vimeo size={20} />
              </a>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                <Icons.Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-[10px] tracking-widest uppercase">
          © 2024 KB PRODUCTIONS. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-on-surface-variant text-[10px] tracking-widest uppercase hover:text-on-surface transition-colors">Privacy Policy</a>
          <a href="#" className="text-on-surface-variant text-[10px] tracking-widest uppercase hover:text-on-surface transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
