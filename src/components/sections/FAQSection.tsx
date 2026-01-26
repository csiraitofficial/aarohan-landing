import { motion } from "framer-motion";
import FAQAccordion from "../FAQAccordion";

const faqItems = [
  {
    question: "Who can participate in the hackathon?",
    answer:
      "Aarohan 1.0 is open to all B.Tech and BCA students. Participants can choose a problem statement within the themes of Crowd management, Agriculture, Education, Healthcare, or Cybersecurity.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "The initial registration fee is 200. Teams that qualify for the top 20 and move on to Round 2 are required to pay an additional fee of 800.",
  },
  {
    question: "Will accommodation and meals be provided?",
    answer:
      "Yes, the organizers provide all meals, including breakfast, lunch, high tea, and dinner. Accommodation is also arranged for participants on 6th March.",
  },
  {
    question: "Do participants receive certificates?",
    answer:
      "Yes, all Round 1 and 2 participants will receive certificates.",
  },
  {
    question: "What is the team size requirement?",
    answer:
      "Each team must consist of 3-4 members. You will work together to develop a Minimum Viable Product (MVP) based on the solution you proposed in your Round 1 PPT.",
  },
  {
    question: "How does the evaluation process work?",
    answer:
      "Round 1 is a PPT submission evaluated on clarity, innovation, and feasibility. The top 20 teams then move to a 24-hour onsite implementation round (Round 2) held on March 6th and 7th, 2026, where they build and demo their software solution.",
  },
  {
    question: "What are the prizes?",
    answer:
      "There is a total prize pool of 50,000. The top 3 teams across all themes will be awarded based on their performance in the final implementation and demo round.",
  },
];
const FAQSection = () => {
  return (
    <section id="faq" className="section-padding relative">
      <div className="absolute inset-0 mesh-gradient opacity-20" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. If you can't find what you're
            looking for, feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
