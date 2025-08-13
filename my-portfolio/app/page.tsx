"use client";

import React, { useState, useEffect, forwardRef, ElementType } from 'react';
import {
  Mail,
  Download,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
  Code,
  Database,
  Globe,
  Server,
  Smartphone,
  Monitor,
  ChevronUp,
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Define a type for the props of HeroSection
interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
  inView: boolean;
}

// Corrected HeroSection with proper prop typing for forwardRef
const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(({ scrollToSection, inView }, ref) => {
  return (
    <section id="home" ref={ref} className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden px-4 md:px-0 bg-stone-950 text-stone-300">
      {/* Background gradients for visual effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      {/* Main content with animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Hello, I&apos;m Manikandan S
          </span>
        </h1>
        <h2 className="text-2xl md:text-4xl mb-8 text-stone-300">Full-Stack Developer | Engineer</h2>
        <p className="text-lg md:text-xl mb-12 text-stone-400 max-w-2xl mx-auto">
          A college student and versatile full-stack developer, I&apos;m passionate about AIML models and data science. I apply my strong understanding of deep learning algorithms to build innovative projects that transform complex data into intelligent applications.
        </p>
        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1zlChx5vtRXgMipdeZEEaQK03BLe37lLH/view"
            download="Manikandan-resume.pdf"
            className="flex items-center space-x-2 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
          >
            <Download className="h-4 w-4" />
            <span>Download CV</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
});

// Fix: Add a display name for the component wrapped in forwardRef
HeroSection.displayName = 'HeroSection';

// This is the main App component that renders the entire portfolio website.
const App = () => {
  // State for managing the current active section for navigation highlighting
  const [activeSection, setActiveSection] = useState('home');
  // State for toggling the mobile navigation menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State for managing the "scroll to top" button visibility
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  // State for showing a confirmation message after form submission
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Define your project data
  const projects = [
    {
      title: "Meeting AI",
      description: "An AI bot transforming meeting transcripts into summaries and action items with deadlines, using Gemini and AssemblyAI.",
      image: "https://placehold.co/600x400/4c1d95/FFFFFF?text=Meeting+AI",
      liveLink: "https://meeting-ai-alpha.vercel.app/",
      githubLink: "https://github.com/Manikandan1511/meeting-ai",
      tech: ["Next.js", "Google Gemini API", "AssemblyAI API", "FastAPI", "Python"],
    },
    {
      title: "PolicyBot",
      description: "An AI-powered Q&A agent that answers questions by searching and retrieving information from your uploaded internal documents.",
      image: "https://placehold.co/600x400/818CF8/FFFFFF?text=PolicyBot",
      liveLink: "https://internal-docs-qa-agent-eight.vercel.app/",
      githubLink: "https://github.com/Manikandan1511/internal-docs-qa-agent",
      tech: ["React.js", "Python", "ChromaDB", "HuggingFace", "LangChain"],
    },
    {
      title: "FinDocs",
      description: "AI-powered document management system designed to streamline the processing, analysis, and retrieval of financial documents. It leverages a suite of powerful technologies to offer features like automated data extraction, intelligent tagging, semantic search, and fraud detection.",
      image: "https://placehold.co/600x400/9333ea/FFFFFF?text=FinDocs",
      liveLink: "#",
      githubLink: "https://github.com/Manikandan1511/findocs-ai-client",
      tech: ["Python", "Transformers", "Neo4j", "Google Cloud", "PyTorch", "EasyOCR"],
    },
  ];

  // Define your skills data
  const skills = [
    { name: "React", icon: Code, level: 95 },
    { name: "TypeScript", icon: Code, level: 90 },
    { name: "Next.js", icon: Globe, level: 88 },
    { name: "Node.js", icon: Server, level: 85 },
    { name: "Python", icon: Server, level: 82 },
    { name: "ElectronJS", icon: Smartphone, level: 80 },
    { name: "Firebase", icon: Database, level: 75 },
    { name: "HTML5", icon: Code, level: 70 },
  ];

  // InView hook for each section to track when it becomes visible
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.5 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.3 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.3 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.5 });

  // Effect to update the active section based on which section is in view
  useEffect(() => {
    if (homeInView) {
      setActiveSection('home');
    } else if (aboutInView) {
      setActiveSection('about');
    } else if (skillsInView) {
      setActiveSection('skills');
    } else if (projectsInView) {
      setActiveSection('projects');
    } else if (contactInView) {
      setActiveSection('contact');
    }
  }, [homeInView, aboutInView, skillsInView, projectsInView, contactInView]);

  // Effect to show/hide the scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle smooth scrolling to a section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Show a confirmation message instead of an alert
    setShowConfirmation(true);
    // Hide the confirmation message after 5 seconds
    setTimeout(() => {
      setShowConfirmation(false);
    }, 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // The main layout of the page
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-sans antialiased overflow-x-hidden relative">
      
      {/* Header and Navigation */}
      <header className="sticky top-0 z-50 bg-stone-950/80 backdrop-blur-md shadow-sm border-b border-stone-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Portfolio
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <NavItem label="Home" sectionId="home" activeSection={activeSection} onClick={scrollToSection} />
            <NavItem label="About" sectionId="about" activeSection={activeSection} onClick={scrollToSection} />
            <NavItem label="Skills" sectionId="skills" activeSection={activeSection} onClick={scrollToSection} />
            <NavItem label="Projects" sectionId="projects" activeSection={activeSection} onClick={scrollToSection} />
            <NavItem label="Contact" sectionId="contact" activeSection={activeSection} onClick={scrollToSection} />
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-white">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-[69px] inset-x-0 z-40 bg-stone-950 shadow-lg border-t border-stone-800"
          >
            <nav className="flex flex-col p-4 space-y-2">
              <NavItem label="Home" sectionId="home" activeSection={activeSection} onClick={scrollToSection} isMobile={true} />
              <NavItem label="About" sectionId="about" activeSection={activeSection} onClick={scrollToSection} isMobile={true} />
              <NavItem label="Skills" sectionId="skills" activeSection={activeSection} onClick={scrollToSection} isMobile={true} />
              <NavItem label="Projects" sectionId="projects" activeSection={activeSection} onClick={scrollToSection} isMobile={true} />
              <NavItem label="Contact" sectionId="contact" activeSection={activeSection} onClick={scrollToSection} isMobile={true} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto">
        {/* Home Section - Now a separate component */}
        {/* Pass the homeInView state to the HeroSection component */}
        <HeroSection ref={homeRef} scrollToSection={scrollToSection} inView={homeInView} />

        {/* About Section */}
        <section id="about" ref={aboutRef} className="py-20 md:py-32 relative px-4 md:px-0 bg-stone-950 text-stone-200">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
          <SectionTitle title="About Me" inView={aboutInView} />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: aboutInView ? 1 : 0, x: aboutInView ? 0 : -50 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-stone-300 mb-6 leading-relaxed">
                A college student and versatile full-stack developer, I&apos;m passionate about AIML models and data science. I apply my strong understanding of deep learning algorithms to build innovative projects that transform complex data into intelligent applications.
              </p>
              <p className="text-lg text-stone-300 mb-8 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
              </p>

              <div className="flex space-x-6">
                <SocialLink icon={Github} href="https://github.com/Manikandan1511" colorClass="hover:text-purple-400" />
                <SocialLink icon={Linkedin} href="https://www.linkedin.com/in/mani-kandan-2aa6402a1/" colorClass="hover:text-blue-400" />
                <SocialLink icon={Twitter} href="https://x.com/Manikandan52115" colorClass="hover:text-pink-400" />
                <SocialLink icon={Mail} href="mailto:manikandanmk15112005@gmail.com" colorClass="hover:text-purple-400" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: aboutInView ? 1 : 0, x: aboutInView ? 0 : 50 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <Image
                  src="https://placehold.co/320x320/9333ea/FFFFFF?text=Manikandan+S"
                  alt="Profile"
                  width={320}
                  height={320}
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-purple-400/30"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" ref={skillsRef} className="py-20 md:py-32 relative px-4 md:px-0 bg-stone-950 text-stone-200">
          <div className="absolute inset-0 bg-gradient-to-l from-purple-900/10 to-blue-900/10"></div>
          <SectionTitle title="Skills & Expertise" inView={skillsInView} />
          <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} inView={skillsInView} index={index} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" ref={projectsRef} className="py-20 md:py-32 relative px-4 md:px-0 bg-stone-950 text-stone-200">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/10 to-purple-900/10"></div>
          <SectionTitle title="Featured Projects" inView={projectsInView} />
          <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} inView={projectsInView} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={contactRef} className="py-20 md:py-32 relative px-4 md:px-0 bg-stone-950 text-stone-200">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10"></div>
          <SectionTitle title="Get In Touch" inView={contactInView} />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: contactInView ? 1 : 0, scale: contactInView ? 1 : 0.9 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-12"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Let&apos;s Work Together</h3>
              <p className="text-stone-300 mb-8 leading-relaxed">
                I&apos;m always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-purple-400 mr-3" />
                  <span className="text-stone-300">manikandanmk15112005@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 text-purple-400 mr-3" />
                  <span className="text-stone-300">github.com/Manikandan1511</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 text-purple-400 mr-3" />
                  <span className="text-stone-300">linkedin.com/in/mani-kandan-2aa6402a1</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-stone-800/50 border border-stone-700 rounded-2xl p-6">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-stone-600 bg-stone-700/50 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-stone-600 bg-stone-700/50 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-stone-600 bg-stone-700/50 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-stone-400 border-t border-stone-800">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Manikandan S. All rights reserved.</p>
        </div>
      </footer>

      {/* Confirmation Message Box */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50"
          >
            Thank you for your message! I will get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => scrollToSection('home')}
            className="fixed bottom-6 right-6 p-3 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition-colors duration-300 z-50"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

// Component for a navigation item
const NavItem = ({ label, sectionId, activeSection, onClick, isMobile = false }: { label: string; sectionId: string; activeSection: string; onClick: (sectionId: string) => void; isMobile?: boolean }) => {
  const isActive = activeSection === sectionId;
  const baseClasses = "capitalize transition-colors duration-300";
  const desktopClasses = `font-medium ${isActive ? 'text-purple-400' : 'hover:text-purple-400'}`;
  const mobileClasses = `w-full text-left font-medium p-3 ${isActive ? 'text-purple-400 bg-stone-800/50 rounded-lg' : 'hover:text-purple-400'}`;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
      onClick={() => onClick(sectionId)}
    >
      {label}
    </motion.button>
  );
};
NavItem.displayName = 'NavItem';

// Define a type for ProjectCard props
interface ProjectCardProps {
  inView: boolean;
  project: {
    title: string;
    description: string;
    image: string;
    liveLink: string;
    githubLink: string;
    tech: string[];
  };
  index: number;
}

// Component for a project card
const ProjectCard = ({ inView, project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-stone-800/50 border border-stone-700 rounded-3xl overflow-hidden shadow-xl hover:border-purple-400/50 transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
        <p className="text-stone-300 mb-4 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span key={techIndex} className="bg-purple-900/30 text-purple-300 border border-purple-400/30 text-sm font-semibold px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.liveLink && project.liveLink !== '#' && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200">
              <Monitor className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
          )}
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-stone-400 hover:text-stone-300 transition-colors duration-200">
            <Code className="w-5 h-5" />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
ProjectCard.displayName = 'ProjectCard';

// Define a type for SkillCard props
interface SkillCardProps {
  skill: {
    name: string;
    icon: ElementType; // Correct type for the Lucide-React icon component
    level: number;
  };
  inView: boolean;
  index: number;
}

// Component for a skill card
const SkillCard = ({ skill, inView, index }: SkillCardProps) => {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="bg-stone-800/50 border border-stone-700 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 rounded-2xl p-6"
    >
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-purple-400 mr-3" />
        <h3 className="text-lg font-semibold">{skill.name}</h3>
      </div>
      <div className="w-full bg-stone-700 rounded-full h-2 mb-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 + 0.5 }}
          className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
        ></motion.div>
      </div>
      <span className="text-sm text-stone-400">{skill.level}%</span>
    </motion.div>
  );
};
SkillCard.displayName = 'SkillCard';

// Component for a section title with a separator
const SectionTitle = ({ title, inView }: { title: string; inView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-12 relative z-10"
  >
    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{title}</span>
    </h2>
    <div className="flex justify-center items-center">
      <div className="w-20 h-1 bg-purple-400 rounded-full"></div>
    </div>
  </motion.div>
);
SectionTitle.displayName = 'SectionTitle';

// Define a type for SocialLink props
interface SocialLinkProps {
  icon: ElementType;
  href: string;
  colorClass: string;
}

// Component for a social media link
const SocialLink = ({ icon: Icon, href, colorClass }: SocialLinkProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 10 }}
    whileTap={{ scale: 0.9 }}
    className={`text-stone-400 transition-colors duration-300 ${colorClass}`}
    aria-label="Social media link"
  >
    <Icon className="w-7 h-7" />
  </motion.a>
);
SocialLink.displayName = 'SocialLink';

export default App;