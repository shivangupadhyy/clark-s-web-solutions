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

      <section className="section-padding" style={{
        background: "linear-gradient(160deg, hsl(215 55% 12%) 0%, hsl(215 50% 18%) 40%, hsl(215 38% 28%) 100%)"
      }}>
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <p className="text-xs font-body font-medium tracking-widest uppercase text-accent mb-3">About Us</p>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Built on Trust, Driven by Expertise</h1>
            <p className="mt-3 text-primary-foreground/70 text-base max-w-lg font-body">
              Over two decades helping businesses in Owensboro get their finances and technology right.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <div className="space-y-4 text-muted-foreground leading-relaxed font-body text-[15px]">
              <p>
                Clark's Secure Web LLC was founded with a simple idea: local businesses deserve the same quality financial management and IT support that large corporations take for granted. For over 25 years, we've been delivering exactly that to businesses across Owensboro, Kentucky.
              </p>
              <p>
                As a certified QuickBooks ProAdvisor, we bring deep expertise in financial software alongside practical experience in bookkeeping, business operations, and technology infrastructure. We're not a faceless firm — we're your neighbors, and we take your success personally.
              </p>
              <p>
                Whether you need help reconciling your books, setting up a new QuickBooks system, upgrading your office network, or just someone reliable to call when the software breaks — we're here.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <SectionHeading title="What We Stand For" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Target, title: "Mission", desc: "Help businesses run more efficiently through expert financial and technology services." },
              { icon: Heart, title: "Values", desc: "Integrity, reliability, and genuine care for every client we work with." },
              { icon: Award, title: "Expertise", desc: "Certified QuickBooks ProAdvisor with deep financial and IT knowledge." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card rounded border border-border p-5"
              >
                <item.icon className="h-5 w-5 text-accent mb-3" strokeWidth={1.75} />
                <h3 className="font-heading text-sm font-bold mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{
        background: "linear-gradient(160deg, hsl(215 55% 12%) 0%, hsl(215 50% 18%) 40%, hsl(215 38% 28%) 100%)"
      }}>
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-2xl font-bold mb-3 text-primary-foreground">Let's Work Together</h2>
          <p className="text-primary-foreground/70 mb-6 max-w-md mx-auto font-body text-sm">
            Tell us about your business and we'll figure out how we can help.
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
