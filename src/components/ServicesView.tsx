import { motion } from 'motion/react';
import { Icons } from './Icons';

export default function ServicesView() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-40 grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOhWefTs4tPSi9yJaUMchYnoBqAdzd7h4QDq86KEsg7nXSoQQZEHXSEVnoQjYwhjUfAEDp_5n7lENUhCg7FuZSy3KZcwPdggFBFvZ26oYymUsjFMi3mmFJUSjXD_uH5Eij5967_jyMMQgZ9DiGALvboDXR_xNRhtCx3wefaNJQ-xBDKG4unj_KwVe0a1Qc3fFvzl7W0jEjXHI0lWFvWDJNNwB4Fj10U1_TpeQJN_KlQaD62QT8N9y25XX0nqgGReMvjUPKflfdSwk"
            alt="Cinematic Lens"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 cinematic-gradient"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <span className="font-headline font-bold text-primary uppercase tracking-[0.3em] mb-4 block text-sm md:text-base">Our Capabilities</span>
          <h1 className="font-headline text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">
            Cinematic <br/><span className="text-primary">Execution.</span>
          </h1>
        </div>
      </section>

      {/* Brand Content */}
      <section className="bg-surface py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="bg-surface-container-low rounded-2xl overflow-hidden aspect-[4/5] relative">
              <img 
                className="w-full h-full object-cover opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLjaF_i9DenyXszKIUwgrP18GFFq6nQYWHgTPIgYA12k8Rs9d0hH_K1iVxJmcr-jH1k436SQ8xu0D5dwUfdnZTlc-U9hj71nRR1-zPsuGjNAFFYODHTbXWrRjFSuS50Vpp3wgA4403tN2RUk5-YYrYkdKcdqUmbEga8P__MSa89fgL7J4xysNT1MURt3_dmjlhmmGycicNdB6BoY5tgTGI99m3G5k7GTzHMQqDsNmkCCQOorUc6K_IjPXC16Y8ztoikIFnEzMEqng"
                alt="Brand Strategy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 left-8">
                <span className="bg-primary text-on-primary font-headline font-black px-4 py-1 rounded-full text-[10px] tracking-widest">EST. 2024</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 space-y-8">
            <h2 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">Brand <br/>Content</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg">
              We don't just film; we architect visual identities. Our brand content packages focus on long-term storytelling, creating a cohesive visual language that resonates with your core audience across all touchpoints. High-end, narrative-driven assets designed for market leaders.
            </p>
            <div className="space-y-4">
              {['Brand Documentaries', 'Identity Visuals', 'Executive Profiles'].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <Icons.Check className="text-primary" size={20} />
                  <span className="font-headline text-sm uppercase tracking-wider font-bold">{item}</span>
                </div>
              ))}
            </div>
            <button className="bg-primary text-on-primary px-10 py-4 rounded-2xl font-headline font-bold uppercase tracking-tighter hover:bg-primary-dim transition-colors">
              GET QUOTE
            </button>
          </div>
        </div>
      </section>

      {/* Commercial Production */}
      <section className="bg-surface-container-low py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="bg-surface-container-highest rounded-2xl overflow-hidden aspect-video relative">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu1mDyc0gJsYvL3OjDvnDIS1nuk7jTeUEHL-ZagpCJlu_ciO5uSoHfDj6Qe1KbTnAFiCI9NUkWe1MRkKwUB0aofn_M-5hjGTLI4TEuVp1MJ3QhJMAv22NO6SeLhfcbZtXmYZWk2U4k0i9Mxnavkg4dgn2qMngAOhu4mIG1C00TntpzsklBw2oVCvSHWLH65NJ9OA37XpbitswZkJ69oiTNgqRYqjTguW73ympVXey--pi_Vs9NgkGJhWwffjowoCP6jFv_bcL9yhY"
                alt="Commercial Set"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all duration-500"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">Commercial <br/>Production</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg">
              Broadcast-quality production for high-stakes campaigns. From script-to-screen, we handle the logistics of large-scale shoots, talent management, and technical direction. We deliver high-impact commercials that demand attention.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-highest p-4 rounded-xl">
                <Icons.Video className="text-primary mb-2" size={20} />
                <h4 className="font-headline text-[10px] font-bold uppercase">4K RAW Mastering</h4>
              </div>
              <div className="bg-surface-container-highest p-4 rounded-xl">
                <Icons.Zap className="text-primary mb-2" size={20} />
                <h4 className="font-headline text-[10px] font-bold uppercase">Grip & Electric</h4>
              </div>
            </div>
            <button className="bg-surface-container-highest text-on-surface border border-outline-variant/20 px-10 py-4 rounded-2xl font-headline font-bold uppercase tracking-tighter hover:bg-surface-bright transition-colors">
              INQUIRE NOW
            </button>
          </div>
        </div>
      </section>

      {/* Social Media Packages */}
      <section className="bg-surface-container-low py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-6">
              <h2 className="font-headline text-5xl font-black uppercase tracking-tighter leading-none">Social <br/>Media <br/><span className="text-primary">Packages</span></h2>
              <p className="text-on-surface-variant leading-relaxed">
                Optimized for the scroll. We create fast-paced, high-retention content tailored for TikTok, Reels, and YouTube Shorts.
              </p>
              <div className="pt-6">
                <div className="flex items-center space-x-4 p-4 border border-outline-variant/20 rounded-2xl mb-4">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Icons.Zap className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-headline font-bold text-[10px] uppercase">Quick Turnaround</p>
                    <p className="text-[10px] text-on-surface-variant uppercase">48-hour delivery available</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container-highest p-10 rounded-2xl border border-outline-variant/10 flex flex-col justify-between group hover:border-primary/40 transition-colors">
                <div>
                  <h3 className="font-headline text-3xl font-black uppercase tracking-tighter mb-4">The Creator</h3>
                  <ul className="space-y-4 mb-8">
                    {['5x Vertical Short-form Edits', 'Sound Design & Trending Audio', 'Professional Color Grade'].map((item) => (
                      <li key={item} className="flex text-sm text-on-surface-variant">
                        <Icons.ArrowRight className="text-primary mr-2" size={16} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-surface-bright py-4 rounded-xl font-headline font-bold uppercase tracking-tighter group-hover:bg-primary group-hover:text-on-primary transition-all">GET QUOTE</button>
              </div>
              <div className="bg-surface-container-highest p-10 rounded-2xl border border-outline-variant/10 flex flex-col justify-between group hover:border-primary/40 transition-colors">
                <div>
                  <h3 className="font-headline text-3xl font-black uppercase tracking-tighter mb-4">The Campaign</h3>
                  <ul className="space-y-4 mb-8">
                    {['12x Multi-platform Edits', 'Motion Graphics Overlays', 'Full Raw Footage Access'].map((item) => (
                      <li key={item} className="flex text-sm text-on-surface-variant">
                        <Icons.ArrowRight className="text-primary mr-2" size={16} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-surface-bright py-4 rounded-xl font-headline font-bold uppercase tracking-tighter group-hover:bg-primary group-hover:text-on-primary transition-all">GET QUOTE</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 text-center">
        <h2 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter text-on-primary mb-12">Ready to Start <br/>Production?</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center px-6 md:px-10">
          <button className="bg-on-primary text-primary px-12 py-5 rounded-2xl font-headline font-black text-xl uppercase tracking-tighter hover:scale-105 transition-transform">BOOK A CALL</button>
          <button className="border-2 border-on-primary text-on-primary px-12 py-5 rounded-2xl font-headline font-black text-xl uppercase tracking-tighter hover:bg-on-primary hover:text-primary transition-colors">VIEW RATE CARD</button>
        </div>
      </section>
    </div>
  );
}
