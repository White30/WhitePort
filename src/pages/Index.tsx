
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const Index = () => {
  useEffect(() => {
    document.title = "Gonçalo Branco - Portfolio";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <SmoothScroll />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
