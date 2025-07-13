import Container from "@/components/layouts/Container";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex items-start justify-start ">
      <Container className="min-h-screen !p-4 md:p-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
          Hello, there
        </h1>
        <p className="text-secondary max-w-lg !pt-4 text-sm md:text-sm">
          I'm a software engineer with a passion for building scalable and
          efficient systems. I'm currently working as a software engineer at
          Google.
        </p>
      </Container>
    </div>
  );
};

export default Home;
