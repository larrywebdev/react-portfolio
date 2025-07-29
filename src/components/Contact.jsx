import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-20" id="contact">
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <p className="text-center text-gray-700 mb-12 text-lg">
          Let's build something great together. Feel free to reach out!
        </p>

        <form className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="min-w-32 cursor-pointer rounded-lg bg-[#18F2E5] px-[18px] py-[10px] text-center text-base font-medium text-[#00071E] active:scale-95 transition duration-100 ease-in-out hover:bg-[#27a581] hover:text-white active:bg-[#18F2E5] active:text-[#00071E] focus:outline-none touch-manipulation"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
