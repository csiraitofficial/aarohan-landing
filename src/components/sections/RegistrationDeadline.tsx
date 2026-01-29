import { useState, useEffect, memo, useRef } from 'react';

const RegistrationDeadline = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const targetDate = "2026-02-20T23:59:00";
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const calculateTime = () => {
      const now = Date.now();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };
    
    calculateTime();
    intervalRef.current = window.setInterval(calculateTime, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="py-12 bg-[#030712] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">
              Registration <span className="text-[#008d76]">Ends In</span>
            </h2>
            <p className="text-[10px] text-gray-500 font-medium tracking-widest uppercase mt-1">
              Feb 20th • 11:59 PM
            </p>
          </div>

          <div className="flex gap-3 md:gap-4 items-start">
            <TimeBox value={timeLeft.days} label="Days" />
            <span className="text-xl font-black text-white/20 mt-3">:</span>
            <TimeBox value={timeLeft.hours} label="Hours" />
            <span className="text-xl font-black text-white/20 mt-3">:</span>
            <TimeBox value={timeLeft.minutes} label="Mins" />
            <span className="text-xl font-black text-white/20 mt-3">:</span>
            <TimeBox value={timeLeft.seconds} label="Secs" />
          </div>

        </div>
      </div>
    </section>
  );
};

const TimeBox = memo(({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="relative bg-white/5 border border-white/10 rounded-xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-2">
      <span className="text-xl md:text-2xl font-black text-[#008d76]">
        {String(value).padStart(2, '0')}
      </span>
    </div>
    <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-500 font-bold">
      {label}
    </span>
  </div>
));

TimeBox.displayName = 'TimeBox';

export default memo(RegistrationDeadline);