import { motion } from 'motion/react';
import { Icons } from './Icons';

interface AboutViewProps {
  onNavigate?: (page: string) => void;
}

export default function AboutView({ onNavigate }: AboutViewProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-96 w-full flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover grayscale opacity-20" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5apuNwPP50bIykaC8G9tvG0mJS74xpzlcbVH5jjZJcXR2ME3MZSTw6-PpfmgwRbyXjz_pb19PWR0hbhPbAmILKj-zb41Hobmgw1txK1WcIVUQhPc6gkX4Me0CAwHNOWr5KPsgWGZbR8OOEju6agGRRS7t4MpcPEoMUzGTjsrN22XaVX6G5hUSTRUKHmLaXBiMigOV5Qs88d3dHkGO8k7VAXop6l7ggCTEtU70W5NGLYuTGzATTpr0Z3QcbhDONvd7ZnNE23FHjno"
            alt="Cinematic Film Set"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/80"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <h1 className="font-headline font-black text-3xl sm:text-5xl md:text-7xl tracking-tighter leading-tight uppercase mb-6 text-white drop-shadow-lg">
            About <span className="text-primary">KB Productions</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Crafting Human-Centered Narratives Through Visual Excellence
          </p>
        </motion.div>
      </section>

      {/* Main About Section */}
      <section className="py-20 md:py-32 px-4 md:px-10 bg-gradient-to-b from-black to-surface-container-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 tracking-tight">
                Who We Are
              </h2>
              <div className="space-y-6 text-on-surface-variant">
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  KB Productions is a Dubai-based creative studio that specializes in high-impact visual storytelling. Founded by filmmaker and photographer Karim Elbrig, we combine technical precision with artistic vision to create content that resonates, inspires, and transforms brands.
                </p>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  With over a decade of experience in film production, cinematography, photography, and digital content creation, we've worked with some of the most innovative brands and organizations across multiple industries.
                </p>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  Our approach is research-driven, human-centered, and results-focused. We don't just create content—we craft narratives that tell your brand's story in the most compelling way possible.
                </p>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="relative w-full max-w-xs md:max-w-sm">
                {/* Lime Corner Brackets */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary"></div>

                {/* Image Container */}
                <div className="relative aspect-square rounded-full overflow-hidden border-4 border-primary shadow-lg shadow-primary/50">
                  <img 
                    src="/mainguy/Mainguy.png"
                    alt="Karim Elbrig - Founder & Creative Director"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 md:py-32 px-4 md:px-10 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
              Mission & Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-surface-container-low p-8 md:p-12 rounded-lg border border-outline-variant/20 hover:border-primary/30 transition-all"
            >
              <div className="text-primary mb-4">
                <Icons.Film size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">Our Mission</h3>
              <p className="text-on-surface-variant leading-relaxed">
                To elevate brands through cinematic storytelling that combines creative excellence with strategic communication. We aim to create content that not only captures attention but also drives meaningful engagement and social impact.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-surface-container-low p-8 md:p-12 rounded-lg border border-outline-variant/20 hover:border-primary/30 transition-all"
            >
              <div className="text-primary mb-4">
                <Icons.Globe size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">Our Vision</h3>
              <p className="text-on-surface-variant leading-relaxed">
                To be the go-to production studio for brands seeking transformative visual content. We envision a world where storytelling transcends traditional boundaries and creates genuine human connections.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Founder */}
      <section className="py-20 md:py-32 px-4 md:px-10 bg-surface-container-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 tracking-tight">
              Meet the Founder
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 text-on-surface-variant"
            >
              <div className="bg-black/50 p-8 rounded-lg border border-outline-variant/20">
                <h3 className="text-2xl font-bold text-primary mb-2 uppercase tracking-tight">Karim Elbrig</h3>
                <p className="text-sm text-on-surface-variant mb-6 font-light">
                  Director • Filmmaker • Cinematographer • Photographer • Drone Pilot
                </p>
                
                <p className="text-sm md:text-base leading-relaxed mb-4">
                  Karim is a visionary filmmaker and photographer with a passion for creating compelling visual narratives. With expertise spanning film production, cinematography, photography, editing, design, and direction, Karim brings a comprehensive creative perspective to every project.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed mb-4">
                  His work has been featured across multiple industries, from luxury real estate to fitness and automotive. Karim's approach combines meticulous technical execution with artistic innovation, resulting in content that not only looks stunning but also drives measurable business results.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Based in Dubai and working globally, Karim leads KB Productions with a commitment to excellence, integrity, and pushing the creative boundaries of what's possible with film and photography.
                </p>
              </div>

              {/* Key Skills */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Cinematography',
                  'Film Direction',
                  'Photography',
                  'Video Editing',
                  'CGI & Motion Graphics',
                  'Drone Operation',
                  'Color Grading',
                  'Sound Design',
                  'Creative Direction'
                ].map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-black/50 px-4 py-3 rounded border border-primary/30 hover:border-primary transition-colors text-center"
                  >
                    <p className="text-xs md:text-sm font-bold text-primary uppercase tracking-tight">{skill}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 md:py-32 px-4 md:px-10 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
              Our Creative Process
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              A structured yet flexible approach to bringing your vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery & Strategy',
                description: 'We dive deep into understanding your brand, goals, and audience to craft the perfect narrative foundation.'
              },
              {
                step: '02',
                title: 'Concept & Planning',
                description: 'Creative brainstorming and detailed planning ensure every shot counts and every moment serves your story.'
              },
              {
                step: '03',
                title: 'Production & Capture',
                description: 'Technical excellence meets artistic vision as we capture your story with precision and creativity.'
              },
              {
                step: '04',
                title: 'Post & Polish',
                description: 'Expert editing, color grading, and effects transform raw footage into cinematic masterpieces.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative bg-surface-container-low p-8 rounded-lg border border-outline-variant/20 hover:border-primary/50 transition-all"
              >
                <div className="text-5xl font-bold text-primary/20 mb-4 group-hover:text-primary/40 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 px-4 md:px-10 bg-surface-container-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
              Why Choose KB Productions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Icons.Film,
                title: 'Award-Winning Work',
                description: 'Our portfolio speaks for itself with projects recognized for creativity and impact across multiple industries.'
              },
              {
                icon: Icons.Zap,
                title: 'Technical Excellence',
                description: '4K cinematography, drone footage, advanced color grading, and cutting-edge production techniques.'
              },
              {
                icon: Icons.Video,
                title: 'Collaborative Approach',
                description: 'We work closely with you at every stage, ensuring your vision is realized exactly as imagined.'
              },
              {
                icon: Icons.ArrowRight,
                title: 'Results-Driven',
                description: 'Content designed not just to look beautiful, but to drive engagement, conversions, and brand growth.'
              },
              {
                icon: Icons.Layers,
                title: 'Creative Innovation',
                description: 'Risk-taking storytelling combined with strategic thinking creates content that stands out.'
              },
              {
                icon: Icons.Globe,
                title: 'Global Experience',
                description: 'Worked with brands across multiple continents, bringing diverse perspectives to every project.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 bg-black/50 rounded-lg border border-outline-variant/20 hover:border-primary/30 transition-all"
              >
                <div className="text-primary flex-shrink-0">
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 md:px-10 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight mb-6 text-white">
            Ready to Create <span className="text-primary">Something Extraordinary?</span>
          </h2>
          <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
            Let's collaborate and bring your vision to life with cinematic storytelling that captivates and converts.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(237, 255, 78, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate?.('booking')}
            className="w-full sm:w-auto bg-primary text-on-primary font-headline font-bold px-10 md:px-12 py-4 rounded-xl uppercase tracking-tighter transition-all shadow-lg"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
