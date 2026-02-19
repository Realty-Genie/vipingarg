import Navbar from "./components/Navbar";
import HomeHero from "./components/home/HomeHero";
import AudienceSelector from "./components/home/AudienceSelector";
import WhatIDo from "./components/home/WhatIDo";
import WhyWorkWithMe from "./components/home/WhyWorkWithMe";
import ServicesOverview from "./components/home/ServicesOverview";
import SoftLeadCapture from "./components/home/SoftLeadCapture";
import TrustCredibility from "./components/home/TrustCredibility";
import FinalCTA from "./components/home/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <AudienceSelector />
        <WhatIDo />
        <WhyWorkWithMe />
        <ServicesOverview />
        <TrustCredibility />
        <SoftLeadCapture />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
