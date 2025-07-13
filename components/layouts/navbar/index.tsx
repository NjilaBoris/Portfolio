import React from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ];
  return (
    <Container>
      <nav className="flex items-center justify-between !p-2">
        <Image
          src="/hero.jpg"
          alt="Avatar"
          height={100}
          width={100}
          className="rounded-full h-10 w-10"
        />
        <div className="flex items-center">
          {navItems.map((item, index) => (
            <Link href={item.href} key={index}>
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
