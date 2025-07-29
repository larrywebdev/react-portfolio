import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import { SpeedInsights } from "@vercel/speed-insights/react";
function App() {
  return (
    <>
      <Hero />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
      <SpeedInsights />
    </>
  );
}

export default App;
