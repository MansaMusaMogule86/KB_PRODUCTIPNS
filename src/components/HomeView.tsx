import { motion } from 'motion/react';
import { Icons } from './Icons';

interface HomeViewProps {
  onNavigate?: (page: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover grayscale opacity-30" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5apuNwPP50bIykaC8G9tvG0mJS74xpzlcbVH5jjZJcXR2ME3MZSTw6-PpfmgwRbyXjz_pb19PWR0hbhPbAmILKj-zb41Hobmgw1txK1WcIVUQhPc6gkX4Me0CAwHNOWr5KPsgWGZbR8OOEju6agGRRS7t4MpcPEoMUzGTjsrN22XaVX6G5hUSTRUKHmLaXBiMigOV5Qs88d3dHkGO8k7VAXop6l7ggCTEtU70W5NGLYuTGzATTpr0Z3QcbhDONvd7ZnNE23FHjno"
            alt="Cinematic Film Set"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 cinematic-vignette"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-6xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-primary font-mono text-xs font-bold uppercase tracking-[0.4em]">PREMIUM PRODUCTION</span>
          </motion.div>
          <h1 className="font-headline font-black text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-tight uppercase mb-8 text-white drop-shadow-lg">
            CINEMATIC <motion.span 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-primary inline-block"
            >
              STORYTELLING
            </motion.span>. <br/> PREMIUM CONTENT.
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            Elevating brands through high-impact visual narratives. We blend technical precision with cinematic artistry to create unforgettable moments.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(237, 255, 78, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate?.('booking')}
              className="w-full sm:w-auto bg-primary text-on-primary font-headline font-bold px-8 md:px-12 py-4 md:py-5 rounded-xl uppercase tracking-tighter transition-all text-sm md:text-base shadow-lg"
            >
              Book a Shoot
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate?.('portfolio')}
              className="w-full sm:w-auto bg-surface-container-highest backdrop-blur-sm text-on-surface font-headline font-bold px-8 md:px-12 py-4 md:py-5 rounded-xl uppercase tracking-tighter border border-outline-variant/30 hover:border-primary/50 transition-all text-sm md:text-base"
            >
              View Work
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll to Explore</span>
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <Icons.ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* Brand Shooting Section */}
      <section className="py-20 md:py-32 px-4 md:px-10 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-24"
          >
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3 md:mb-4 tracking-tight">
              Brand Shooting
            </h2>
            <p className="text-on-surface-variant text-sm md:text-lg">Over 300 professional-grade photographs were captured.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {[
              { img: '/socks/product_1_gymsox_pumpday_duo_1.png', alt: 'GYM SOX Pump Day Duo' },
              { img: '/socks/product_2_gymsox_fitistheshit_sitting_1.png', alt: 'GYM SOX Fit is the Shit' },
              { img: '/socks/product_3_gymsox_box_packshot_1.png', alt: 'GYM SOX Box Packshot' },
              { img: '/socks/product_4_gymsox_bulklikehulk_1.png', alt: 'GYM SOX Bulk Like Hulk' },
              { img: '/socks/product_5_gymsox_fitistheshit_male_1.png', alt: 'GYM SOX Male Model' },
              { img: '/socks/product_6_gymsox_pumpday_flat_1.png', alt: 'GYM SOX Pump Day Flat' },
              { img: '/socks/product_7_sixnine_cap_sportsbra_1.png', alt: 'SIX NINÉ Cap & Sports Bra' },
              { img: '/socks/product_8_sixnine_tan_bodysuit_upper_1.png', alt: 'SIX NINÉ Tan Bodysuit' },
              { img: '/socks/product_11_sixnine_black_top_cap_1.png', alt: 'SIX NINÉ Black Top Cap' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg bg-surface-container aspect-square"
              >
                <img 
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-headline font-bold text-sm uppercase tracking-tighter">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gym Shooting Section */}
      <section className="py-20 md:py-32 px-4 md:px-10 bg-surface-container-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-24"
          >
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3 md:mb-4 tracking-tight">
              Gym Shooting
            </h2>
            <p className="text-on-surface-variant text-sm md:text-lg">Over 400 professional-grade photographs were captured.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {[
              { img: '/GYMSHOOTING/GYMSHOOTING.png', alt: 'Gym Workout Setup' },
              { img: '/GYMSHOOTING/Screenshot_2026-04-14_193957.png', alt: 'Male Athlete - Posing' },
              { img: '/GYMSHOOTING/Screenshot_2026-04-14_194322.png', alt: 'Athlete - Strength Pose' },
              { img: '/GYMSHOOTING/Screenshot_2026-04-14_194332.png', alt: 'Athlete - Workout' },
              { img: '/GYMSHOOTING/Screenshot_2026-04-14_194342.png', alt: 'Female Athlete - Training' },
              { img: '/GYMSHOOTING/Screenshot_2026-04-14_194349.png', alt: 'Gym Equipment Detail' },
              { img: '/GYMSHOOTING/Screenshot_2026-04-14_194429.png', alt: 'Athlete - Final Shot' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg bg-black aspect-square cursor-pointer shadow-lg hover:shadow-primary/30 transition-all"
              >
                <img 
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-headline font-bold text-sm uppercase tracking-tighter">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Shooting Section */}
      <section className="py-20 md:py-32 px-4 md:px-10 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-24"
          >
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3 md:mb-4 tracking-tight">
              Studio Shooting
            </h2>
            <p className="text-on-surface-variant text-sm md:text-lg">Over 400 professional-grade photographs were captured.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {[
              { img: '/Studioshots/Screenshot_2026-04-14_212256.png', alt: 'Studio Portrait Session 1' },
              { img: '/Studioshots/Screenshot_2026-04-14_212300.png', alt: 'Studio Portrait Session 2' },
              { img: '/Studioshots/Screenshot_2026-04-14_212305.png', alt: 'Studio Portrait Session 3' },
              { img: '/Studioshots/Screenshot_2026-04-14_212310.png', alt: 'Studio Portrait Session 4' },
              { img: '/Studioshots/Screenshot_2026-04-14_212314.png', alt: 'Studio Portrait Session 5' },
              { img: '/Studioshots/Screenshot_2026-04-14_212319.png', alt: 'Studio Portrait Session 6' },
              { img: '/Studioshots/Screenshot_2026-04-14_212324.png', alt: 'Studio Portrait Session 7' },
              { img: '/Studioshots/Screenshot_2026-04-14_212330.png', alt: 'Studio Portrait Session 8' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg bg-black aspect-square cursor-pointer shadow-lg hover:shadow-primary/30 transition-all"
              >
                <img 
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-headline font-bold text-sm uppercase tracking-tighter">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cars Shooting Section */}
      <section className="py-20 md:py-32 px-4 md:px-10 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-24"
          >
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3 md:mb-4 tracking-tight">
              Cars Shooting
            </h2>
            <p className="text-on-surface-variant text-sm md:text-lg">Over 150 professional-grade photographs were captured.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {[
              { img: '/cars/Screenshot_2026-04-14_212533.png', alt: 'Sports Car Profile' },
              { img: '/cars/Screenshot_2026-04-14_212541.png', alt: 'Car Interior Design' },
              { img: '/cars/Screenshot_2026-04-14_212547.png', alt: 'Golden Hour Automotive' },
              { img: '/cars/Screenshot_2026-04-14_212557.png', alt: 'Vehicle Performance Shot' },
              { img: '/cars/Screenshot_2026-04-14_212602.png', alt: 'Classic Automotive' },
              { img: '/cars/Screenshot_2026-04-14_212605.png', alt: 'Modern Car Design' },
              { img: '/cars/Screenshot_2026-04-14_212609.png', alt: 'Interior Luxury' },
              { img: '/cars/Screenshot_2026-04-14_212618.png', alt: 'Speed and Motion' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg bg-black aspect-square cursor-pointer shadow-lg hover:shadow-primary/30 transition-all"
              >
                <img 
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-headline font-bold text-sm uppercase tracking-tighter">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Style Section */}
      <section className="py-20 md:py-32 px-4 md:px-10 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-24"
          >
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3 md:mb-4 tracking-tight">
              More Style
            </h2>
            <p className="text-on-surface-variant text-sm md:text-lg">Over 1000 professional-grade photographs were captured.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {[
              { img: '/other_style/image1 (1).png', alt: 'Creative Production' },
              { img: '/other_style/image1 (2).png', alt: 'Urban Lifestyle' },
              { img: '/other_style/image1 (3).png', alt: 'Fashion & Style' },
              { img: '/other_style/image1 (5).png', alt: 'Visual Story' },
              { img: '/other_style/image1 (6).png', alt: 'Premium Shot' },
              { img: '/other_style/image1 (7).png', alt: 'Cinematic Moment' },
              { img: '/other_style/image1 (8).png', alt: 'Professional Work' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg bg-black aspect-square cursor-pointer shadow-lg hover:shadow-primary/30 transition-all"
              >
                <img 
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-headline font-bold text-sm uppercase tracking-tighter">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 md:py-20 bg-black border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-4 md:px-10 mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif italic font-medium text-white text-center tracking-tight">
            Some of Our Clients
          </h2>
        </div>

        <div className="overflow-hidden py-8">
          <div className="animate-infinite-scroll flex gap-16 md:gap-24 items-center">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-16 md:gap-24 items-center shrink-0">
                <img className="h-16 md:h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" src="/work/logo_1_puma_1.png" alt="Puma" />
                <img className="h-16 md:h-28 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" src="/work/logo_2_c4energy_1.png" alt="C4 Energy" />
                <img className="h-16 md:h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" src="/work/logo_3_on_1.png" alt="Optimum Nutrition" />
                <img className="h-16 md:h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" src="/work/logo_4_bpi_1.png" alt="BPI Sports" />
                <img className="h-16 md:h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" src="/work/logo_5_sixnine_1.png" alt="SIX NINÉ 69" />
                <img className="h-16 md:h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" src="/work/logo_6_gymsox_1.png" alt="GYM SOX" />
                <img className="h-16 md:h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" src="/work/logo_7_luxurylounge_1.png" alt="LUXURY LOUNGE" />
                <img className="h-16 md:h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" src="/work/logo_8_tripleseven_1.png" alt="TRIPLE SEVEN" />
                <img className="h-16 md:h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" src="/work/logo_9_bludubai_1.png" alt="BLU DUBAI" />
                <img className="h-16 md:h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" src="/work/logo_10_august_1.png" alt="AUGUST" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <span className="text-white font-headline font-medium text-xl mb-3 tracking-wide">And More ...</span>
          <div className="h-1 w-40 bg-primary shadow-[0_0_10px_rgba(237,255,78,0.5)]"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-32 bg-surface-container-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12 md:mb-24"
          >
            <span className="text-primary font-mono text-xs font-bold uppercase tracking-[0.4em] mb-4 block">WHAT WE DO</span>
            <h2 className="font-headline font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter leading-tight">PRECISION <br/> PRODUCTION TOOLS.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Icons.Film, title: "DIRECTING & CINEMATOGRAPHY", desc: "Crafting visual languages that define brand identities. From high-speed action to intimate portraits." },
              { icon: Icons.Edit, title: "POST-PRODUCTION & COLOR", desc: "Precision editing and high-end color grading that gives your content a distinct cinematic aesthetic." },
              { icon: Icons.Layers, title: "CREATIVE STRATEGY", desc: "End-to-end concept development to ensure your story resonates with the right audience across all platforms." }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-surface-container group hover:bg-primary/10 p-6 md:p-10 rounded-xl flex flex-col h-full transition-all duration-300 border border-outline-variant/20 hover:border-primary/30"
              >
                <div className="text-primary mb-8 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={48} />
                </div>
                <h3 className="font-headline font-black text-2xl text-white uppercase mb-4 tracking-tighter">{service.title}</h3>
                <p className="text-on-surface-variant font-medium leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
