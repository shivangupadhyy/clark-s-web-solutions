import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 25% 50%, hsl(210 100% 52% / 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 50%, hsl(210 100% 52% / 0.2) 0%, transparent 50%)"
      }} />

      <div className="container mx-auto px-4 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight"
          >
            Professional Bookkeeping & IT Solutions for Businesses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl"
          >
            Clark's Secure Web LLC helps businesses streamline financial operations and technology infrastructure with over 25 years of experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Get Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="heroOutline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
