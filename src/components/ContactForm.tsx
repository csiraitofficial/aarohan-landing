import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const organizers = [
  {
    name: "CSI-RAIT",
    email: "csiraitofficial@gmail.com",
    initials: "CS",
  },
  {
    name: "Riddhi Bhanushali",
    email: "bhanushaliriddhiwork@gmail.com",
    phone: "+919321633103",
    initials: "RB",
  },
  {
    name: "Rachana Bera",
    email: "rac.ber.rt23@dypatil.edu",
    phone: "+917021259090",
    initials: "RA",
  },
];

const ContactPeople = () => {
  return (
    <section className="py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1.5 h-8 bg-green-600 rounded-full" />
        <h2 className="text-3xl font-bold text-foreground">Contact the organisers</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {organizers.map((person, index) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-start gap-4 p-6 bg-muted/30 rounded-2xl border border-border/50 hover:bg-muted/50 transition-colors"
          >
            {/* Avatar Icon */}
            <div className="flex-shrink-0 w-14 h-14 bg-green-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
              {person.initials}
            </div>

            {/* Contact Details */}
            <div className="space-y-1">
              <h4 className="font-semibold text-lg text-foreground">{person.name}</h4>
              
              <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${person.email}`} className="text-sm truncate max-w-[180px]">
                  {person.email}
                </a>
              </div>

              {person.phone && (
                <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${person.phone}`} className="text-sm">
                    {person.phone}
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContactPeople;