import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star, Users, Award, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroPharma from "@/assets/hero-pharma.jpg";
import productHero from "@/assets/product-hero.jpg";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Products" },
  { value: "50+", label: "Countries" },
  { value: "100M+", label: "Lives Touched" },
];

const features = [
  { icon: Award, title: "WHO-GMP Certified", description: "International quality standards" },
  { icon: Pill, title: "500+ Formulations", description: "Comprehensive product range" },
  { icon: Users, title: "Global Reach", description: "Exporting to 50+ countries" },
];

const certifications = [
  "WHO-GMP", "ISO 9001:2015", "FDA Approved", "CE Marked", "ISO 14001"
];

const partners = [
  "Global Health Corp", "MedTech Solutions", "HealthFirst", "PharmaLink", "BioVenture"
];

const reviews = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Pharmacist, City Hospital",
    content: "PharmaCare has been our trusted supplier for over 5 years. Their commitment to quality and timely delivery is exceptional.",
    rating: 5,
  },
  {
    name: "Michael Roberts",
    role: "Procurement Director, Global Health",
    content: "The consistency in product quality and their responsive customer service makes them stand out in the pharmaceutical industry.",
    rating: 5,
  },
  {
    name: "Dr. Priya Sharma",
    role: "Medical Director, HealthPlus",
    content: "Their extensive range of formulations and competitive pricing has made them our primary pharmaceutical partner.",
    rating: 5,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-light rounded-full blur-3xl" />
        
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Leading Pharmaceutical Manufacturer
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Innovation in
                <span className="block text-primary">Healthcare Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Delivering world-class pharmaceutical formulations with unwavering 
                commitment to quality, innovation, and patient well-being.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/products">
                    Explore Products
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border">
                {stats.map((stat, index) => (
                  <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="font-display text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fade-up delay-200">
              <div className="relative rounded-3xl overflow-hidden shadow-large">
                <img
                  src={heroPharma}
                  alt="Pharmaceutical Products"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-large border border-border animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Quality Assured</div>
                    <div className="text-sm text-muted-foreground">WHO-GMP Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                About PharmaCare
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Pioneering Excellence in Pharmaceutical Manufacturing
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over two decades of experience, PharmaCare has established itself as a 
                trusted name in pharmaceutical manufacturing. Our state-of-the-art facilities, 
                combined with rigorous quality control measures, ensure that every product 
                meets the highest international standards.
              </p>
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{feature.title}</div>
                      <div className="text-sm text-muted-foreground">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="default" size="lg" asChild>
                <Link to="/about">
                  Discover Our Story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-2xl bg-gradient-to-br from-primary/10 to-teal-light flex items-center justify-center">
                  <Award className="w-16 h-16 text-primary" />
                </div>
                <div className="h-64 rounded-2xl overflow-hidden">
                  <img src={productHero} alt="Products" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 rounded-2xl bg-gradient-to-br from-teal-light to-secondary flex items-center justify-center">
                  <Pill className="w-16 h-16 text-primary" />
                </div>
                <div className="h-48 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground">
                  <div className="text-center">
                    <div className="font-display text-4xl font-bold">20+</div>
                    <div className="text-sm opacity-80">Years of Trust</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Product */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-teal-medium text-primary-foreground">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
              Featured Products
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Flagship Formulations
            </h2>
            <p className="text-primary-foreground/80">
              Discover our range of innovative pharmaceutical products designed 
              to address diverse healthcare needs across the globe.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {["Tablets & Capsules", "Injectables", "Oral Liquids"].map((category, index) => (
              <div
                key={index}
                className="group bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-primary-foreground/20 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Pill className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{category}</h3>
                <p className="text-primary-foreground/70 mb-6 text-sm">
                  High-quality formulations manufactured under strict GMP guidelines.
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                >
                  View Products <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Badges */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Quality Certifications
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Committed to Excellence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our facilities are certified by leading international regulatory bodies, 
              ensuring the highest standards of quality and safety.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card px-8 py-6 rounded-2xl flex items-center gap-4 hover-lift"
              >
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-success" />
                </div>
                <span className="font-medium text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-secondary/50">
        <div className="container-wide">
          <div className="text-center mb-10">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Trusted by Industry Leaders
            </h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-xl font-display font-semibold text-muted-foreground/50 hover:text-primary transition-colors cursor-pointer"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Partners Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 border border-border hover-lift"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{review.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-display font-semibold text-primary">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work With Us CTA */}
      <section className="section-padding bg-gradient-to-r from-navy via-foreground to-navy text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join our global network of healthcare partners and experience the 
            PharmaCare difference in quality, reliability, and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="accent" size="xl" asChild>
              <Link to="/work-with-us">
                Start Partnership
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
