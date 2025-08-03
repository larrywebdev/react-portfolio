import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const [state, handleSubmit] = useForm("xwpqnwvy");
  const [hideForm, setHideForm] = useState(true);
  if (state.succeeded && hideForm) {
    return (
      <div className="text-center my-30">
        <strong className="">
          <h2 className="text-4xl mb-6">Thank you!</h2>
        </strong>
        <p className="text-xl">
          Your message has been received. I'll get back to you shortly.
        </p>
        <button
          onClick={() => setHideForm(false)}
          className="min-w-32 cursor-pointer rounded-lg bg-[#18F2E5] px-[18px] py-[10px] mt-10 text-center text-base font-medium text-[#00071E] active:scale-95 transition duration-100 ease-in-out hover:bg-[#27a581] hover:text-white"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-20" id="contact">
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <p className="text-center text-gray-700 mb-12 text-lg">
          Let's build something great together. Feel free to reach out!
        </p>

        <form
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className="flex justify-center">
            <button
              onClick={() => setHideForm(true)}
              type="submit"
              className="min-w-32 cursor-pointer rounded-lg bg-[#18F2E5] px-[18px] py-[10px] text-center text-base font-medium text-[#00071E] active:scale-95 transition duration-100 ease-in-out hover:bg-[#27a581] hover:text-white"
              disabled={state.submitting}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
