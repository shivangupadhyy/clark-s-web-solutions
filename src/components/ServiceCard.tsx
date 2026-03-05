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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
    >
      <Link
        to={href}
        className="group block h-full rounded border border-border bg-card p-5 transition-all duration-200 hover:shadow-md hover:border-accent/40"
      >
        <Icon className="h-5 w-5 text-accent mb-3" strokeWidth={1.75} />
        <h3 className="font-heading text-base font-bold text-card-foreground mb-1.5">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed font-body">{description}</p>
        <span className="mt-3 inline-block text-xs font-medium font-body text-accent group-hover:underline tracking-wide uppercase">
          Learn more →
        </span>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
