import { motion, AnimatePresence } from "framer-motion";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";

const benefits = [
  {
    icon: Award,
    title: "Special Appreciation Certificates",
    description: "Special appreciation certificates to all the shortlisted groups recognizing your innovation and dedication.",
  },
  {
    icon: Briefcase,
    title: "Internship Opportunities",
    description: "Visibility to many recruiters to fetch internship offerings and kickstart your career.",
  },
  {
    icon: GraduationCap,
    title: "Free MVP Workshop",
    description: "A 4 hrs workshop free to all shortlisted groups about effective development of industry-expected MVPs.",
  },
];

const WhyJoinSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="why-join" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Why <span className="gradient-text">Join Us?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Be a part of AAROHAN 1.0 and unlock exclusive benefits that will
            accelerate your career and learning journey.
          </p>
        </motion.div>

        {/* Auto-rotating featured benefit */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative h-64 md:h-52">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="glass-card p-8 h-full flex flex-col items-center justify-center text-center border border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
                    {(() => {
                      const Icon = benefits[activeIndex].icon;
                      return <Icon className="w-8 h-8 text-primary-foreground" />;
                    })()}
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-3">
                    {benefits[activeIndex].title}
                  </h3>
                  <p className="text-muted-foreground max-w-md">
                    {benefits[activeIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center gap-2 mt-6">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* All benefits grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setActiveIndex(index)}
              className={`glass-card-hover p-6 cursor-pointer transition-all duration-300 ${
                index === activeIndex
                  ? "border-primary/50 bg-primary/5"
                  : "border-transparent"
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-accent transition-all">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                {benefit.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
