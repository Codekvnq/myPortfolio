import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, CheckCircle2, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState<{
    show: boolean;
    success: boolean;
  }>({ show: false, success: true });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        "service_w9t2hnf",
        "template_0eqio2n", 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "yx0k9fr2X0b2gy9_y"
      );

      if (result.text === "OK") {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setModal({ show: true, success: true });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Oops! Something went wrong. Please try again later.",
      });
      setModal({ show: true, success: false });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "evansonkay412@gmail.com",
      href: "mailto:evansonkay412@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+233 59 137 1856",
      href: "tel:+233-59-137-1856",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kumasi",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Have a project in mind? Let's work together.
          </motion.p>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 bg-gradient-card border-border hover:shadow-glow transition-all duration-300 text-center h-full">
                  <a
                    href={info.href}
                    className="flex flex-col items-center space-y-3 group"
                  >
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {info.title}
                      </p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6 sm:p-8 bg-gradient-card border-border shadow-glow">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                         name="name" 
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email" 
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-secondary border-border"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message" 
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={6}
                    className="bg-secondary border-border resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full shadow-glow"
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* ✅ Animated Modal Popup */}
      <AnimatePresence>
        {modal.show && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal({ ...modal, show: false })}
          >
            <motion.div
              className="bg-background rounded-2xl shadow-xl p-8 max-w-sm w-full text-center relative"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {modal.success ? (
                <>
                  <div className="flex justify-center mb-4">
                    <CheckCircle2 className="h-12 w-12 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. I’ll get back to you shortly.
                  </p>
                </>
              ) : (
                <>
                  <div className="flex justify-center mb-4">
                    <XCircle className="h-12 w-12 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Something Went Wrong
                  </h3>
                  <p className="text-muted-foreground">
                    Please try again later or contact me via email directly.
                  </p>
                </>
              )}
              <Button
                onClick={() => setModal({ ...modal, show: false })}
                className="mt-6 w-full"
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
