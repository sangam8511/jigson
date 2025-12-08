import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Linkedin,
  Twitter,
  Facebook
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Head Office",
    details: ["123 Pharma Street", "Industrial Area, Andheri East", "Mumbai, Maharashtra 400093"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 22 1234 5678", "+91 22 8765 4321"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@pharmacare.com", "sales@pharmacare.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
  },
];

const departments = [
  { name: "General Inquiries", email: "info@pharmacare.com" },
  { name: "Sales & Orders", email: "sales@pharmacare.com" },
  { name: "Partnership", email: "partners@pharmacare.com" },
  { name: "Quality Assurance", email: "quality@pharmacare.com" },
  { name: "Export Division", email: "export@pharmacare.com" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24-48 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100">
              Get in Touch With Our Team
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
              Have questions about our products or services? We're here to help. 
              Reach out to us and our team will respond promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-card">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 border border-border hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Send a Message
              </span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                We'd Love to Hear From You
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we help?"
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className="rounded-xl"
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Departments & Map */}
            <div className="space-y-8">
              {/* Departments */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Department Contacts
                  </h3>
                </div>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-border last:border-0"
                    >
                      <span className="text-foreground">{dept.name}</span>
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {dept.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-secondary to-muted rounded-2xl h-64 flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-3" />
                  <p className="text-muted-foreground">
                    Interactive map integration available
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, label: "LinkedIn" },
                    { icon: Twitter, label: "Twitter" },
                    { icon: Facebook, label: "Facebook" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
