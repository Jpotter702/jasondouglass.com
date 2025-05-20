
import React from "react";
import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript", "TypeScript", "React", "Node.js", 
  "Express", "MongoDB", "PostgreSQL", "GraphQL", 
  "Next.js", "Tailwind CSS", "Git", "Docker",
  "AWS", "Firebase", "Redux", "Jest"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-primary">About</span> Me
            </h2>
            <p className="text-lg text-muted-foreground">
              Hello! I'm a passionate web developer with a love for creating interactive, responsive, and user-friendly applications. My journey in tech began during college, and I've been hooked ever since.
            </p>
            <p className="text-lg text-muted-foreground">
              With several years of experience in full-stack development, I enjoy building everything from small business sites to rich interactive web apps. I approach each project with a focus on performance, accessibility, and clean code.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
            </p>
          </div>
          
          <div className="opacity-0 animate-fade-in delay-200">
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  className="bg-secondary/80 hover:bg-secondary text-foreground text-sm py-1.5 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Education & Experience</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h4 className="text-lg font-bold">Senior Web Developer</h4>
                  <p className="text-primary">2022 - Present</p>
                  <p className="text-muted-foreground mt-2">Leading development of web applications and mentoring junior developers.</p>
                </div>
                <div className="border-l-2 border-primary pl-6 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h4 className="text-lg font-bold">Full-Stack Developer</h4>
                  <p className="text-primary">2019 - 2022</p>
                  <p className="text-muted-foreground mt-2">Built and maintained various web applications using modern technologies.</p>
                </div>
                <div className="border-l-2 border-primary pl-6 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h4 className="text-lg font-bold">Bachelor of Computer Science</h4>
                  <p className="text-primary">2015 - 2019</p>
                  <p className="text-muted-foreground mt-2">Graduated with honors, specializing in software engineering.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
