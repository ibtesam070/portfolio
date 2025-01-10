import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`w-full flex-grow px-4 ${className || ""}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Container;
