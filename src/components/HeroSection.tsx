import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "linear-gradient(160deg, hsl(215 55% 12%) 0%, hsl(215 50% 18%) 40%, hsl(215 38% 28%) 100%)"
      }} />

      <div className="container mx-auto px-4 lg:px-8 py-24 md:py-36 relative z-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-body font-medium tracking-widest uppercase text-accent mb-6"
          >
            25+ Years of Trusted Service
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary-foreground leading-snug"
          >
            Bookkeeping & IT Solutions Built for Your Business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-base md:text-lg text-primary-foreground/75 leading-relaxed max-w-lg font-body"
          >
            We help businesses in Owensboro, KY streamline finances and strengthen their technology — so you can focus on growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Get a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="heroOutline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Subtle decorative element */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.04]" style={{
        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)",
        color: "white"
      }} />
    </section>
  );
};

export default HeroSection;
