import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, Brain, BarChart3, Server } from 'lucide-react';

const whatIDo = [
  {
    icon: Database,
    title: 'Data Cleaning & EDA',
    description: 'Transform raw data into clean, analysis-ready datasets with comprehensive exploratory analysis.',
  },
  {
    icon: Brain,
    title: 'Machine Learning Models',
    description: 'Build predictive models using classification, regression, and feature engineering techniques.',
  },
  {
    icon: BarChart3,
    title: 'Dashboards & Reporting',
    description: 'Create insightful visualizations and reports that drive data-informed decisions.',
  },
  {
    icon: Server,
    title: 'Backend APIs',
    description: 'Develop robust REST APIs using Flask and FastAPI with database integration.',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-40 lg:py-56 relative" ref={ref}>
      <div className="section-container max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Main Content - More Open Layout */}
        <div className="space-y-20">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl sm:text-4xl font-semibold mb-8 text-foreground">
              Hi, I'm <span className="gradient-text">Shreay Patil</span>
            </h3>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              I'm a passionate Data Science enthusiast with a strong foundation in Python programming, 
              machine learning, and data analytics. I thrive on turning complex datasets into meaningful 
              insights that drive real-world decisions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              My approach combines clean, maintainable code with rigorous analytical thinking. 
              I believe in building solutions that are not just technically sound but also 
              explainable and actionable for stakeholders.
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-4">
              {['Problem Solver', 'Clean Code', 'Explainable Insights', 'Continuous Learner'].map((tag) => (
                <span key={tag} className="skill-chip text-base px-5 py-2.5">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Current Journey Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="glass-card p-10 sm:p-12 relative overflow-hidden text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
              <div className="relative z-10">
                <div className="text-7xl sm:text-8xl font-bold gradient-text mb-4">2025</div>
                <div className="text-xl text-muted-foreground mb-8">Current Journey</div>
                <div className="grid sm:grid-cols-3 gap-6 text-muted-foreground">
                  <div className="space-y-2">
                    <div className="text-3xl">📊</div>
                    <p className="text-sm">Data Science Intern @ Developers Arena</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl">🎓</div>
                    <p className="text-sm">Building real-world ML projects</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl">🚀</div>
                    <p className="text-sm">Expanding full-stack capabilities</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What I Do Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 gap-8 mt-28"
        >
          {whatIDo.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card-hover p-8 sm:p-10 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;