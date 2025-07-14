import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "max-w-4xl  !mx-auto w-full dark:bg-black bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
