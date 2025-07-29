import { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [menuOpen]);

  return (
    <header className="border-b border-white h-[70px] md:px-8 flex items-center justify-between relative z-20 px-[30px]">
      <h1 className="text-white text-2xl font-semibold">My Portfolio</h1>
      <div
        className="md:hidden w-10 h-full relative flex flex-col justify-center items-center cursor-pointer z-30"
        onClick={toggleMenu}
      >
        <div className="relative h-[24px] w-[30px]">
          {/* Top bar */}
          <span
            className={`absolute left-0 h-[3px] w-[30px] bg-white rounded-full transition-transform duration-500 ease-in-out
      ${
        menuOpen
          ? "transform rotate-45 translate-y-[10px]"
          : "transform rotate-0 translate-y-0"
      }
    `}
          />

          {/* Middle bar */}
          <span
            className={`absolute left-0 h-[3px] w-[30px] bg-white rounded-full transition-opacity duration-500 ease-in-out
      ${menuOpen ? "opacity-0" : "opacity-100 translate-y-[10px]"}
    `}
          />

          {/* Bottom bar */}
          <span
            className={`absolute left-0 h-[3px] w-[30px] bg-white rounded-full transition-transform duration-500 ease-in-out
      ${
        menuOpen
          ? "transform -rotate-45 translate-y-[10px]"
          : "transform rotate-0 translate-y-[20px]"
      }
    `}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 right-0 h-screen w-[80vw] max-w-[300px] bg-black/90 text-center transform transition-transform duration-300 overflow-y-auto flex flex-col items-center justify-start pt-20 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="grid gap-6 text-lg font-semibold">
          {["Home", "Resume", "Projects", "Contact"].map((text) => (
            <li key={text}>
              <a
                href={text === "Home" ? "#" : `#${text.toLowerCase()}`}
                onClick={closeMenu}
                className="text-white"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 items-center">
        <ul className="flex gap-6 text-white m-0 p-0 text-lg font-semibold">
          {["Home", "Resume", "Projects", "Contact"].map((text) => (
            <li key={text} className="relative group">
              <a href={text === "Home" ? "#" : `#${text.toLowerCase()}`}>
                {text}
                <span className="block h-0.5 w-0 bg-[#18F2E5] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
