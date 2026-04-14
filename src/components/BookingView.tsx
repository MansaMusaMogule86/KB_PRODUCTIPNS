import { motion } from 'motion/react';
import { Icons } from './Icons';

export default function BookingView() {
  return (
    <div className="flex flex-col pt-32 pb-20 px-6 relative min-h-screen">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -left-48 w-[600px] h-[600px] bg-primary/10 blur-[160px] rounded-full"></div>
        <img 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuADi5Ci2GlYrEnHzGhGBYm1Wjp5I48WQM1J096zyIxJXh2ZBHRqWgGDHIQRQK6jPOZZWaTTWlchskQsixqu2fNczGe2pt3sIhewoVX1elQ99m9gBrRnIYd-E9mypLBKCk1sbaxbkEO9ZCIMuqrSRsT-vY3HxDWNa7mJP4TsvmgIkx8rNFKcE3f5DgLqDk0M-DmoPl4Jr4WyiVFH8Tmiy2941Dx-1D0YBrqs0bgs4h5h0_aLy6saWE6jkPoizqPZyzya1gG-lGQLNiY"
          alt="Studio Background"
          referrerPolicy="no-referrer"
        />
      </div>

      <section className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10 mx-auto">
        {/* Left Side: Editorial Content */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="font-headline text-primary font-bold tracking-[0.2em] uppercase text-xs">PRE-PRODUCTION UNIT</span>
            <h1 className="font-headline text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
              SECURE YOUR <span className="text-primary-fixed-dim">SLOT</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
              Ready to elevate your vision? Our studio slots for Q3/Q4 are now open. Provide your project details below to initiate the briefing process.
            </p>
          </div>
          <div className="space-y-6 pt-8 border-t border-outline-variant/20">
            <div className="flex items-start gap-4">
              <Icons.Video className="text-primary" size={24} />
              <div>
                <p className="font-headline font-bold text-sm uppercase">Global Availability</p>
                <p className="text-on-surface-variant text-sm">Remote direction or on-set locations worldwide.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Icons.Zap className="text-primary" size={24} />
              <div>
                <p className="font-headline font-bold text-sm uppercase">Rapid Turnaround</p>
                <p className="text-on-surface-variant text-sm">48-hour response time for all qualified production inquiries.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Booking Form */}
        <div className="lg:col-span-7 bg-surface-container-low p-8 md:p-12 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-outline-variant/10">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Full Name</label>
              <input className="bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface placeholder:text-outline transition-all p-3 rounded-t-lg" placeholder="John Doe" type="text"/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Email Address</label>
              <input className="bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface placeholder:text-outline transition-all p-3 rounded-t-lg" placeholder="john@productions.com" type="email"/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Phone Number</label>
              <input className="bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface placeholder:text-outline transition-all p-3 rounded-t-lg" placeholder="+1 (555) 000-0000" type="tel"/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Service Type</label>
              <select className="bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface transition-all p-3 rounded-t-lg appearance-none">
                <option>Commercial Production</option>
                <option>Music Video</option>
                <option>Social Content Suite</option>
                <option>Post-Production/VFX</option>
                <option>Creative Consulting</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Budget Range</label>
              <select className="bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface transition-all p-3 rounded-t-lg appearance-none">
                <option>$5k - $15k</option>
                <option>$15k - $50k</option>
                <option>$50k - $100k</option>
                <option>$100k+</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Target Project Date</label>
              <input className="bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface transition-all p-3 rounded-t-lg" type="date"/>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Project Brief & Vision</label>
              <textarea className="bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface placeholder:text-outline transition-all p-3 rounded-t-lg resize-none" placeholder="Tell us about the project scope, aesthetic, and goals..." rows={4}></textarea>
            </div>
            <div className="md:col-span-2 pt-4">
              <button className="w-full bg-primary text-on-primary font-headline font-black uppercase text-xl py-6 rounded-2xl tracking-tighter hover:bg-primary-dim transition-all active:scale-[0.98] shadow-lg shadow-primary/10" type="submit">
                SUBMIT BOOKING
              </button>
              <p className="text-center text-[10px] uppercase font-bold text-outline mt-4 tracking-widest">
                By clicking submit you agree to our production terms of service
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
