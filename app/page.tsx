import HeroScroll from "@/components/sections/HeroScroll";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <HeroScroll />
      <div className="relative z-10 bg-background">
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}
