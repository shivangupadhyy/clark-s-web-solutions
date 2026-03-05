import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Calculator, Briefcase, Monitor, Wifi, Settings, Award, ShieldCheck, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { icon: BookOpen, title: "Bookkeeping & Financial Management", description: "Accurate financial record keeping and reporting to keep your business on track." },
  { icon: Calculator, title: "QuickBooks Consulting", description: "Setup, troubleshooting, and optimization from a certified QuickBooks ProAdvisor." },
  { icon: Briefcase, title: "Business Management", description: "Improving business financial processes and streamlining operations." },
  { icon: Monitor, title: "IT Support Services", description: "Reliable business technology support and system optimization." },
  { icon: Wifi, title: "Network Upgrades", description: "Improving network speed, security, and reliability for your business." },
  { icon: Settings, title: "Software Support", description: "Business software troubleshooting and ongoing support." },
];

const whyUs = [
  { icon: Clock, title: "25+ Years Experience", description: "Decades of proven expertise in financial and IT services." },
  { icon: Award, title: "Certified QuickBooks ProAdvisor", description: "Expert-level QuickBooks setup, training, and support." },
  { icon: ShieldCheck, title: "Reliable IT Solutions", description: "Dependable technology infrastructure for your business." },
  { icon: Users, title: "Client-Focused Service", description: "Personalized attention to every client's unique needs." },
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

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading title="Our Services" subtitle="Comprehensive financial management and IT solutions tailored to your business needs." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <SectionHeading title="Why Choose Us" subtitle="Trusted expertise that drives results for your business." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-accent/10 p-4">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Let Us Simplify Your Business Finances and Technology
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Partner with Clark's Secure Web LLC for reliable financial management and IT support that helps your business thrive.
            </p>
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
