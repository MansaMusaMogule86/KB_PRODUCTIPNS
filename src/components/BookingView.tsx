import { motion } from 'motion/react';
import { useState } from 'react';

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  deadline: string;
  brief: string;
};

export default function BookingView() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    deadline: '',
    brief: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([k, v]) => formDataToSend.append(k, v));
      formDataToSend.append('_subject', `KB Productions Booking: ${formData.name}`);
      formDataToSend.append('_captcha', 'false');
      await fetch('https://formsubmit.co/Karim.elbrig@gmail.com', {
        method: 'POST',
        body: formDataToSend
      });
      setSubmitted(true);
      setTimeout(() => {
        setStep(0);
        setFormData({ name: '', email: '', phone: '', service: '', budget: '', deadline: '', brief: '' });
        setSubmitted(false);
      }, 4000);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col pt-32 pb-20 px-6 relative min-h-screen">
      <section className="max-w-5xl w-full relative z-10 mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-headline text-5xl md:text-7xl font-black uppercase mb-4">
            BRING YOUR <span className="text-primary">VISION</span> TO LIFE
          </h1>
          <p className="text-on-surface-variant text-lg">{submitted ? 'Confirmed' : `Step ${String(step + 1)} of 3`}</p>
        </motion.div>

        {submitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-primary/20 border-2 border-primary rounded-2xl p-12 text-center">
            <div className="text-6xl mb-6">📧</div>
            <h2 className="text-3xl font-headline font-bold text-primary mb-2">BOOKING CONFIRMED</h2>
            <p className="text-on-surface-variant">Check Karim.elbrig@gmail.com</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2 bg-surface-container-low backdrop-blur-xl p-12 rounded-2xl border border-primary/20 shadow-2xl">
              <div className="flex gap-3 mb-12">
                {[0, 1, 2].map((i) => (
                  <div key={i} className={`h-2 flex-1 rounded-full transition-all ${i <= step ? 'bg-primary shadow-primary/50' : 'bg-outline-variant/30'}`} />
                ))}
              </div>

              {step === 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <h2 className="text-3xl font-headline font-bold">Project Vision</h2>
                  <input name="service" value={formData.service} onChange={handleChange} placeholder="Service" className="w-full bg-surface-container-lowest border-2 border-outline-variant/30 focus:border-primary p-4 rounded-xl" list="services" />
                  <datalist id="services">
                    <option value="Commercial">Commercial</option>
                    <option value="Music Video">Music Video</option>
                    <option value="Social">Social</option>
                    <option value="VFX">VFX</option>
                    <option value="Consulting">Consulting</option>
                  </datalist>
                  <textarea name="brief" value={formData.brief} onChange={handleChange} placeholder="Brief" className="w-full bg-surface-container-lowest border-2 border-outline-variant/30 focus:border-primary p-4 rounded-xl" rows={4} />
                  <button type="button" onClick={() => formData.service && formData.brief && setStep(1)} className="w-full bg-primary text-on-primary font-bold py-3 rounded-xl">Next</button>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <h2 className="text-3xl font-headline font-bold">Budget</h2>
                  <input name="budget" value={formData.budget} onChange={handleChange} placeholder="Budget" className="w-full bg-surface-container-lowest border-2 border-outline-variant/30 focus:border-primary p-4 rounded-xl" />
                  <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} className="w-full bg-surface-container-lowest border-2 border-outline-variant/30 focus:border-primary p-4 rounded-xl" />
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setStep(0)} className="flex-1 bg-outline-variant/20 py-3 rounded-xl">Back</button>
                    <button type="button" onClick={() => formData.budget && formData.deadline && setStep(2)} className="flex-1 bg-primary text-on-primary py-3 rounded-xl">Next</button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <h2 className="text-3xl font-headline font-bold">Contact</h2>
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full bg-surface-container-lowest border-2 border-outline-variant/30 focus:border-primary p-4 rounded-xl" />
                  <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full bg-surface-container-lowest border-2 border-outline-variant/30 focus:border-primary p-4 rounded-xl" />
                  <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full bg-surface-container-lowest border-2 border-outline-variant/30 focus:border-primary p-4 rounded-xl" />
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setStep(1)} className="flex-1 bg-outline-variant/20 py-3 rounded-xl">Back</button>
                    <button disabled={!formData.name || !formData.email || !formData.phone || loading} type="submit" className="flex-1 bg-primary text-on-primary py-3 rounded-xl">{loading ? 'Sending' : 'Submit'}</button>
                  </div>
                </motion.div>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
              <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-6 sticky top-32">
                <h3 className="font-headline font-bold text-primary uppercase text-sm mb-4">AI TIPS</h3>
                <p className="text-sm text-on-surface-variant">
                  {formData.service && `${formData.service} projects typically take 3-6 weeks with optimal team coordination`}
                  {!formData.service && 'Select service above'}
                </p>
              </div>
            </motion.div>
          </form>
        )}
      </section>
    </div>
  );
}
