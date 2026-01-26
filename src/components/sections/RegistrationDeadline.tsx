import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RegistrationDeadline = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const targetDate = "2026-02-20T23:59:00";

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const Box = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-[#1a1c23] border border-white/5 rounded-xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-3 shadow-2xl">
        <span className="text-2xl md:text-3xl font-bold text-white font-mono">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <section className="py-12 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="section-title">
            Registration <span className="gradient-text">Closes in</span>
          </h2>

          <div className="glass-card p-8 md:p-12 w-full max-w-2xl bg-black/40 border-white/10 rounded-3xl flex flex-col items-center">
            <h3 className="text-xs md:text-sm font-semibold tracking-[0.3em] text-white/60 uppercase mb-8">
              Registration Ends: 20th February 11:59PM
            </h3>
            
            <div className="flex gap-4 md:gap-8 justify-center">
              <Box value={timeLeft.days} label="Days" />
              <Box value={timeLeft.hours} label="Hours" />
              <Box value={timeLeft.minutes} label="Minutes" />
              <Box value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationDeadline;