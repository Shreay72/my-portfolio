import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>by</span>
            <span className="gradient-text font-medium">Shreay Patil</span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;