import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import MagneticButton from './MagneticButton';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shreay72@gmail.com',
    href: 'mailto:shreay72@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-9607679170',
    href: 'tel:+919607679170',
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Shreay72',
    username: '@Shreay72',
    color: 'group-hover:text-foreground',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/shreay-patil-18317b2a3',
    username: 'Shreay Patil',
    color: 'group-hover:text-[#0A66C2]',
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
      toast({
        title: 'Copied!',
        description: `${text} has been copied to your clipboard.`,
      });
    } catch (err) {
      toast({
        title: 'Failed to copy',
        description: 'Please copy manually.',
        variant: 'destructive',
      });
    }
  };

  return (
    <section id="contact" className="py-32 lg:py-40 relative" ref={ref}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animated-blob w-[400px] h-[400px] bg-primary/10 top-0 right-1/4" style={{ animationDelay: '3s' }} />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about data science.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6 mb-10"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass-card-hover p-6 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <a 
                        href={info.href}
                        className="text-foreground font-medium group-hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleCopy(
                      info.label === 'Email' ? 'shreay72@gmail.com' : '+919607679170',
                      info.label === 'Email' ? 'email' : 'phone'
                    )}
                    className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    {(info.label === 'Email' ? copiedEmail : copiedPhone) ? (
                      <Check className="w-5 h-5 text-primary" />
                    ) : (
                      <Copy className="w-5 h-5 text-muted-foreground" />
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Copy Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-14"
          >
            <MagneticButton>
              <Button
                variant="heroOutline"
                size="lg"
                onClick={() => handleCopy('shreay72@gmail.com', 'email')}
                className="glow-effect"
              >
                {copiedEmail ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    Copied Email!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-5 w-5" />
                    Copy Email
                  </>
                )}
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                variant="heroOutline"
                size="lg"
                onClick={() => handleCopy('+919607679170', 'phone')}
              >
                {copiedPhone ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    Copied Phone!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-5 w-5" />
                    Copy Phone
                  </>
                )}
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card p-10"
          >
            <h3 className="text-lg font-semibold text-center mb-8 text-foreground">Connect With Me</h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-3 p-5 rounded-2xl hover:bg-muted/50 transition-all duration-300 group min-w-[120px]"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-shadow">
                    <social.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-center">
                    <span className="text-sm font-medium text-foreground block">{social.label}</span>
                    <span className="text-xs text-muted-foreground">{social.username}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
