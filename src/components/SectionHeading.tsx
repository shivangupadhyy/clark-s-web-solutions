import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`mb-10 ${centered ? "text-center" : ""}`}
    >
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground text-base max-w-xl mx-auto font-body">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
