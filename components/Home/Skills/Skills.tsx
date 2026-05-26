import {
  SiBootstrap,
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS3",
    icon: <SiCss />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "React.js",
    icon: <SiReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "Git",
    icon: <SiGit />,
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
  },
  {
    name: "Postman",
    icon: <SiPostman />,
  },
];

const Skills = () => {
  return (
    <section className="py-20" id="skills">
      <div className="w-[90%] max-w-7xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          My <span className="text-cyan-300">Skills</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
          Technologies and tools I use to build modern, scalable and responsive
          web applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-16">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
              bg-[#14142b]
              border border-cyan-500/10
              rounded-2xl
              p-6
              flex flex-col items-center justify-center
              text-center
              hover:border-cyan-400/40
              hover:-translate-y-2
              transition-all
              duration-300
              shadow-lg
              "
            >
              <div className="text-5xl text-cyan-300 mb-4">{skill.icon}</div>

              <p className="text-gray-200 font-medium text-sm sm:text-base">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
