import HeroScroll from "@/components/HeroScroll";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

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
