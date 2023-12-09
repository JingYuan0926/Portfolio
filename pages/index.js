import React from "react";
import HeroSection from "./components/HeroSection";
import Project from "./components/Project";
import AboutMe from "./components/AboutMe";
import AchievementsSection from "./components/AchievementsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
<div className="flex min-h-screen flex-col">
<main>
        <HeroSection />
        <AchievementsSection />
        <AboutMe />
        <Project />
        <EmailSection />
        </main>
        <Footer />
</div>
  );
}
