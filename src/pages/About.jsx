import React, { useEffect } from "react";
import { HeroSection } from "../components";
import { useGlobalContext } from "../context/context";

const About = () => {
  const { updateAboutPage } = useGlobalContext();

  useEffect(() => {
    updateAboutPage();
  }, []);

  return <HeroSection />;
};

export default About;
