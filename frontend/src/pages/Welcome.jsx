import React from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/HeroSection";
import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";
import QuizSection from "../components/QuizSection";

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
