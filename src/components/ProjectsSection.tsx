
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderIcon, GithubIcon, LinkIcon } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A clean, modern portfolio website built with React and TailwindCSS to showcase my projects and skills.",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "A fully functional e-commerce app with cart functionality, user authentication, and payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather application that provides accurate forecasts using the OpenWeather API.",
    tags: ["JavaScript", "REST API", "Bootstrap"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 4,
    title: "Task Management System",
    description: "A Kanban-style task management system with drag-and-drop functionality for teams.",
    tags: ["React", "Redux", "Firebase"],
    githubUrl: "https://github.com"
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "Mobile-responsive application for tracking fitness goals, workouts, and nutrition.",
    tags: ["React Native", "GraphQL", "TypeScript"],
    githubUrl: "https://github.com"
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "Full-featured blog platform with markdown support, comments, and admin dashboard.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/20">
      <div className="container max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-primary">Projects</span> I've Built
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-12 md:mb-16">
          A collection of projects that showcase my skills and experience. Each project is briefly described with links to code repositories and live demos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="project-card bg-card border border-border/50 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <FolderIcon className="h-8 w-8 text-primary" />
                  <div className="flex gap-4">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <GithubIcon className="h-5 w-5" />
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <LinkIcon className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground min-h-[80px]">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-secondary/70">
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Button 
            onClick={() => window.open("https://github.com", "_blank")}
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
          >
            <GithubIcon className="h-5 w-5" />
            See more on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
