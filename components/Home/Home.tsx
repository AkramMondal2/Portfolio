import React from "react";
import Hero from "./Hero/Hero";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import About from "./Services/About";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden" id="home">
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
