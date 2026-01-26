import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Trophy, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Trophy,
    title: "₹50,000",
    subtitle: "PRIZE POOL",
    description: "Top innovative solutions.",
    color: "from-yellow-400 to-orange-500",
    size: "md:col-span-2", // Highlighting the main prize
  },
  {
    icon: Briefcase,
    title: "INTERNSHIPS",
    subtitle: "CAREER",
    description: "Direct visibility to recruiters.",
    color: "from-rose-400 to-red-500",
    size: "md:col-span-1",
  },
  {
    icon: GraduationCap,
    title: "FREE MVP BUILDING WORKSHOP",
    subtitle: "WORKSHOP",
    description: "4-hour intensive session.",
    color: "from-emerald-400 to-teal-500",
    size: "md:col-span-1",
  },
  {
    icon: ShieldCheck,
    title: "CERTIFICATES",
    subtitle: "ALL TEAMS",
    description: "Official participation recognition.",
    color: "from-blue-400 to-cyan-500",
    size: "md:col-span-1",
  },
  {
    icon: Award,
    title: "APPRECIATION",
    subtitle: "SHORTLISTED TEAMS",
    description: "Exceptional technical innovation.",
    color: "from-purple-400 to-indigo-500",
    size: "md:col-span-1",
  },
];

const WhyJoinSection = () => {
  return (
    <section id="why-join" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Main Section Header - Unchanged */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-10"
        >
          <h2 className="section-title !mb-4">
            Why <span className="gradient-text">Join Us?</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary/50 to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`${item.size} group relative p-6 rounded-2xl glass-card border-white/5 bg-white/[0.01] hover:bg-white/[0.04] transition-all duration-300 overflow-hidden`}
              >
                {/* Subtle Background Glow */}
                <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${item.color} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  
                  <p className="text-[10px] font-bold tracking-widest text-primary uppercase opacity-70 mb-1">
                    {item.subtitle}
                  </p>
                  
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;