
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-card border-t border-border/50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
              Portfolio
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              &copy; {year} All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#projects"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a 
              href="#about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </div>
          
          <div className="hidden md:block">
            <p className="text-sm text-muted-foreground">
              Designed & Built with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
