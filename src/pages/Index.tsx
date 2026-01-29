import "@fontsource/oswald/400.css";
import "@fontsource/oswald/700.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyJoinSection from "@/components/sections/WhyJoinSection";
import TimelineSection from "@/components/sections/TimelineSection";
import FAQSection from "@/components/sections/FAQSection";
import RegistrationDeadline from "@/components/sections/RegistrationDeadline";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <RegistrationDeadline />
        <WhyJoinSection />
        <TimelineSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;