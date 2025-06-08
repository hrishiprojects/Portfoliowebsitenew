import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Wealthify",
    description: "The project is a MERN stack (MongoDB, Express.js, React, Node.js) finance dashboard application designed for managing and analyzing financial data through interactive dashboards and visualizations. It enables users to track expenses, monitor analytics, and forecast revenue, providing a streamlined platform for effective financial management.",
    image: "/projects/project1.png",
    tags: ["React", "TypeScript", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Zen Wallet",
    description:
      "This project is a full-stack PERN (PostgreSQL, Express.js, React, Node.js) expense tracker application for managing accounts, tracking transactions, and visualizing income and expenses with a modern, responsive interface and secure authentication.",
    image: "/projects/project2.png",
    tags: ["React", "PostGres", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "LambdaFlow",
    description:
      "This project is a serverless web application built using AWS services such as Lambda, DynamoDB, and S3. It demonstrates how to create a scalable, secure app with a static frontend, dynamic backend, and integrated cloud infrastructure.",
    image: "/projects/project3.png",
    tags: ["React", "AWS Lambda", "Amazon S3"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/hrishiprojects"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};