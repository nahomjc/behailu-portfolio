"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroLoader from "@/components/IntroLoader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <IntroLoader key="loader" onComplete={handleLoaderComplete} />
        ) : (
          <>
            <Navigation />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Certificates />
            <Contact />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
