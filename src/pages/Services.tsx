import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Calculator, Briefcase, Monitor, Wifi, Settings, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceDetailProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const ServiceDetail = ({ icon: Icon, title, description, features, index }: ServiceDetailProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="group relative rounded-xl border border-border bg-card p-8 card-hover overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative z-10">
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
          <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
        </div>
        <div className="flex-1">
          <h3 className="font-heading text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{description}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
);

const servicesData = [
  {
    icon: BookOpen,
    title: "Bookkeeping & Financial Management",
    description: "Clean, accurate books so you always know where your business stands financially.",
    features: ["Accounts payable & receivable", "Financial statements", "Bank reconciliation", "Monthly & quarterly reporting"],
  },
  {
    icon: Calculator,
    title: "QuickBooks Consulting",
    description: "As a certified ProAdvisor, we handle everything from initial setup to advanced customization.",
    features: ["Setup & configuration", "Data migration & cleanup", "Custom reporting", "Troubleshooting & optimization"],
  },
  {
    icon: Briefcase,
    title: "Business Management",
    description: "Practical improvements to how your business handles money and operations.",
    features: ["Process improvement", "Workflow optimization", "Budget & forecast support", "Efficiency consulting"],
  },
  {
    icon: Monitor,
    title: "IT Support",
    description: "Reliable tech support that keeps your business running without interruption.",
    features: ["Hardware & software troubleshooting", "System maintenance", "Technology consulting", "Remote & on-site support"],
  },
  {
    icon: Wifi,
    title: "Network Upgrades",
    description: "Better connectivity, stronger security, faster performance for your office network.",
    features: ["Network assessment", "Speed improvements", "Security hardening", "Wi-Fi optimization"],
  },
  {
    icon: Settings,
    title: "Software Support",
    description: "Help with the business software you rely on every day.",
    features: ["Installation & setup", "Integration support", "User training", "Ongoing maintenance"],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Clark's Secure Web LLC</title>
        <meta name="description" content="Bookkeeping, QuickBooks consulting, business management, IT support, network upgrades, and software support in Owensboro KY." />
      </Helmet>

      <section className="relative section-padding min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-navy" />
        <div className="absolute bottom-10 right-[15%] w-80 h-80 rounded-full bg-accent/8 blur-3xl animate-float" />
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-6"
            >
              <span className="text-xs font-body font-medium text-accent tracking-wide">Our Services</span>
            </motion.div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              How We Help<br />Your <span className="text-gradient">Business</span>
            </h1>
            <p className="mt-5 text-primary-foreground/60 text-lg max-w-lg font-body">
              From balancing the books to fixing the network — we handle the stuff that slows you down.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl space-y-6">
          {servicesData.map((service, i) => (
            <ServiceDetail key={service.title} {...service} index={i} />
          ))}
        </div>
      </section>

      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 gradient-navy" />
        <div className="absolute top-10 left-[20%] w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float" />
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">Need something specific?</h2>
            <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto font-body text-base">
              Every business is different. Let's discuss what yours actually needs.
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

export default Services;
