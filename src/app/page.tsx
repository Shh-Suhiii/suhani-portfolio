import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import DesignGallery from "@/components/DesignGallery";
import Contact from "@/components/Contact";
import Dock from "@/components/Dock";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07070A] text-white overflow-hidden">
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <DesignGallery />
      <Contact />
      <Dock />
    </main>
  );
}