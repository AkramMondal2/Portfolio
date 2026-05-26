import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="py-16" id="projects">
      <div className="w-[90%] max-w-7xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          A Small Selection of Recent{" "}
          <span className="text-cyan-300">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-16">
          <ProjectCard
            src="/images/p1.webp"
            heading="E-Commerce Web Application"
            description="A modern online shopping platform featuring product browsing, cart management, order processing, PayPal integration, and admin dashboard."
          />
          
          <ProjectCard
            src="/images/p2.webp"
            heading="Task Management Application"
            description="A full-stack MERN application for creating, updating, tracking, and managing daily tasks with secure JWT authentication."
            liveLink="https://taskmanagement-frontend-gamma.vercel.app/"
          />

          <ProjectCard
            src="/images/p3.webp"
            heading="Task Processing System"
            description="A productivity-focused application that streamlines task workflows, status tracking, priority management, and team collaboration."
          />

          <ProjectCard
            src="/images/p4.webp"
            heading="Personal Portfolio Website"
            description="A responsive portfolio built with Next.js and Tailwind CSS to showcase projects, skills, experience, and professional achievements."
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
