import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Award, Star, Medal, Sparkles } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Runner-up',
    event: 'MindQuisitive Hackathon',
    description: 'Secured 2nd place competing against talented teams, demonstrating strong problem-solving and innovative thinking under time pressure.',
    highlight: '2nd Place',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Medal,
    title: 'Selected Participant',
    event: 'Smart India Hackathon',
    description: 'Selected at college level for the prestigious national hackathon, showcasing technical skills and project presentation abilities.',
    highlight: 'College Level',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Star,
    title: 'Recognition Award',
    event: 'Feedback-Driven Excellence',
    description: 'Recognized for consistently incorporating feedback to improve project quality and delivering exceptional results in team environments.',
    highlight: 'Excellence',
    color: 'from-purple-500 to-pink-500',
  },
];

const certifications = [
  {
    title: 'Deloitte Virtual Internship',
    subtitle: 'Data Analytics Program',
    issuer: 'Deloitte',
    year: '2025',
    description: 'Completed comprehensive data analytics training covering real-world business scenarios and analytical methodologies.',
  },
  {
    title: 'IBM Data Fundamentals Badge',
    subtitle: 'Data Science Foundation',
    issuer: 'IBM',
    year: '2025',
    description: 'Earned certification demonstrating proficiency in core data science concepts and foundational skills.',
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="achievements" className="py-40 lg:py-56 relative" ref={ref}>
      <div className="section-container max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition and credentials that validate my skills and dedication to continuous learning
          </p>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8 mb-24"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="glass-card-hover p-8 relative overflow-hidden group"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />
              
              {/* Highlight Badge */}
              <div className="absolute top-6 right-6">
                <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${achievement.color} text-white`}>
                  {achievement.highlight}
                </span>
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-2">{achievement.title}</h3>
                <p className="text-primary font-medium mb-4">{achievement.event}</p>
                <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4 mb-10"
        >
          <Award className="w-8 h-8 text-primary" />
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Certifications</h3>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="glass-card p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              {/* Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-primary" />
              
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary">{cert.issuer}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-muted-foreground mb-4">{cert.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                </div>
                
                <div className="flex-shrink-0">
                  <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold">
                    {cert.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-8 inline-flex items-center gap-4">
            <Trophy className="w-6 h-6 text-primary" />
            <p className="text-lg text-muted-foreground">
              Continuously learning and earning new credentials
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
