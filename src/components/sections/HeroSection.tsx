import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronDown, ExternalLink, Rocket } from "lucide-react";
import FloatingShapes from "../FloatingShapes";
import links from "../../utils/links.js";
import csiLogo from "../../assets/team/committees/csi__logo.png";
import codersClubLogo from "../../assets/team/committees/codersclub.png";
import tpcLogo from "../../assets/team/committees/WhiteRAIT.png";

const HeroSection = () => {
  const { scrollY } = useScroll();
  
  // Enhanced Parallax Effects
  const textY = useTransform(scrollY, [0, 500], [0, -100]);
  const shapesY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  
  // Smooth spring for the 3D feeling
  const smoothY = useSpring(textY, { stiffness: 100, damping: 30 });

  const { eventLink } = links;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Layers */}
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="absolute inset-0 grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* 3D Scene Container (Right Side focus) */}
      <motion.div 
        style={{ y: shapesY }}
        className="absolute right-[-10%] top-0 w-2/3 h-full hidden lg:block"
      >
        <FloatingShapes />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content Column */}
          <motion.div style={{ y: smoothY, opacity }}>
            {/* Animated Badge */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-6"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0a0a0a] bg-primary/30" />
                ))}
              </div>
              <span className="text-primary text-xs font-bold tracking-tighter uppercase">
                March 2026 • 24H Hack
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8"
            >
              AAROHAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent neon-text">1.0</span>
              <br />
              <span className="text-4xl md:text-6xl text-white/90">HACKATHON</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg md:text-xl max-w-lg mb-10 border-l-2 border-primary/50 pl-6"
            >
              Bringing together creativity and technology. <br />
              <span className="text-white font-medium">Rise with Code. Lead with Innovation.</span>
            </motion.p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16">
              <motion.a
                href={eventLink}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
              >
                Register Now <Rocket className="w-5 h-5" />
              </motion.a>
              <a href="#about" className="px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 transition-colors">
                The Mission
              </a>
            </div>

            {/* Glassmorphic Logo Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl inline-flex flex-col gap-4"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">In Collaboration With</span>
              <div className="flex items-center gap-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <img src={csiLogo} alt="CSI" className="h-8 w-auto" />
                <img src={codersClubLogo} alt="Coders Club" className="h-8 w-auto" />
                <img src={tpcLogo} alt="TPC" className="h-6 w-auto" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right side for mobile/tablet shapes */}
          <div className="lg:hidden relative h-64">
             <FloatingShapes />
          </div>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <div className="flex flex-col items-center gap-4">
          <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
          <span className="rotate-90 origin-left text-[10px] uppercase tracking-widest text-muted-foreground translate-x-1">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;