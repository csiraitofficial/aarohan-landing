import { memo } from "react";
import { ExternalLink, Zap } from "lucide-react";

import links from "../../utils/links";
import csiLogo from "../../assets/team/committees/csi__logo.png";
import codersClubLogo from "../../assets/team/committees/codersclub.png";
import tpcLogo from "../../assets/team/committees/WhiteRAIT.png";
import { GridScan } from "../ui/gridscan";

const PowerBadge = memo(() => (
  <div className="flex backdrop-blur-sm items-center gap-2 bg-[#008d76]/10 border border-[#008d76]/20 text-[#008d76] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
    <Zap size={14} className="fill-current" />
    THE ULTIMATE INNOVATION CHALLENGE
  </div>
));

PowerBadge.displayName = 'PowerBadge';

const RegisterButton = memo(() => (
  <a
    href={links.eventLink}
    className="bg-[#008d76] hover:bg-[#007a68] text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-200 shadow-lg active:scale-95 will-change-transform"
  >
    Register Now <ExternalLink size={18} />
  </a>
));

RegisterButton.displayName = 'RegisterButton';

const LearnMoreButton = memo(() => (
  <a
    href="#about"
    className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-200 active:scale-95 will-change-transform"
  >
    Learn more
  </a>
));

LearnMoreButton.displayName = 'LearnMoreButton';

const BrandingLogos = memo(() => (
  <div className="flex items-center gap-8 md:gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-300 will-change-[filter,opacity]">
    <img 
      src={csiLogo} 
      alt="CSI" 
      className="h-8 md:h-10 w-auto"
      loading="eager"
      decoding="async"
    />
    <img 
      src={codersClubLogo} 
      alt="Coders Club" 
      className="h-8 md:h-10 w-auto"
      loading="eager"
      decoding="async"
    />
    <img 
      src={tpcLogo} 
      alt="TPC" 
      className="h-6 md:h-8 w-auto"
      loading="eager"
      decoding="async"
    />
  </div>
));

BrandingLogos.displayName = 'BrandingLogos';

const ScrollIndicator = memo(() => (
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
    <div className="w-[1px] h-12 bg-gradient-to-b from-[#008d76] to-transparent relative">
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#008d76] rounded-full scroll-indicator"
      />
    </div>
  </div>
));

ScrollIndicator.displayName = 'ScrollIndicator';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-[#030712] text-white"
    >
      {/* GridScan Background */}
      <div className="absolute inset-0 z-0">
        <GridScan
          sensitivity={0.1}
          lineThickness={1}
          gridScale={0.1}
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      {/* Main Content Card */}
      <div
        className="relative z-10 w-full max-w-6xl px-6 mt-16 flex flex-col items-center"
      >
        <div
          className="p-8 md:p-16 rounded-[2.5rem] text-center flex flex-col items-center animate-fade-in"
        >
          <PowerBadge />

          <h1 
            className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
          >
            AAROHAN <span className="text-[#008d76]">1.0</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Unleash your potential where <span className="text-white">creativity meets code</span>. 
            Join hundreds of developers in the most anticipated hackathon of the season.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <RegisterButton />
            <LearnMoreButton />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">
            POWERED BY
          </p>
          <BrandingLogos />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default memo(HeroSection);