import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  index?: number;
}

const ServiceCard = ({ icon: Icon, title, description, href = "/services", index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={href}
        className="group relative block h-full rounded-xl border border-border bg-card p-6 card-hover overflow-hidden"
      >
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors duration-300">
            <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
          </div>
          <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed font-body">{description}</p>
          <div className="mt-4 flex items-center gap-1 text-xs font-medium font-body text-accent tracking-wide uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            Learn more
            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
