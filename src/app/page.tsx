"use client";

import IntroLoader from "@/components/IntroLoader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VideoShowcase from "@/components/VideoShowcase";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <IntroLoader onComplete={handleLoadingComplete} />;
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <VideoShowcase />
      <About />
      <Services />
      <Portfolio />
      <Certificates />
      <Contact />
      <Footer />
      <Chatbot />
      <ThemeToggle />
    </main>
  );
}
