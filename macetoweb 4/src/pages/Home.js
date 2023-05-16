import React from "react";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import SuggetionForPlaying from "../components/Home/SuggetionForPlaying/SuggetionForPlaying";
import Feature from "../components/Home/Feature/Feature";
import Faq from "../components/Home/Faq/Faq";
import ContactUs from "../components/ContactUs/ContactUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SuggetionForPlaying />
      <Feature />
      <Faq />
      <ContactUs />
    </>
  );
};

export default Home;
