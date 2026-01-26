import { motion } from "framer-motion";
import TimelineItem from "../TimelineItem";

const timelineData = [
  {
    title: "Registration",
    description: "Registrations open for all eligible participants. Sign up to secure your spot.",
    date: "Feb 2026",
    time: "Opening Soon",
  },
  {
    title: "Round 1",
    description: "Registrations close. Teams must submit their PPT within the given timeline.",
    date: "Feb 20, 2026",
    time: "11:59 PM IST",
  },
  {
    title: "Round 1 Results",
    description: "Results and shortlisted teams for Round 2 will be announced.",
    date: "Feb 28, 2026",
    time: "TBA",
  },
  {
    title: "Round 2",
    description: "Live event: Shortlisted teams build an MVP, present their solution, and showcase a working demo to the judges.",
    date: "Mar 6-7, 2026",
    time: "Live Session",
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="section-padding relative">
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
            Event <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mark your calendars! Here's everything you need to know about the
            key dates and milestones.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8 md:space-y-0">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
              index={index}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
