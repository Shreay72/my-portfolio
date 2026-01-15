import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const internship = {
  title: 'Data Science Intern',
  company: 'Developers Arena',
  location: 'Remote',
  type: 'Self-Placed',
  period: '2025 – Present',
  description: 'Contributing to real-world data science projects, applying machine learning techniques, and delivering actionable insights through independent remote work.',
  responsibilities: [
    'Performing comprehensive data cleaning, preprocessing, and exploratory data analysis on diverse datasets',
    'Building and evaluating machine learning models for classification and prediction tasks',
    'Creating data visualizations and reports to communicate findings effectively',
    'Collaborating remotely with team members and delivering projects independently',
  ],
  skills: ['Python', 'Pandas', 'Scikit-learn', 'Data Analysis', 'Machine Learning'],
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-40 lg:py-56 relative" ref={ref}>
      <div className="section-container max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building real-world experience through hands-on projects and professional internships
          </p>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden sm:block" />
          
          <div className="glass-card p-8 sm:p-12 relative overflow-hidden ml-0 sm:ml-16">
            {/* Gradient Accent */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-primary" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
            
            {/* Timeline Dot */}
            <div className="absolute -left-[4.5rem] top-12 w-5 h-5 rounded-full bg-primary border-4 border-background hidden sm:block" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                      {internship.title}
                    </h3>
                    <p className="text-xl text-primary font-medium">{internship.company}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{internship.period}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{internship.location} • {internship.type}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                {internship.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-10">
                <h4 className="text-lg font-semibold text-foreground mb-5">Key Responsibilities</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {internship.responsibilities.map((resp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{resp}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills Used */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {internship.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Looking for Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 sm:p-10 inline-block">
            <p className="text-lg text-muted-foreground">
              🚀 Open to <span className="text-primary font-semibold">Data Science</span> & <span className="text-primary font-semibold">ML Engineering</span> opportunities
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
