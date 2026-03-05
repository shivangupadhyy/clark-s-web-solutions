import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Calculator, Briefcase, Monitor, Wifi, Settings, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceDetailProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceDetail = ({ icon: Icon, title, description, features }: ServiceDetailProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="border-b border-border pb-10 last:border-0 last:pb-0"
  >
    <div className="flex items-start gap-4">
      <Icon className="h-5 w-5 text-accent mt-1 flex-shrink-0" strokeWidth={1.75} />
      <div>
        <h3 className="font-heading text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground font-body text-sm leading-relaxed mb-3">{description}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground font-body">
              <CheckCircle2 className="h-3.5 w-3.5 text-accent flex-shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
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

      <section className="section-padding" style={{
        background: "linear-gradient(160deg, hsl(215 55% 12%) 0%, hsl(215 50% 18%) 40%, hsl(215 38% 28%) 100%)"
      }}>
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <p className="text-xs font-body font-medium tracking-widest uppercase text-accent mb-3">Services</p>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">How We Help Your Business</h1>
            <p className="mt-3 text-primary-foreground/70 text-base max-w-lg font-body">
              From balancing the books to fixing the network — we handle the stuff that slows you down.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl space-y-10">
          {servicesData.map((service) => (
            <ServiceDetail key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="section-padding" style={{
        background: "linear-gradient(160deg, hsl(215 55% 12%) 0%, hsl(215 50% 18%) 40%, hsl(215 38% 28%) 100%)"
      }}>
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-2xl font-bold mb-3 text-primary-foreground">Need something specific?</h2>
          <p className="text-primary-foreground/70 mb-6 max-w-md mx-auto font-body text-sm">
            Every business is different. Let's discuss what yours actually needs.
          </p>
          <Button asChild size="lg" variant="hero">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Services;
