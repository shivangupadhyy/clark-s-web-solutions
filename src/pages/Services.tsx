import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Calculator, Briefcase, Monitor, Wifi, Settings, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { LucideIcon } from "lucide-react";

interface ServiceDetailProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  reversed?: boolean;
}

const ServiceDetail = ({ icon: Icon, title, description, features, reversed }: ServiceDetailProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`flex flex-col md:flex-row gap-8 items-start ${reversed ? "md:flex-row-reverse" : ""}`}
  >
    <div className="flex-shrink-0">
      <div className="inline-flex items-center justify-center rounded-lg bg-accent/10 p-4">
        <Icon className="h-10 w-10 text-accent" />
      </div>
    </div>
    <div>
      <h3 className="font-heading text-2xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const servicesData = [
  {
    icon: BookOpen,
    title: "Bookkeeping & Financial Management",
    description: "Keep your finances accurate and organized with professional bookkeeping services tailored to your business.",
    features: ["Accounts payable & receivable", "Financial statement preparation", "Bank reconciliation", "Monthly & quarterly reporting"],
  },
  {
    icon: Calculator,
    title: "QuickBooks Consulting",
    description: "As a certified QuickBooks ProAdvisor, we provide expert setup, training, and ongoing support.",
    features: ["QuickBooks setup & configuration", "Data migration & cleanup", "Custom report creation", "Ongoing troubleshooting & optimization"],
  },
  {
    icon: Briefcase,
    title: "Business Management",
    description: "Streamline your business operations with improved financial processes and strategic guidance.",
    features: ["Process improvement", "Financial workflow optimization", "Budgeting & forecasting support", "Operational efficiency consulting"],
  },
  {
    icon: Monitor,
    title: "IT Support Services",
    description: "Keep your business technology running smoothly with reliable, responsive IT support.",
    features: ["Hardware & software troubleshooting", "System maintenance & updates", "Technology consulting", "Remote & on-site support"],
  },
  {
    icon: Wifi,
    title: "Network Upgrades",
    description: "Enhance your business connectivity with modern, secure network infrastructure.",
    features: ["Network assessment & planning", "Speed & reliability improvements", "Security hardening", "Wi-Fi optimization"],
  },
  {
    icon: Settings,
    title: "Software Support",
    description: "Get expert help with business software installation, configuration, and troubleshooting.",
    features: ["Software installation & setup", "Integration support", "User training", "Ongoing maintenance & updates"],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Clark's Secure Web LLC — Bookkeeping & IT Services</title>
        <meta name="description" content="Bookkeeping, QuickBooks consulting, business management, IT support, network upgrades, and software support in Owensboro KY." />
      </Helmet>

      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">Our Services</h1>
            <p className="mt-4 text-primary-foreground/80 text-lg max-w-2xl">
              Comprehensive financial management and IT solutions to help your business succeed.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl space-y-16">
          {servicesData.map((service, i) => (
            <ServiceDetail key={service.title} {...service} reversed={i % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Every business is unique. Let's discuss how we can tailor our services to your needs.
          </p>
          <Button asChild size="lg" variant="hero">
            <Link to="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Services;
