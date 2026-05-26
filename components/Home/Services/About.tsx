import AboutCard from "./AboutCard";

const About = () => {
  const highlights = [
    {
      icon: "/images/s1.png",
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using React.js, Next.js, Tailwind CSS, and TypeScript.",
    },
    {
      icon: "/images/s2.png",
      title: "Backend Development",
      description:
        "Developing REST APIs, authentication systems, and server-side applications with Node.js and Express.js.",
    },
    {
      icon: "/images/s3.png",
      title: "Database Management",
      description:
        "Working with MongoDB to design efficient database structures and manage application data.",
    },
    {
      icon: "/images/s4.png",
      title: "Full Stack Projects",
      description:
        "Building complete MERN stack applications including task management systems, e-commerce platforms, and portfolio websites.",
    },
  ];

  return (
    <section className="py-20" id="about">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            About <span className="text-cyan-300">Me</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-base sm:text-lg leading-relaxed">
            I'm Akram Mondal, a passionate MERN Stack Developer focused on
            building modern, scalable, and user-friendly web applications.
            I enjoy turning ideas into real-world solutions through clean code,
            responsive design, and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
          {highlights.map((item, index) => (
            <AboutCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;