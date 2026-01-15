import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Code2, Database, Brain, Server, Layout, Wrench } from 'lucide-react';

const skillCategories = [
  {
    id: 'datascience',
    icon: Code2,
    title: 'Data Science',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 85 },
      { name: 'Matplotlib', level: 80 },
      { name: 'Scikit-learn', level: 75 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    id: 'ml',
    icon: Brain,
    title: 'Machine Learning',
    skills: [
      { name: 'Classification', level: 85 },
      { name: 'Feature Engineering', level: 80 },
      { name: 'Model Evaluation', level: 80 },
      { name: 'EDA', level: 90 },
      { name: 'Statistical Analysis', level: 75 },
    ],
  },
  {
    id: 'backend',
    icon: Server,
    title: 'Backend',
    skills: [
      { name: 'Flask', level: 80 },
      { name: 'FastAPI', level: 75 },
      { name: 'SQLAlchemy', level: 75 },
      { name: 'JWT Auth', level: 70 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    id: 'frontend',
    icon: Layout,
    title: 'Frontend',
    skills: [
      { name: 'React', level: 70 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'TypeScript', level: 65 },
      { name: 'Axios', level: 75 },
    ],
  },
  {
    id: 'tools',
    icon: Wrench,
    title: 'Tools',
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'Jupyter', level: 90 },
      { name: 'VS Code', level: 90 },
      { name: 'Excel', level: 80 },
      { name: 'Postman', level: 75 },
    ],
  },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('datascience');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-32 lg:py-40 relative" ref={ref}>
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animated-blob w-[350px] h-[350px] bg-primary/10 top-1/4 right-0" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building data-driven solutions from analysis to deployment.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? 'text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {activeTab === category.id && (
                <motion.span
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-gradient-primary rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <category.icon className="w-4 h-4 relative z-10" />
              <span className="relative z-10">{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Content */}
        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div className="glass-card p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <activeCategory.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{activeCategory.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {activeCategory.skills.length} skills
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {activeCategory.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3 + index * 0.08, ease: "easeOut" }}
                          className="h-full bg-gradient-primary rounded-full relative"
                        >
                          <span className="absolute right-0 top-0 w-2 h-full bg-white/30 rounded-full" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* All Skills Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-6">All Technologies</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skillCategories.flatMap((cat) => cat.skills.map((s) => s.name))
              .filter((value, index, self) => self.indexOf(value) === index)
              .map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.02 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="skill-chip cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
