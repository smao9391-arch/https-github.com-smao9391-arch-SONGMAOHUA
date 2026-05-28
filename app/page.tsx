import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
    </main>
  );
}
