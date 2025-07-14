"use client";
import React, { useState } from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Navbar = () => {
  const navItems = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ];
  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  return (
    <Container className="relative">
      <motion.nav
        className="flex !px-4 !py-2 bg-white dark:bg-black items-center justify-between rounded-full !p-2 fixed  top-0 inset-x-0 !mx-auto max-w-4xl"
        animate={{
          boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
          width: scrolled ? "50%" : "100%",
          marginTop: "0.9rem",
        }}
        transition={{
          duration: 0.5,
          ease: "circInOut",
          type: "spring",
        }}
      >
        <Image
          src="/hero.jpg"
          alt="Avatar"
          height={100}
          width={100}
          className="rounded-full h-10 w-10"
        />
        <div className="flex items-center">
          {navItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="relative !px-2 !py-1 font-normal "
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === index && (
                <motion.span
                  layoutId="hovered-span"
                  className="h-full  absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-10 block">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
};

export default Navbar;
