import React, { useEffect } from "react";
import { HeroSection } from "../components";
import { useGlobalContext } from "../context/context";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => {
    updateHomePage();
  }, []);

  return (
    <>
      <HeroSection />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
