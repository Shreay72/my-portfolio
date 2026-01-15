import { useState, useRef } from 'react';
import { motion, useInView, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Github, ExternalLink, TrendingUp, BarChart3, Wallet, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const filters = ['All', 'Python', 'Machine Learning', 'Full Stack', 'Data Analytics'];

const projects = [
  {
    id: 1,
    title: 'Bank Fraud Detection System',
    description: 'ML-powered system to detect fraudulent banking transactions with high accuracy classification models.',
    icon: TrendingUp,
    tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas'],
    categories: ['Python', 'Machine Learning'],
    highlights: [
      'Processed 10,000+ banking transactions',
      'Built classification model with 85%+ accuracy',
      'Reduced false positives using feature selection',
    ],
    github: 'https://github.com/Shreay72/Bank-Fraud-Detection-system',
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: 'Data Analysis Portfolio',
    description: 'Comprehensive portfolio featuring 5 in-depth data analysis projects across multiple domains.',
    icon: BarChart3,
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    categories: ['Python', 'Data Analytics'],
    highlights: [
      'Multi-domain analysis: Retail, Education, Weather, Healthcare, Finance',
      '50+ visualizations created',
      'Structured reports and documentation',
    ],
    github: 'https://github.com/Shreay72/data-analysis-portfolio',
    demo: null,
    featured: false,
  },
  {
    id: 3,
    title: 'Personal Finance Manager',
    description: 'Full-stack application for tracking expenses, managing budgets, and analyzing financial trends.',
    icon: Wallet,
    tech: ['Python', 'Flask', 'React', 'SQLAlchemy', 'JWT'],
    categories: ['Python', 'Full Stack'],
    highlights: [
      'Expense tracking + budgets + monthly trends',
      'JWT authentication + secure password hashing',
      'Dashboard insights + full-stack integration',
    ],
    github: 'https://github.com/Shreay72/PERSONAL-FINANCE-MANAGER-',
    demo: null,
    featured: false,
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width);
    mouseY.set((e.clientY - top) / height);
  };

  const background = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseX.get() * 100}% ${mouseY.get() * 100}%,
      hsl(174 72% 56% / 0.08),
      transparent 80%
    )
  `;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -12, rotateY: 2, rotateX: 2 }}
      onMouseMove={handleMouseMove}
      className={`relative group overflow-hidden rounded-2xl ${project.featured ? 'animated-gradient-border' : 'glass-card'}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background }}
      />

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground">
            <Star className="w-3 h-3" />
            Featured
          </span>
        </div>
      )}

      <div className={`relative z-10 ${project.featured ? 'bg-card/90' : ''}`}>
        {/* Project Header */}
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <project.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="px-6 py-4 border-b border-border/50">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:bg-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="p-6 border-b border-border/50">
          <ul className="space-y-2.5">
            {project.highlights.map((highlight, idx) => (
              <motion.li 
                key={idx} 
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {highlight}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="p-6 flex gap-3">
          <Button variant="heroOutline" size="sm" className="flex-1 group/btn" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
              View Code
            </a>
          </Button>
          {project.demo && (
            <Button variant="hero" size="sm" className="flex-1" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'All' || project.categories.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-32 lg:py-40 relative" ref={ref}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animated-blob w-[400px] h-[400px] bg-accent/10 bottom-0 left-1/4" style={{ animationDelay: '7s' }} />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real-world applications showcasing data science, machine learning, and full-stack development.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`project-filter-btn ${activeFilter === filter ? 'active' : ''}`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button variant="heroOutline" size="lg" asChild className="group">
            <a href="https://github.com/Shreay72" target="_blank" rel="noopener noreferrer">
              View More on GitHub
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
