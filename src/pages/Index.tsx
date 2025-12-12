import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star, Users, Award, Pill, Clock, ShieldCheck, HeartPulse, Baby, Droplets, Syringe, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroPharma from "@/assets/hero-pharma.jpg";
import productHero from "@/assets/product-hero.jpg";

const stats = [
  { value: "10+", label: "Years Experience", icon: Award },
  { value: "40+", label: "Products", icon: Pill },
  { value: "100+", label: "Lives Touched", icon: HeartPulse },
];

const categories = [
  { name: "Tablets", icon: "💊", count: "Oral Formulations" },
  { name: "Capsules", icon: "💉", count: "Easy to Swallow" },
  { name: "Syrups", icon: "🧴", count: "Liquid Forms" },
  { name: "Drops", icon: "💧", count: "Precise Dosing" },
  { name: "Dry Syrups", icon: "📦", count: "Powder Form" },
];

const certifications = [
  { name: "FDA Approved", description: "US Standards" },
  { name: "WHO-GMP", description: "Certified" },
  { name: "EU-GMP", description: "Compliant" },
];

const bestsellers = [
  { name: "Spobio CL", category: "Probiotic", description: "Gut health support for children" },
  { name: "KIDORS", category: "Paediatric", description: "Essential paediatric formulation" },
  { name: "MEROAIM", category: "Antibiotic", description: "Trusted infection treatment" },
  { name: "TINNIGO", category: "Supplement", description: "Nutritional support" },
  { name: "KIDWITS", category: "Brain Health", description: "Cognitive development support" },
];

const reviews = [
  {
    name: "Dr. Ritu Sharma",
    role: "Paediatrician",
    content: "I use Jigson's medicines for many of my young patients. They work well, are safe, and parents find them easy to use. It's a brand I trust in daily practice.",
    rating: 5,
    image: "RS",
  },
  {
    name: "S. Patel",
    role: "Pharma Distributor",
    content: "Working with Jigson has been smooth. Their products are consistent, paperwork is clear, and deliveries come on time. It makes our job easier.",
    rating: 5,
    image: "SP",
  },
  {
    name: "R. Singh",
    role: "Hospital Procurement Manager",
    content: "We've been ordering Jigson products for a long time. Quality is steady, no complaints from doctors, and all compliance documents are always in place.",
    rating: 5,
    image: "RS",
  },
  {
    name: "Pooja Agarwal",
    role: "Parent",
    content: "My child's doctor suggested Jigson. The medicine suited my kid well and showed results quickly. I feel comfortable using their products now.",
    rating: 5,
    image: "PA",
  },
  {
    name: "Dr. Harsh Mehta",
    role: "Child Care Clinic Owner",
    content: "In our clinic, we prefer brands that are dependable. Jigson's paediatric range has been reliable for years, and kids respond well to their formulations.",
    rating: 5,
    image: "HM",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <Baby className="w-4 h-4" />
                Paediatric Healthcare Specialists
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6">
                Trusted Paediatric Care,
                <span className="block text-primary">Backed by Science.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-4 max-w-lg leading-relaxed">
                High-quality paediatric formulations you can rely on for your kids.
              </p>
              <p className="text-base text-muted-foreground mb-8 max-w-lg">
                Made with care, consistency, and clinical expertise.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/products">
                    Explore Products
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/about">About Us</Link>
                </Button>
              </div>
              
              {/* Trust Badges */}
              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">WHO-GMP</div>
                    <div className="text-xs text-muted-foreground">Certified</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">FDA Approved</div>
                    <div className="text-xs text-muted-foreground">Standards</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-up delay-200">
              <div className="relative rounded-[2rem] overflow-hidden shadow-large">
                <img
                  src={heroPharma}
                  alt="Paediatric Pharmaceutical Products"
                  className="w-full h-[520px] object-cover"
                />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-5 rounded-2xl shadow-large border border-border animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                    <Clock className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">Since 2016</div>
                    <div className="text-sm text-muted-foreground">Trusted Partner</div>
                  </div>
                </div>
              </div>
              {/* Rating Badge */}
              <div className="absolute top-6 -right-4 bg-card px-4 py-3 rounded-2xl shadow-large border border-border">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="font-bold">Trusted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container-wide">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl font-extrabold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="badge badge-primary mb-3">Categories</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Our Product Range
              </h2>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link to="/products">
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                to="/products"
                className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground">{category.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestseller Products */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-primary mb-3">Featured</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Bestseller Products
            </h2>
            <p className="text-muted-foreground">
              Our most trusted paediatric formulations recommended by healthcare professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {bestsellers.map((product, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-medium transition-all duration-300"
              >
                <div className="relative h-32 bg-gradient-to-br from-blue-light to-secondary flex items-center justify-center">
                  <Pill className="w-12 h-12 text-primary/30 group-hover:text-primary/50 transition-colors" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-muted-foreground">{product.category}</span>
                  <h3 className="font-bold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-52 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-16 h-16 text-primary/40" />
                </div>
                <div className="h-36 rounded-2xl overflow-hidden">
                  <img src={productHero} alt="Products" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-36 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <HeartPulse className="w-12 h-12 text-accent/50" />
                </div>
                <div className="h-52 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground p-6">
                  <div className="text-center">
                    <div className="text-4xl font-extrabold">2016</div>
                    <div className="text-sm opacity-80 mt-1">Since Then</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="badge badge-primary mb-4">About Jigson Pharma</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                Specialised Paediatric Formulations Built on Quality & Safety
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Since 2016, Jigson Pharma has been delivering specialised paediatric formulations 
                built on quality, safety, and scientific precision. We focus on high-quality, 
                high-standard and high-stability products trusted by healthcare professionals.
              </p>
              <div className="space-y-4 mb-8">
                {["FDA Approved Standards", "WHO-GMP Certified Manufacturing", "EU-GMP Compliant Facility"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="default" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Our Global Approvals</h3>
              <p className="text-primary-foreground/70">
                Committed to the highest international standards
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-primary-foreground/10 backdrop-blur-sm px-6 py-4 rounded-2xl text-center min-w-[140px]"
                >
                  <div className="font-bold">{cert.name}</div>
                  <div className="text-sm text-primary-foreground/70">{cert.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-primary mb-3">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              What Our Partners Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover-lift"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {review.content}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="font-bold text-primary-foreground">
                      {review.image}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Additional Reviews Row */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {reviews.slice(3).map((review, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover-lift"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {review.content}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="font-bold text-primary-foreground">
                      {review.image}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-blue-medium to-primary">
        <div className="container-wide text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join our network of healthcare partners and experience the 
            Jigson difference in quality, reliability, and paediatric expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="accent" size="xl" asChild>
              <Link to="/work-with-us">
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;