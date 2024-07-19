import HeroSetion from "@/components/HeroSetion";
import MeetAhead from "@/components/MeetAhead";
import Navbar from "@/components/Navbar";
import Quickguide from "@/components/Quickguide";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen mx-auto">
     <div className="container mx-auto">
      <Navbar />
      <HeroSetion />
      <MeetAhead />
      <Quickguide />
     </div>
         
    </main>
  );
}
