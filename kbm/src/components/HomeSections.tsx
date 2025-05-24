// src/components/HomeSections.tsx
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Why from "./Why/Why"

export default function HomeSections() {
  return (
    <>
      <Why />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}
