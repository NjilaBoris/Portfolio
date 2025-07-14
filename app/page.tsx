import Container from "@/components/layouts/Container";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex items-start justify-start ">
      <Container className="min-h-[200vh]  !px-4  !pt-20 !pb-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
          Tiako Loic
        </h1>
        <p className="text-secondary max-w-lg !pt-4 text-sm md:text-sm font-medium">
          They call me the street writter. what the hell kind of a name is that.
          I'm a frontend web developer with an eye for design.
        </p>
      </Container>
    </div>
  );
};

export default Home;
