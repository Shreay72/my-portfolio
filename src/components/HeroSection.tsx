import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Github, Mail, TrendingUp, BarChart3, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MagneticButton from './MagneticButton';
import { useRef } from 'react';

const stats = [
  { icon: TrendingUp, value: '3+', label: 'Projects', delay: 0 },
  { icon: BarChart3, value: '10K+', label: 'Transactions Analyzed', delay: 0.1 },
  { icon: PieChart, value: '50+', label: 'Visualizations Built', delay: 0.2 },
];

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 lg:py-40">
      {/* Parallax Background Blobs */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
        <div className="animated-blob w-[500px] h-[500px] bg-primary/20 top-10 -left-64" />
        <div className="animated-blob w-[400px] h-[400px] bg-accent/15 bottom-10 -right-48" style={{ animationDelay: '5s' }} />
        <div className="animated-blob w-[300px] h-[300px] bg-primary/10 top-1/2 left-1/2 -translate-x-1/2" style={{ animationDelay: '10s' }} />
      </motion.div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background pointer-events-none z-10" />

      <div className="section-container relative z-20">
        <motion.div style={{ opacity }} className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Profile Avatar with Animated Ring */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="mb-10 relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-primary animate-spin-slow opacity-50" style={{ animationDuration: '8s' }} />
            <div className="w-36 h-36 rounded-full bg-gradient-primary p-[3px] relative">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <span className="text-5xl font-bold gradient-text">SP</span>
              </div>
            </div>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for Opportunities
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
          >
            <span className="text-foreground">Data Science Enthusiast</span>
            <br />
            <span className="gradient-text">Python Developer</span>
            <br />
            <span className="text-muted-foreground/80 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
              ML & Analytics
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            I build ML-driven solutions, analytics dashboards, and data pipelines 
            that turn raw data into real business insights.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            <MagneticButton>
              <Button variant="hero" size="lg" className="glow-effect group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://github.com/Shreay72" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="ghost" size="lg" className="text-foreground hover:text-primary" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + stat.delay, type: "spring" }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="glass-card-hover p-6 text-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 relative z-10" />
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1 relative z-10">{stat.value}</div>
                <div className="text-sm text-muted-foreground relative z-10">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div 
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-primary" 
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
