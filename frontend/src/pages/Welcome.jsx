import React from "react";
import HeroSection from "../components/HeroSection";
import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";
import QuizSection from "../components/QuizSection";
import Navbar from "../components/Navbar";

const Welcome = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ContentSection />
      <QuizSection />
      <Footer />
    </div>
  );
};

export default Welcome;
