import Container from "@/components/layouts/Container";
import Projects from "@/components/layouts/Projects";

import React from "react";

const About = () => {
  return (
    <div className="min-h-screen w-full flex items-start justify-start ">
      <Container className="min-h-[200vh]  !px-4  !pt-20 !pb-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
          About Me
        </h1>
        <p className="text-secondary max-w-lg !pt-4 text-sm md:text-sm font-medium">
          I'm a passionate software developer with a strong focus on building
          modern web applications using React and TypeScript. I enjoy solving
          complex problems, learning new technologies, and collaborating with
          others to create impactful digital experiences. My portfolio showcases
          a variety of projects that highlight my skills in frontend development
          and continuous improvement.
        </p>
        <Projects />
      </Container>
    </div>
  );
};

export default About;
