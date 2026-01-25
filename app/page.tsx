import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/competences";
import Testimonials from "./sections/Testimonials";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Testimonials />
      <Certifications />
      <Contact />
    </>
  );
}