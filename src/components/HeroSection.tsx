import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-navy" />
      
      {/* Animated orbs */}
      <div className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-[10%] w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 right-[30%] w-48 h-48 rounded-full bg-gold/5 blur-2xl animate-glow" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-body font-medium text-accent tracking-wide">25+ Years of Trusted Service</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.15]"
          >
            Bookkeeping & IT Solutions{" "}
            <span className="text-gradient">Built for Your Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-lg font-body"
          >
            We help businesses in Owensboro, KY streamline finances and strengthen their technology — so you can focus on growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" variant="hero" className="group text-base px-8">
              <Link to="/contact">
                Get a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="heroOutline" className="text-base px-8">
              <Link to="/services">Our Services</Link>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-14 flex flex-wrap items-center gap-6 text-primary-foreground/40 text-xs font-body font-medium tracking-wide uppercase"
          >
            <span className="flex items-center gap-2">
              <span className="h-px w-6 bg-accent/40" />
              QuickBooks Certified
            </span>
            <span className="flex items-center gap-2">
              <span className="h-px w-6 bg-accent/40" />
              Owensboro, KY
            </span>
            <span className="flex items-center gap-2">
              <span className="h-px w-6 bg-accent/40" />
              Trusted Since 1999
            </span>
          </motion.div>
        </div>
      </div>

      {/* Decorative diagonal lines */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-[0.03]" style={{
        backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 60px, white 60px, white 61px)"
      }} />
    </section>
  );
};

export default HeroSection;
