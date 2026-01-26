import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamSection from "@/components/sections/TeamSection";

export default function Team(){
    return(
        <div className="min-h-screen bg-background">
            <Navbar/>
            <main>
                <TeamSection/>
            </main>
            <Footer/>
        </div>
    );
}