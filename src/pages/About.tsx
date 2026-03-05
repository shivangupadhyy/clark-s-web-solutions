import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Target, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Clark's Secure Web LLC</title>
        <meta name="description" content="Learn about Clark's Secure Web LLC — 25+ years of bookkeeping, QuickBooks consulting, and IT services in Owensboro, Kentucky." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">About Us</h1>
            <p className="mt-4 text-primary-foreground/80 text-lg max-w-2xl">
              Trusted financial management and IT services built on decades of experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="font-heading text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                For over 25 years, Clark's Secure Web LLC has been a trusted partner for businesses in Owensboro, Kentucky and the surrounding region. Founded with a commitment to helping small and mid-sized businesses manage their finances and technology, we've grown into a full-service financial management and IT solutions provider.
              </p>
              <p>
                Our expertise spans bookkeeping, QuickBooks consulting as a certified ProAdvisor, business management, IT support, network upgrades, and software solutions. We understand that every business is unique, and we tailor our services to meet your specific needs.
              </p>
              <p>
                At Clark's Secure Web LLC, we believe that efficient financial operations and reliable technology infrastructure are the foundation of a successful business. Our mission is to help you focus on what you do best — running your business — while we take care of the rest.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <SectionHeading title="What Drives Us" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Target, title: "Our Mission", desc: "To help businesses operate more efficiently through expert financial management and technology solutions." },
              { icon: Heart, title: "Our Values", desc: "Integrity, reliability, and personalized service guide every client relationship we build." },
              { icon: Award, title: "Our Expertise", desc: "Certified QuickBooks ProAdvisor with deep knowledge of financial systems and IT infrastructure." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-lg p-6 border border-border text-center"
              >
                <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-accent/10 p-4">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Let us help your business operate more efficiently with our proven expertise.
          </p>
          <Button asChild size="lg" variant="hero">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
