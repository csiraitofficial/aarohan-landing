import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqItems = [
  {
    question: "Who can participate in the hackathon?",
    answer: "Aarohan 1.0 is open to all B.Tech and BCA students. Participants can choose a problem statement within the themes of Crowd management, Agriculture, Education, Healthcare, or Cybersecurity.",
  },
  {
    question: "Is there a registration fee?",
    answer: "The initial registration fee is 200. Teams that qualify for the top 20 and move on to Round 2 are required to pay an additional fee of 800.",
  },
  {
    question: "Will accommodation and meals be provided?",
    answer: "Yes, the organizers provide all meals, including breakfast, lunch, high tea, and dinner. Accommodation is also arranged for participants on 6th March.",
  },
  {
    question: "Do participants receive certificates?",
    answer: "Yes, all Round 1 and 2 participants will receive certificates.",
  },
  {
    question: "What is the team size requirement?",
    answer: "Each team must consist of 3-4 members. You will work together to develop a Minimum Viable Product (MVP) based on the solution you proposed in your Round 1 PPT.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#008d76]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-white uppercase">
            HAVE <span className="text-[#008d76]">QUESTIONS?</span>
          </h2>
          <div className="h-1 w-20 bg-[#008d76] mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm uppercase tracking-widest font-bold">
            Everything you need to know about Aarohan 1.0
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`group rounded-[1.5rem] border transition-all duration-500 overflow-hidden ${
                  isOpen 
                    ? "bg-white/10 border-[#008d76]/50 shadow-[0_0_30px_rgba(0,141,118,0.1)]" 
                    : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle size={18} className={isOpen ? "text-[#008d76]" : "text-gray-500"} />
                    <span className={`font-bold tracking-tight text-base md:text-lg ${isOpen ? "text-white" : "text-gray-300"}`}>
                      {item.question}
                    </span>
                  </div>
                  <div className={`flex-shrink-0 ml-4 p-1 rounded-full border transition-all duration-300 ${isOpen ? "border-[#008d76] bg-[#008d76] text-[#030712]" : "border-white/20 text-white"}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5 mt-2 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
