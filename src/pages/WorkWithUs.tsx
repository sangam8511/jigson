import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Building2, 
  Stethoscope, 
  Truck, 
  Globe, 
  CheckCircle2,
  Award,
  Clock,
  Shield,
  Package,
  Users,
  Send,
  Store,
  Hospital
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const whoWeWorkWith = [
  {
    icon: Truck,
    title: "Distributors & Stockists",
    description: "Strategic distribution partnerships for efficient market coverage.",
  },
  {
    icon: Hospital,
    title: "Hospitals & Clinics",
    description: "Direct supply partnerships with healthcare institutions.",
  },
  {
    icon: Stethoscope,
    title: "Paediatricians",
    description: "Trusted by child healthcare specialists across the region.",
  },
  {
    icon: Store,
    title: "Retail Pharmacy Chains",
    description: "Reliable supply for pharmacy networks nationwide.",
  },
  {
    icon: Building2,
    title: "Healthcare Institutions",
    description: "Partnering with established healthcare organizations.",
  },
  {
    icon: Globe,
    title: "Export Partners & International Buyers",
    description: "Global partnerships for international market expansion.",
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Consistent Product Quality",
    description: "Every batch meets our strict quality standards.",
  },
  {
    icon: Stethoscope,
    title: "Strong Paediatric Expertise",
    description: "Specialised formulations since 2016.",
  },
  {
    icon: Shield,
    title: "FDA, WHO-GMP & EU-GMP Approved",
    description: "Meeting highest international standards.",
  },
  {
    icon: Package,
    title: "Transparent Documentation",
    description: "Clear paperwork and full compliance support.",
  },
  {
    icon: Clock,
    title: "Stable Formulations",
    description: "High shelf-life products you can depend on.",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    description: "Smooth operations and reliable supply chain.",
  },
];

const partnershipBenefits = [
  "A trusted paediatric range",
  "Competitive margins & long-term support",
  "Easy onboarding and clear communication",
  "Marketing materials (if needed)",
  "Reliable supply and batch consistency",
  "A team committed to your growth",
];

const WorkWithUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Inquiry Submitted!",
      description: "Our partnership team will contact you within 24 hours.",
    });
    
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      businessType: "",
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
              Partnership Opportunities
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100">
              Grow Your Business With Us
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
              Partner with Jigson Pharma and access a reliable paediatric product range backed by science, 
              strong compliance, and consistent quality. We help you scale with safe, high-standard 
              formulations trusted across markets.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Partners
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who We Work With
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoWeWorkWith.map((partner, index) => (
              <div
                key={index}
                className="group bg-background rounded-2xl p-8 border border-border hover:border-primary/30 hover-lift text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                  <partner.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {partner.title}
                </h3>
                <p className="text-sm text-muted-foreground">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partners Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Advantages
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Partners Choose Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-card rounded-xl border border-border hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits + Inquiry Form */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Partnership Benefits
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                What You Get as Our Partner
              </h2>
              <p className="text-muted-foreground mb-8">
                When you partner with Jigson Pharmaceuticals, you gain access to a comprehensive 
                support ecosystem designed to help your business thrive.
              </p>
              <ul className="space-y-4">
                {partnershipBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inquiry Form */}
            <div className="bg-background rounded-3xl p-8 border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Start Your Partnership
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Name *
                    </label>
                    <Input
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Your company name"
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Contact Person *
                    </label>
                    <Input
                      required
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      placeholder="Your name"
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@company.com"
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Business Type *
                  </label>
                  <select
                    required
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full h-12 rounded-xl border border-input bg-background px-4 text-foreground"
                  >
                    <option value="">Select your business type</option>
                    <option value="distributor">Distributor / Stockist</option>
                    <option value="hospital">Hospital / Clinic</option>
                    <option value="paediatrician">Paediatrician</option>
                    <option value="pharmacy">Retail Pharmacy Chain</option>
                    <option value="institution">Healthcare Institution</option>
                    <option value="export">Export Partner / International Buyer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="rounded-xl"
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WorkWithUs;