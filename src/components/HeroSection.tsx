
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-0">
      <div className="container max-w-5xl mx-auto pt-16">
        <div className="opacity-0 animate-fade-in">
          <span className="text-primary font-medium">Hi there, I'm</span>
        </div>
        <h1 className="mt-2 text-4xl md:text-7xl font-bold leading-tight opacity-0 animate-fade-in delay-100">
          <span className="block">A Developer</span>
          <span className="block mt-1 md:mt-3">Who Builds</span>
          <span className="block text-primary mt-1 md:mt-3">Amazing Things.</span>
        </h1>
        <p className="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in delay-200">
          I'm a full-stack developer specializing in building (and occasionally designing)
          exceptional digital experiences. Currently, I'm focused on creating accessible,
          human-centered products.
        </p>
        <div className="mt-8 md:mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-in delay-300">
          <Button onClick={scrollToProjects} size="lg">
            View Projects
          </Button>
          <Button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            variant="outline"
            size="lg"
          >
            Contact Me
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in delay-400">
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <div className="h-8 w-5 border-2 border-primary/50 rounded-full flex items-start justify-center">
            <div className="h-2 w-2 bg-primary rounded-full mt-1 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
