import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Open to{" "}
            <span className="text-cyan-300">
              Internship & Full-Time Opportunities
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-base sm:text-lg leading-relaxed">
            I'm a MERN Stack Developer passionate about building modern web
            applications. Currently seeking internship and entry-level developer
            opportunities where I can contribute, learn, and grow as a software
            engineer.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-4">
              <BiEnvelope className="w-7 h-7 text-cyan-300 flex-shrink-0" />
              <a
                href="mailto:mondalakram137@gmail.com"
                className="text-gray-300 text-base sm:text-lg hover:text-cyan-300 transition"
              >
                mondalakram137@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <BiPhone className="w-7 h-7 text-cyan-300 flex-shrink-0" />
              <p className="text-gray-300 text-base sm:text-lg">
                Available on Request
              </p>
            </div>

            <div className="flex items-center gap-4">
              <BiMap className="w-7 h-7 text-cyan-300 flex-shrink-0" />
              <p className="text-gray-300 text-base sm:text-lg">
                West Bengal, India
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          action={process.env.NEXT_PUBLIC_FORM_ACTION}
          method="POST"
          className="bg-[#14142b] border border-cyan-500/10 rounded-2xl p-6 md:p-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Recruiter / HR Name"
            required
            className="w-full px-4 py-3.5 bg-[#232345] text-white rounded-lg outline-none border border-transparent focus:border-cyan-400 placeholder:text-white/60"
          />

          <input
            type="email"
            name="email"
            placeholder="Work Email"
            required
            className="w-full mt-5 px-4 py-3.5 bg-[#232345] text-white rounded-lg outline-none border border-transparent focus:border-cyan-400 placeholder:text-white/60"
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="w-full mt-5 px-4 py-3.5 bg-[#232345] text-white rounded-lg outline-none border border-transparent focus:border-cyan-400 placeholder:text-white/60"
          />

          <input
            type="text"
            name="role"
            placeholder="Role / Position"
            className="w-full mt-5 px-4 py-3.5 bg-[#232345] text-white rounded-lg outline-none border border-transparent focus:border-cyan-400 placeholder:text-white/60"
          />

          <textarea
            name="message"
            placeholder="Share details about the role, internship, or opportunity..."
            required
            className="w-full mt-5 px-4 py-3.5 bg-[#232345] text-white rounded-lg outline-none border border-transparent focus:border-cyan-400 placeholder:text-white/60 h-40 resize-none"
          />

          <button
            type="submit"
            className="
              mt-6
              w-full
              py-3.5
              rounded-lg
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              hover:from-cyan-400
              hover:to-blue-500
              text-white
              font-semibold
              transition-all
              duration-300
              cursor-pointer
            "
          >
            Let's Connect
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;