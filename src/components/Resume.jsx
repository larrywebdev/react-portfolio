import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="resume" className="bg-gray-100 py-16 px-4 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-10"
          data-aos="fade-up"
        >
          Resume
        </h2>

        {/* Summary */}
        <div className="mb-12" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-[#27a581] mb-2">
            About Me
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Passionate Frontend Developer with 3+ years of experience building
            responsive web applications using modern tools like React, Tailwind
            CSS, and TypeScript. Always eager to learn and adapt to new
            technologies.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-12" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-[#27a581] mb-4">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-800">
            <div className="bg-white rounded-lg shadow-sm p-3">HTML5</div>
            <div className="bg-white rounded-lg shadow-sm p-3">CSS3</div>
            <div className="bg-white rounded-lg shadow-sm p-3">JavaScript</div>
            <div className="bg-white rounded-lg shadow-sm p-3">React</div>
            <div className="bg-white rounded-lg shadow-sm p-3">
              Tailwind CSS
            </div>
            <div className="bg-white rounded-lg shadow-sm p-3">Node.js</div>
            <div className="bg-white rounded-lg shadow-sm p-3">
              Git & GitHub
            </div>
            <div className="bg-white rounded-lg shadow-sm p-3">Figma</div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-[#27a581] mb-4">
            Experience
          </h3>
          <div className="text-left space-y-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-800">
                Frontend Developer - XYZ Tech
              </h4>
              <p className="text-sm text-gray-500">Jan 2023 - Present</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Built and maintained SPA using React and Redux</li>
                <li>
                  Improved performance and SEO using lazy loading and code
                  splitting
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-12" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-[#27a581] mb-4">
            Education
          </h3>
          <div className="text-left bg-white p-5 rounded-lg shadow-sm">
            <h4 className="font-bold text-gray-800">
              Bachelor of Computer Science
            </h4>
            <p className="text-sm text-gray-500">
              University of Example - 2022
            </p>
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-10 flex justify-center" data-aos="fade-up">
          <a
            href="#"
            aria-label="Download Resume"
            className="min-w-32 cursor-pointer rounded-lg bg-[#18F2E5] px-[18px] py-[10px] text-center text-base font-medium text-[#00071E] active:scale-95 transition duration-100 ease-in-out hover:bg-[#27a581] hover:text-white"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
