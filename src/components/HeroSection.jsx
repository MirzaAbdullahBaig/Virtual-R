import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <motion.span
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          VirtualR build tools
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            for developers
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Empower your creativity and bring your VR app ideas to life with our
          intutive developments tools. Get started today and turn your
          imagination into immersive reality!
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-red-800 py-3 px-4 mx-3 rounded-md"
          >
            Start for free
          </a>
          <a href="#" className="py-3 px-4 mx-3 rounded-md border">
            Documentation
          </a>
        </div>
      </motion.span>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-red-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-red-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
