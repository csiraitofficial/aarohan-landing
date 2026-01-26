import TeamMemberCard from "../TeamMemberCard";

const facultyCoordinators = [
  {
    name: "Dr. Amarsinh V. Vidhate",
    role: "Student Branch Coordinator",
    image: "/vidhate sir.jpeg", 
  },
  {
    name: "Dr. Tushar Ghorpade",
    role: "Faculty Coordinator",
    image: "/tushar sir.jpeg", 
  },
  
];

const coreCommittee = [
  { name: "Riddhi Bhanushali", role: "President", image: "/president.jpg" },
  { name: "Prerna Agarwal", role: "Vice President", image: "/vp.jpg" },
  { name: "Sejal Jaiswar", role: "General Secretary", image: "/gs.JPEG" },
  { name: "Parth Patil", role: "Treasurer", image: "/treasurer.JPG" },
  { name: "Vishwajeet Patil", role: "Chief Technical Officer", image: "/cto.jpg" },
  { name: "Shalin Prashant", role: "Chief Event Organizer", image: "/ceo.jpg" },
  { name: "Austin Kurian", role: "Joint Secretary", image: "/js.JPG" }, 
  { name: "Jatin Pathak", role: "Joint Technical Officer", image: "/jto.JPG" },
  { name: "Sahil Jain", role: "Chief Marketing Officer", image: "/cmo.jpeg" }, // Note: Assuming filename follow pattern if not visible
  { name: "Aadarsh Kumar", role: "Human Resources", image: "/hr.jpeg" },
  { name: "Krishna Bhanushali", role: "Editor-in-Chief", image: "/eic.jpg" },
  { name: "Drishya Tomar", role: "Chief Design Officer", image: "/cdo.jpg" },
  { name: "Ayush Sharma", role: "Chief of Research & Development", image: "/crdo.JPG" },
  { name: "Harshvardhan Singh", role: "Database Administrator", image: "/dba.jpg" },
];

const organizingCommittee = [
  "NEEL VAZE", "Naresh Konar", "Vedika Pathak", "Harsh Prajapat", "VED MANANI", 
  "Josh Mahamunkar", "Swara Kalekar", "Niharika Yadav", "Rachana Bera", "Fardeen Desai", 
  "Kanak Maghnani", "Aditi Bhagat", "Akshat Muchhala", "Gaurav Vojhala", "Divyanshi", 
  "Soham Pandey", "Akshat Matkar", "Nisarg Mokal", "Jignesh Parmar", "Archana Dash", 
  "Yuti Rawool", "Kavya Huliyurdurga", "Mohit Dadhich", "Rushil Vishwakarma", "Mihir Kulkarni", 
  "Shreeya Khadka", "Aaditya Ajit Singh", "GAURANG RANEA", "Aryan Yadav", "Aashi Jain", 
  "Nishika", "Adeeba Mujawar", "Hamsini kuppam", "Bhumi Yadav", "SARAH SAWANT", 
  "Atharva Bhoir", "Rushikesh Patle", "Shreyas Apte", "zidane madre", "Yashana Gupta", 
  "Lakshmi Kamath", "SAEE SALUNKHE", "Ashish Singh", "Atharva chaudhari"
];

// Helper to format names to Title Case
const formatName = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            The Faces behind <span className="gradient-text">AAROHAN 1.0</span>
          </h2>
        </div>

        {/* 1. Faculty Section */}
        <div className="mb-24">
          <h3 className="text-center text-xs font-bold uppercase tracking-[0.3em] text-emerald-500/80 mb-10">Faculty Leadership</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {facultyCoordinators.map((member, index) => (
              <div key={index} className="w-full max-w-[260px]">
                <TeamMemberCard {...member} />
              </div>
            ))}
          </div>
        </div>

        {/* 2. Core Committee Section */}
        <div className="mb-24">
          <h3 className="text-center text-xs font-bold uppercase tracking-[0.3em] text-emerald-500/80 mb-12">Core Committee</h3>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {coreCommittee.slice(0, 2).map((member, index) => (
              <div key={index} className="w-full max-w-[260px]">
                <TeamMemberCard {...member} />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreCommittee.slice(2).map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* 3. Organizing Committee Section */}
        <div className="bg-white/[0.03] rounded-2xl p-8 md:p-12 border border-white/5">
          <h3 className="text-center text-xs font-bold uppercase tracking-[0.3em] text-emerald-500/80 mb-10">Organizing Committee</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-8">
            {organizingCommittee.map((name, index) => (
              <div key={index} className="text-gray-400 text-sm md:text-base flex items-center gap-2">
                <span className="h-1 w-1 bg-emerald-500/50 rounded-full" />
                {formatName(name)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;