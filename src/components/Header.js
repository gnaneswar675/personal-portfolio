import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ModeToggle } from './theme/mode-toggle';
import { cn } from '../lib/utils';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId, e) => {
    if (e) {
      e.preventDefault();
    }
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className={cn('sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60')}>
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          <button
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
            onClick={() => scrollToSection('about')}
          >
            Gnaneswar Thavva
          </button>
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li><a className="hover:text-primary transition-colors" href="#about" onClick={(e) => scrollToSection('about', e)}>About</a></li>
            <li><a className="hover:text-primary transition-colors" href="#experience" onClick={(e) => scrollToSection('experience', e)}>Experience</a></li>
            <li><a className="hover:text-primary transition-colors" href="#projects" onClick={(e) => scrollToSection('projects', e)}>Projects</a></li>
            <li><a className="hover:text-primary transition-colors" href="#skills" onClick={(e) => scrollToSection('skills', e)}>Skills</a></li>
            <li><a className="hover:text-primary transition-colors" href="#education" onClick={(e) => scrollToSection('education', e)}>Education</a></li>
            <li><a className="hover:text-primary transition-colors" href="#certifications" onClick={(e) => scrollToSection('certifications', e)}>Certifications</a></li>
            <li><a className="hover:text-primary transition-colors" href="#contact" onClick={(e) => scrollToSection('contact', e)}>Contact</a></li>
            <li>
              <a 
                href="https://drive.google.com/file/d/1hvDPjomtbnwVvLlgRm6d-qIEVvD_rGBO/view?usp=drivesdk" 
                download="Resume.pdf" 
                className="inline-flex h-9 items-center rounded-md border border-border px-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Resume
              </a>
            </li>
            <li><ModeToggle /></li>
          </ul>
          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <button className="text-xl" onClick={toggleMenu} aria-label="Toggle menu">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4">
            <ul className="flex flex-col gap-3 text-sm">
              <li><a className="block hover:text-primary" href="#about" onClick={(e) => scrollToSection('about', e)}>About</a></li>
              <li><a className="block hover:text-primary" href="#experience" onClick={(e) => scrollToSection('experience', e)}>Experience</a></li>
              <li><a className="block hover:text-primary" href="#projects" onClick={(e) => scrollToSection('projects', e)}>Projects</a></li>
              <li><a className="block hover:text-primary" href="#skills" onClick={(e) => scrollToSection('skills', e)}>Skills</a></li>
              <li><a className="block hover:text-primary" href="#education" onClick={(e) => scrollToSection('education', e)}>Education</a></li>
              <li><a className="block hover:text-primary" href="#certifications" onClick={(e) => scrollToSection('certifications', e)}>Certifications</a></li>
              <li><a className="block hover:text-primary" href="#contact" onClick={(e) => scrollToSection('contact', e)}>Contact</a></li>
              <li>
                <a 
                  href="https://drive.google.com/file/d/1hvDPjomtbnwVvLlgRm6d-qIEVvD_rGBO/view?usp=drive_link" 
                  download="Resume.pdf" 
                  className="inline-flex h-9 items-center rounded-md border border-border px-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
