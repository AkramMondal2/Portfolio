"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { BsArrowRight } from "react-icons/bs";

const Typewriter = dynamic(
  () => import("typewriter-effect"),
  { ssr: false }
);

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Profile Image */}
        <Image
          src="/images/s1.webp"
          alt="ProfilePic"
          width={180}
          height={180}
          priority
          className="rounded-full border-4 md:border-8 border-[#0c0c48aa] w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px]"
        />

        {/* Main Heading */}
        <h1 className="mt-6 max-w-5xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight">
          MERN Stack Developer
          <span className="text-cyan-200">
            {" "}
            Ready to Build Real-World Solutions
          </span>
        </h1>

        {/* Typewriter Section */}
        <div className="mt-5 text-center">
          <h2 className="text-sm sm:text-xl md:text-2xl font-medium text-white">
            Hi, I&apos;m Akram Mondal
          </h2>

          <div className="mt-2 text-cyan-200 font-bold text-lg sm:text-2xl md:text-3xl min-h-[40px] sm:min-h-[50px] flex justify-center items-center">
            <Typewriter
              options={{
                strings: [
                  "MERN Stack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "Web Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a
            href="#projects"
            className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 rounded-full text-sm sm:text-base md:text-lg font-medium text-white flex items-center justify-center"
          >
            <span>See My Work</span>
            <BsArrowRight className="ml-2 w-5 h-5" />
          </a>

          <a
            href="https://github.com/AkramMondal2"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 border border-cyan-400 text-cyan-300 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 text-sm sm:text-base md:text-lg font-medium flex items-center justify-center"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;