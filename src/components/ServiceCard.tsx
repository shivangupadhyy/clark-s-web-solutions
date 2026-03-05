import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

const ServiceCard = ({ icon: Icon, title, description, href = "/services" }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={href}
        className="group block h-full rounded-lg border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-accent/30"
      >
        <div className="mb-4 inline-flex items-center justify-center rounded-md bg-accent/10 p-3">
          <Icon className="h-6 w-6 text-accent" />
        </div>
        <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        <span className="mt-4 inline-block text-sm font-medium text-accent group-hover:underline">
          Learn more →
        </span>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
