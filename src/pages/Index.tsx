import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Calculator, Briefcase, Monitor, Wifi, Settings, Award, ShieldCheck, Users, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { icon: BookOpen, title: "Bookkeeping", description: "Accurate record keeping and financial reporting for small businesses." },
  { icon: Calculator, title: "QuickBooks Consulting", description: "Setup, optimization, and ongoing support from a certified ProAdvisor." },
  { icon: Briefcase, title: "Business Management", description: "Improve financial processes and streamline day-to-day operations." },
  { icon: Monitor, title: "IT Support", description: "Responsive technology support to keep your business running." },
  { icon: Wifi, title: "Network Upgrades", description: "Faster, more secure network infrastructure for your office." },
  { icon: Settings, title: "Software Support", description: "Installation, troubleshooting, and maintenance for business software." },
];

const whyUs = [
  { icon: Clock, title: "25+ Years", description: "Decades of hands-on experience in finance and IT.", stat: "25+" },
  { icon: Award, title: "QuickBooks ProAdvisor", description: "Certified expertise in QuickBooks setup and support.", stat: "✓" },
  { icon: ShieldCheck, title: "Reliable IT", description: "Dependable technology solutions you can count on.", stat: "100%" },
  { icon: Users, title: "Client-First", description: "Personalized service tailored to your business.", stat: "★" },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Clark's Secure Web LLC | Bookkeeping & IT Services Owensboro KY</title>
        <meta name="description" content="Clark's Secure Web LLC provides professional bookkeeping, QuickBooks consulting, and IT services in Owensboro, Kentucky. 25+ years of experience." />
        <meta property="og:title" content="Clark's Secure Web LLC | Professional Bookkeeping & IT Solutions" />
        <meta property="og:description" content="Streamline your financial operations and technology infrastructure with over 25 years of experience." />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroSection />

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading title="What We Do" subtitle="Financial management and IT services for businesses that need to run smoothly." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <SectionHeading title="Why Businesses Trust Us" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-6 rounded-xl border border-border bg-card card-hover overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <span className="block font-heading text-3xl font-bold text-accent mb-3">{item.stat}</span>
                  <h3 className="font-heading text-sm font-bold mb-1.5">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 gradient-navy" />
        <div className="absolute top-10 left-[20%] w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-[15%] w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-float-delayed" />
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-0.5 bg-accent mb-8 mx-auto"
            />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              Ready to simplify your finances and technology?
            </h2>
            <p className="text-primary-foreground/60 text-lg mb-10 max-w-lg mx-auto font-body">
              Let's talk about what your business needs. No pressure, no jargon.
            </p>
            <Button asChild size="lg" variant="hero" className="group text-base px-8">
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
