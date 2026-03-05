import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Calculator, Briefcase, Monitor, Wifi, Settings, Award, ShieldCheck, Users, Clock } from "lucide-react";
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
  { icon: Clock, title: "25+ Years", description: "Decades of hands-on experience in finance and IT." },
  { icon: Award, title: "QuickBooks ProAdvisor", description: "Certified expertise in QuickBooks setup and support." },
  { icon: ShieldCheck, title: "Reliable IT", description: "Dependable technology solutions you can count on." },
  { icon: Users, title: "Client-First", description: "Personalized service tailored to your business." },
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <SectionHeading title="Why Businesses Trust Us" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-5 rounded border border-border bg-card"
              >
                <item.icon className="h-5 w-5 text-accent mb-3" strokeWidth={1.75} />
                <h3 className="font-heading text-sm font-bold mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{
        background: "linear-gradient(160deg, hsl(215 55% 12%) 0%, hsl(215 50% 18%) 40%, hsl(215 38% 28%) 100%)"
      }}>
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-primary-foreground">
              Ready to simplify your finances and technology?
            </h2>
            <p className="text-primary-foreground/70 text-base mb-7 max-w-lg mx-auto font-body">
              Let's talk about what your business needs. No pressure, no jargon.
            </p>
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
