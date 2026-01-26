import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Navigation, ExternalLink } from "lucide-react";

const VenueSection = () => {
  return (
    <section id="venue" className="section-padding relative">
      <div className="absolute inset-0 gradient-bg opacity-30" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Event <span className="gradient-text">Venue</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join us at Ramrao Adik Institute of Technology for an 
            innovation-packed experience in the heart of Navi Mumbai.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Map - Fixed with Embed API and Precise RAIT Pinpoint */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card overflow-hidden h-80 lg:h-[500px] flex flex-col"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.481146740698!2d73.0229415!3d19.0436423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3db5e2c85cd%3A0x66c89c8949826071!2sRamrao%20Adik%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RAIT Engineering Building Pinpoint"
            />
            <div className="p-4 bg-muted/50 border-t border-border flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Ramrao Adik Institute of Technology, Nerul</span>
              <a 
                href="https://maps.app.goo.gl/366Qpy1kwdqbktuA7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-primary flex items-center gap-1 hover:underline"
              >
                View on Google Maps <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-1">
                    Ramrao Adik Institute of Technology
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Dr. D. Y. Patil Vidyapeeth, Sector 7, Nerul, 
                    <br />
                    Navi Mumbai, Maharashtra 400706
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-1">
                    Event Date
                  </h4>
                  <p className="text-muted-foreground">
                    March 6-7, 2026
                    <br />
                    <span className="text-primary">Thursday - Friday</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-1">
                    Timing
                  </h4>
                  <p className="text-muted-foreground">
                    Starts: 9:00 AM (Mar 6)
                    <br />
                    Ends: 5:00 PM (Mar 7)
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-1">
                    Getting There
                  </h4>
                  <p className="text-muted-foreground">
                    Nearest Station: Nerul / Juinagar (5 min auto)
                    
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;