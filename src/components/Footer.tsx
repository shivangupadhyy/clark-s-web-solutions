import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-navy" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-heading text-xl font-bold text-primary-foreground">Clark's Secure Web LLC</span>
            <p className="text-primary-foreground/50 text-sm leading-relaxed mt-4">
              Professional bookkeeping, QuickBooks consulting, and IT services for businesses in Owensboro, KY and beyond.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading text-sm font-bold mb-5 text-primary-foreground uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="group flex items-center gap-1 text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                >
                  {link.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading text-sm font-bold mb-5 text-primary-foreground uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-4 text-sm text-primary-foreground/50">
              {[
                { icon: MapPin, text: "Owensboro, KY" },
                { icon: Mail, text: "clarkssecureweb@gmail.com" },
                { icon: Phone, text: "1-800-439-2134" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <item.icon className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/30">
          <span>© {new Date().getFullYear()} Clark's Secure Web LLC. All rights reserved.</span>
          <span>Owensboro, Kentucky</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
