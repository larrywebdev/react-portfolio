import { useEffect, useState } from "react";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    axios
      .get("/projects.json")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.error("Error loading projects:", err);
      });
  }, []);
  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-20" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm bg-gray-200 text-gray-800 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#27a581] font-medium hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
