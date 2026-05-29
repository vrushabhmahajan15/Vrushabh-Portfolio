import { About } from "./components/About";
import { Certifications } from "./components/Certifications";
import { Chatbot } from "./components/Chatbot";
import { Contact } from "./components/Contact";
import { CustomCursor } from "./components/CustomCursor";
import { Dashboard } from "./components/Dashboard";
import { Dock } from "./components/Dock";
import { Hero } from "./components/Hero";
import { ParticleField } from "./components/ParticleField";
import { Projects } from "./components/Projects";
import { RocketBackground } from "./components/RocketBackground";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline";
import { ThreeBackground } from "./components/ThreeBackground";

export function App() {
  return (
    <main id="hero" className="relative min-h-screen text-foreground">
      <CustomCursor />
      <ParticleField />
      <ThreeBackground />
      <RocketBackground />
      <Dock />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Dashboard />
        <Timeline />
        <Certifications />
        <Contact />
        <Chatbot />
        <footer className="relative z-10 border-t border-white/5 py-10 text-center text-xs text-muted-foreground">
          <span className="font-mono text-neon-cyan">{">"}</span> System idle · © {new Date().getFullYear()} Vrushabh Mahajan
        </footer>
      </div>
    </main>
  );
}
