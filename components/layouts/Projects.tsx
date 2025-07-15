"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Macbook Mockup",
      src: "/images/macbook.png",
      href: "#",
      description:
        "A sleek Macbook mockup used for showcasing responsive web designs.",
    },
    {
      title: "Portfolio Website",
      src: "/images/portfolio.png",
      href: "#",
      description:
        "A personal portfolio website built to highlight projects and skills.",
    },
    {
      title: "E-commerce Dashboard",
      src: "/images/features.png",
      href: "#",
      description:
        "An interactive dashboard for managing products, orders, and analytics.",
    },
    {
      title: "Task Manager App",
      src: "/images/hero.jpeg",
      href: "#",
      description:
        "A productivity app for organizing tasks, setting deadlines, and tracking progress.",
    },
  ];
  return (
    <div className="!py-6 max-md:h-[130vh] xl:h-[140vh]">
      <p className="text-secondary max-w-lg !pt-4 text-sm md:text-sm font-medium">
        I love building web apps and products that can impact millions of lives
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 !py-5 w-full h-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            viewport={{
              once: true,
            }}
            className="group cursor-pointer relative h-74 !mb-4"
          >
            <div>
              <Link href={project.href}>
                <Image
                  src={project.src}
                  alt="projects"
                  width={300}
                  height={300}
                  className="rounded-xl w-full object-cover  group-hover:blur-[1px] transition duration-200"
                />

                <h2 className="font-medium !mt-2 text-neutral-500 dark:text-neutral-400 tracking-tight z-15">
                  {project.title}
                </h2>
                <p className="font-medium mx-w-xm  text-neutral-500 dark:text-neutral-400 text-sm">
                  {project.description}
                </p>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
