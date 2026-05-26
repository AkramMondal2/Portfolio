import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#14142b] border-t border-cyan-500/10 py-8">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Side */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              Akram <span className="text-cyan-300">Mondal</span>
            </h3>

            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              MERN Stack Developer | Open to Internship & Full-Time Opportunities
            </p>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-5">
            <Link
              href="https://github.com/AkramMondal2"
              target="_blank"
              className="text-gray-400 hover:text-cyan-300 transition duration-300"
            >
              <FaGithub className="w-6 h-6" />
            </Link>

            <Link
              href="mailto:mondalakram137@gmail.com"
              className="text-gray-400 hover:text-cyan-300 transition duration-300"
            >
              <FaEnvelope className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cyan-500/10 mt-6 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Akram Mondal. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;