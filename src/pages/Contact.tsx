import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Store submission locally or send to an API endpoint
      console.log("Form submission:", data);
      toast.success("Thank you! We'll be in touch shortly.");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Submission error:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Clark's Secure Web LLC</title>
        <meta name="description" content="Contact Clark's Secure Web LLC for bookkeeping, QuickBooks consulting, and IT services in Owensboro, KY. Get a free consultation." />
      </Helmet>

      <section className="relative section-padding min-h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-navy" />
        <div className="absolute top-20 right-[25%] w-72 h-72 rounded-full bg-accent/8 blur-3xl animate-float" />
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-6"
            >
              <span className="text-xs font-body font-medium text-accent tracking-wide">Get In Touch</span>
            </motion.div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Let's Start a <span className="text-gradient">Conversation</span>
            </h1>
            <p className="mt-5 text-primary-foreground/60 text-lg max-w-lg font-body">
              Ready to streamline your business? Get in touch for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground font-body text-sm mb-8">Fill out the form and we'll get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                  <Input id="name" {...register("name")} className="mt-1.5 h-12 rounded-lg" placeholder="Your full name" />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                  <Input id="email" type="email" {...register("email")} className="mt-1.5 h-12 rounded-lg" placeholder="your@email.com" />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
                  <Input id="phone" type="tel" {...register("phone")} className="mt-1.5 h-12 rounded-lg" placeholder="(270) 555-0100" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                  <Textarea id="message" {...register("message")} className="mt-1.5 min-h-[140px] rounded-lg" placeholder="How can we help your business?" />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
                </div>
                <Button type="submit" size="lg" className="w-full h-12 rounded-lg group" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-2xl font-bold mb-2">Get in Touch</h2>
                <p className="text-muted-foreground font-body text-sm mb-8">We'd love to hear from you. Here's how you can reach us.</p>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, label: "Location", value: "Owensboro, Kentucky" },
                    { icon: Mail, label: "Email", value: "info@clarkssecureweb.com" },
                    { icon: Phone, label: "Phone", value: "(270) 555-0100" },
                    { icon: Clock, label: "Hours", value: "Mon – Fri: 8:00 AM – 5:00 PM" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                        <item.icon className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold font-body">{item.label}</p>
                        <p className="text-sm text-muted-foreground font-body">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                <iframe
                  title="Clark's Secure Web LLC Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50260.07981651!2d-87.13474!3d37.7719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8869c5b5a0e0e0e1%3A0x2b0b0b0b0b0b0b0b!2sOwensboro%2C%20KY!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
