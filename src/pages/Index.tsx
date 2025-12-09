import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star, Users, Award, Pill, Truck, ShieldCheck, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroPharma from "@/assets/hero-pharma.jpg";
import productHero from "@/assets/product-hero.jpg";

const stats = [
  { value: "20+", label: "Years Experience", icon: Award },
  { value: "500+", label: "Products", icon: Pill },
  { value: "50+", label: "Countries", icon: Truck },
  { value: "100M+", label: "Lives Touched", icon: HeartPulse },
];

const categories = [
  { name: "Tablets", icon: "💊", count: "150+ Products" },
  { name: "Capsules", icon: "💉", count: "80+ Products" },
  { name: "Syrups", icon: "🧴", count: "60+ Products" },
  { name: "Injectables", icon: "💉", count: "45+ Products" },
  { name: "Nutraceuticals", icon: "🌿", count: "70+ Products" },
  { name: "Skincare", icon: "✨", count: "35+ Products" },
];

const certifications = [
  { name: "WHO-GMP", description: "Certified" },
  { name: "ISO 9001:2015", description: "Quality Management" },
  { name: "FDA Approved", description: "US Standards" },
  { name: "CE Marked", description: "European Compliance" },
];

const reviews = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Pharmacist, City Hospital",
    content: "Jigson Pharmaceuticals has been our trusted supplier for over 5 years. Their commitment to quality and timely delivery is exceptional.",
    rating: 5,
    image: "SC",
  },
  {
    name: "Michael Roberts",
    role: "Procurement Director, Global Health",
    content: "The consistency in product quality and their responsive customer service makes them stand out in the pharmaceutical industry.",
    rating: 5,
    image: "MR",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Medical Director, HealthPlus",
    content: "Their extensive range of formulations and competitive pricing has made them our primary pharmaceutical partner.",
    rating: 5,
    image: "PS",
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
                <ShieldCheck className="w-4 h-4" />
                WHO-GMP Certified Manufacturer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6">
                Your Trusted
                <span className="block text-primary">Online Pharmacy</span>
                for Every Need
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Delivering world-class pharmaceutical formulations with unwavering 
                commitment to quality, innovation, and patient well-being.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/products">
                    Shop Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/about">Explore More</Link>
                </Button>
              </div>
              
              {/* Trust Badges */}
              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Free Delivery</div>
                    <div className="text-xs text-muted-foreground">On orders over ₹500</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">100% Genuine</div>
                    <div className="text-xs text-muted-foreground">Certified products</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-up delay-200">
              <div className="relative rounded-[2rem] overflow-hidden shadow-large">
                <img
                  src={heroPharma}
                  alt="Pharmaceutical Products"
                  className="w-full h-[520px] object-cover"
                />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-5 rounded-2xl shadow-large border border-border animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                    <Users className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">50K+</div>
                    <div className="text-sm text-muted-foreground">Happy Customers</div>
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
                  <span className="font-bold">4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
                Shop by Category
              </h2>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link to="/products">
                View All Categories
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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

      {/* Featured Products */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-primary mb-3">Featured</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Today's Best Deals
            </h2>
            <p className="text-muted-foreground">
              Discover our most popular pharmaceutical products at competitive prices.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Vitamin C 500mg", category: "Supplements", price: "₹299", oldPrice: "₹399", discount: "25%" },
              { name: "Omega-3 Fish Oil", category: "Heart Health", price: "₹599", oldPrice: "₹799", discount: "25%" },
              { name: "Multivitamin Tablets", category: "Daily Health", price: "₹449", oldPrice: "₹549", discount: "18%" },
              { name: "Calcium + D3", category: "Bone Health", price: "₹349", oldPrice: "₹449", discount: "22%" },
            ].map((product, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-medium transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-light to-secondary flex items-center justify-center">
                  <Pill className="w-20 h-20 text-primary/20 group-hover:text-primary/30 transition-colors" />
                  <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {product.discount} OFF
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-xs text-muted-foreground">{product.category}</span>
                  <h3 className="font-bold text-foreground mt-1 mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{product.oldPrice}</span>
                    </div>
                    <Button variant="pill" size="sm">Add</Button>
                  </div>
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
                    <div className="text-4xl font-extrabold">20+</div>
                    <div className="text-sm opacity-80 mt-1">Years of Trust</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="badge badge-primary mb-4">About Jigson</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                Pioneering Excellence in Pharmaceutical Manufacturing
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over two decades of experience, Jigson Pharmaceuticals has established itself as a 
                trusted name in pharmaceutical manufacturing. Our state-of-the-art facilities, 
                combined with rigorous quality control measures, ensure that every product 
                meets the highest international standards.
              </p>
              <div className="space-y-4 mb-8">
                {["WHO-GMP Certified Manufacturing", "500+ Product Formulations", "Export to 50+ Countries"].map((item, index) => (
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
              <h3 className="text-2xl font-bold mb-2">Our Quality Certifications</h3>
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
              What Our Customers Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
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
                  "{review.content}"
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
            Join our global network of healthcare partners and experience the 
            Jigson difference in quality, reliability, and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="accent" size="xl" asChild>
              <Link to="/work-with-us">
                Start Partnership
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" className="text-primary-foreground border-primary-foreground/30" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
