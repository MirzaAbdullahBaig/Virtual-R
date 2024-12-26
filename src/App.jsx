import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { motion, useSpring, useScroll } from "framer-motion";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          zIndex: 100,
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          background: "linear-gradient(to right, #f47016, #9c3512)",
        }}
      />
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

// function App() {
//   return (
//     <>
//     <Navbar />
//     <div className="max-w-7xl mx-auto pt-20 px-6">
//       <HeroSection />
//       <FeatureSection />
//       <Workflow />
//       <Pricing />
//       <Testimonials />
//       <Footer />
//     </div>
//     </>
//   )
// }

// export default App
