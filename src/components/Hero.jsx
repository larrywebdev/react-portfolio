import useRotatingAnimation from "./hooks/useRotatingAnimation";
import useRoleSwitcher from "./hooks/useRoleSwitcher";
import Header from "./Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Hero() {
  const ellipseRef = useRotatingAnimation();
  const role = useRoleSwitcher({
    roles: ["DEVELOPER", "DESIGNER", "INNOVATOR"],
  });
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="min-h-[100vh] xl:min-h-[90vh] 2xl:min-h-[700px] bg-[#011627] bg-no-repeat">
      <Header />
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 md:gap-0 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-10">
        <div
          className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]"
          data-aos="fade-left"
        >
          <h1>
            <span className="mb-2 block text-3xl font-bold text-white">
              Hi - I'm Larry
            </span>
            <span className="block text-[1.75rem] font-bold text-[#18F2E5]">
              {role}
            </span>
          </h1>

          <h2 className="mt-3 text-xl text-white">
            Welcome to my portfolio! I'm a passionate full-stack developer with
            a keen interest in creating dynamic and responsive web applications.
            I love coding, learning new technologies, and solving complex
            problems.
          </h2>

          <div className="mt-6 flex flex-wrap gap-6">
            <a
              href="mailto:lawrenceomozojie@gmail.com"
              aria-label="Get In Touch"
              className="min-w-32 cursor-pointer rounded-lg bg-[#18F2E5] px-[18px] py-[10px] text-center text-base font-medium text-[#00071E] active:scale-95 transition duration-100 ease-in-out hover:bg-[#18F2E5CC] hover:text-white"
              data-aos="fade-up"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div
          className="flex min-h-[10rem] items-center justify-center lg:min-h-[20rem]"
          data-aos="zoom-in"
        >
          <div className="relative size-45 sm:size-60 md:size-[17rem] lg:size-[20rem]">
            <img
              src="https://ik.imagekit.io/cpnw7c0xpe/Tailwind%20Components/Components/hero-placeholder.png?updatedAt=1739628240660"
              alt="Larry - Full Stack Developer"
              className="absolute top-0 left-0 h-full w-full object-contain p-7"
            />
            {/* SVG Ellipse */}
            <div
              ref={ellipseRef}
              className="absolute top-0 left-0 h-full w-full will-change-transform"
            >
              <svg
                className="h-full w-full"
                viewBox="0 0 412 413"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="206"
                  cy="206.401"
                  r="204.5"
                  stroke="#18F2E5"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="18 36 54 72"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
