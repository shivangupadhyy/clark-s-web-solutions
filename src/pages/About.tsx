import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Target, Heart, Award, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Clark's Secure Web LLC</title>
        <meta name="description" content="Learn about Clark's Secure Web LLC — 25+ years of bookkeeping, QuickBooks consulting, and IT services in Owensboro, Kentucky." />
      </Helmet>

      <section className="relative section-padding min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-navy" />
        <div className="absolute top-20 right-[20%] w-72 h-72 rounded-full bg-accent/8 blur-3xl animate-float" />
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-6"
            >
              <span className="text-xs font-body font-medium text-accent tracking-wide">About Us</span>
            </motion.div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Built on Trust,<br />Driven by <span className="text-gradient">Expertise</span>
            </h1>
            <p className="mt-5 text-primary-foreground/60 text-lg max-w-lg font-body">
              Over two decades helping businesses in Owensboro get their finances and technology right.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="space-y-5 text-muted-foreground leading-relaxed font-body text-base">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Target, title: "Mission", desc: "Help businesses run more efficiently through expert financial and technology services." },
              { icon: Heart, title: "Values", desc: "Integrity, reliability, and genuine care for every client we work with." },
              { icon: Award, title: "Expertise", desc: "Certified QuickBooks ProAdvisor with deep financial and IT knowledge." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-card rounded-xl border border-border p-6 card-hover overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-accent/10 mb-4">
                    <item.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 gradient-navy" />
        <div className="absolute bottom-10 left-[10%] w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-float" />
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">Let's Work Together</h2>
            <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto font-body text-base">
              Tell us about your business and we'll figure out how we can help.
            </p>
            <Button asChild size="lg" variant="hero" className="group text-base px-8">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
