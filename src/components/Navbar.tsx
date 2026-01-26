import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import links from "../utils/links.js";
import aarohanLogo from "/csi_aarohanlogo-removebg.png"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Themes", href: "/themes" },
  { name: "Timeline", href: "#timeline" },
  { name: "Team", href: "#team" },
  { name: "Venue", href: "#venue" },
  { name: "Contact", href: "#contact" },
];

const {eventLink} = links;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const isHomePage = window.location.pathname === "/";

  /* -------------------- Scroll Spy (Home only) -------------------- */
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("themes");
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks
        .filter((link) => link.href.startsWith("#"))
        .map((link) => link.href.slice(1));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  /* -------------------- Navigation Logic -------------------- */
  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);

    // Route navigation
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }

    // Section navigation
    if (!isHomePage) {
      window.location.href = `/${href}`;
      return;
    }

    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  /* -------------------- Render -------------------- */
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-card py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-2 flex items-center justify-between">
          <motion.a
            href="/"
            className="font-heading text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            {/* <img
              src={aarohanLogo}
              alt="AAROHAN logo"
              className="h-16 w-32 object-contain"
            /> */}
            AAROHAN
          </motion.a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const key = link.href.replace("#", "").replace("/", "");
              const isActive = activeSection === key;

              return (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavigation(link.href)}
                  className={`text-sm font-medium relative transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </motion.button>
              );
            })}

            <motion.a
              href={eventLink}
              className="btn-primary text-sm px-6 py-2.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
            >
              Register Now
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen((p) => !p)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-y-0 right-0 w-full sm:w-80 z-40 glass-card pt-20"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link, index) => {
                const key = link.href.replace("#", "").replace("/", "");
                const isActive = activeSection === key;

                return (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavigation(link.href)}
                    className={`text-left py-3 px-4 rounded-lg font-medium ${
                      isActive
                        ? "bg-primary/20 text-primary"
                        : "hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </motion.button>
                );
              })}

              <motion.a
                href={eventLink}
                className="btn-primary text-center mt-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                target="_blank"
              >
                Register Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
