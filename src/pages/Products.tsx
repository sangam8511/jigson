import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, ArrowRight, Pill, Droplet, Syringe, FlaskConical, Leaf, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/layout/Layout";

const categories = [
  { id: "all", name: "All Products", icon: Pill },
  { id: "tablets", name: "Tablets & Capsules", icon: Pill },
  { id: "injectables", name: "Injectables", icon: Syringe },
  { id: "liquids", name: "Oral Liquids", icon: Droplet },
  { id: "nutraceuticals", name: "Nutraceuticals", icon: Leaf },
  { id: "cardiovascular", name: "Cardiovascular", icon: Heart },
];

const products = [
  {
    id: 1,
    name: "Amoxicillin Capsules",
    category: "tablets",
    therapeutic: "Antibiotics",
    strength: "500mg",
    packaging: "10x10 Blister",
    description: "Broad-spectrum antibiotic for bacterial infections.",
  },
  {
    id: 2,
    name: "Metformin Tablets",
    category: "tablets",
    therapeutic: "Anti-Diabetic",
    strength: "500mg / 850mg",
    packaging: "10x10 Blister",
    description: "First-line medication for type 2 diabetes management.",
  },
  {
    id: 3,
    name: "Ceftriaxone Injection",
    category: "injectables",
    therapeutic: "Antibiotics",
    strength: "1g / 2g",
    packaging: "Vial",
    description: "Third-generation cephalosporin antibiotic for severe infections.",
  },
  {
    id: 4,
    name: "Paracetamol Syrup",
    category: "liquids",
    therapeutic: "Analgesic",
    strength: "120mg/5ml",
    packaging: "60ml / 100ml Bottle",
    description: "Fever reducer and pain reliever for children and adults.",
  },
  {
    id: 5,
    name: "Omega-3 Softgels",
    category: "nutraceuticals",
    therapeutic: "Supplements",
    strength: "1000mg",
    packaging: "30 Capsules",
    description: "Essential fatty acids for heart and brain health.",
  },
  {
    id: 6,
    name: "Atorvastatin Tablets",
    category: "cardiovascular",
    therapeutic: "Lipid Lowering",
    strength: "10mg / 20mg / 40mg",
    packaging: "10x10 Blister",
    description: "Statin medication for cholesterol management.",
  },
  {
    id: 7,
    name: "Amlodipine Tablets",
    category: "cardiovascular",
    therapeutic: "Antihypertensive",
    strength: "5mg / 10mg",
    packaging: "10x10 Blister",
    description: "Calcium channel blocker for blood pressure control.",
  },
  {
    id: 8,
    name: "Ondansetron Injection",
    category: "injectables",
    therapeutic: "Antiemetic",
    strength: "4mg/2ml",
    packaging: "Ampoule",
    description: "Prevents nausea and vomiting from chemotherapy.",
  },
  {
    id: 9,
    name: "Multivitamin Tablets",
    category: "nutraceuticals",
    therapeutic: "Supplements",
    strength: "Various",
    packaging: "30 / 60 Tablets",
    description: "Complete daily vitamin and mineral supplementation.",
  },
  {
    id: 10,
    name: "Cough Syrup",
    category: "liquids",
    therapeutic: "Respiratory",
    strength: "Various",
    packaging: "100ml Bottle",
    description: "Relief from dry and productive coughs.",
  },
  {
    id: 11,
    name: "Pantoprazole Tablets",
    category: "tablets",
    therapeutic: "Gastro",
    strength: "40mg",
    packaging: "10x10 Blister",
    description: "Proton pump inhibitor for acid reflux and ulcers.",
  },
  {
    id: 12,
    name: "Calcium + D3 Tablets",
    category: "nutraceuticals",
    therapeutic: "Bone Health",
    strength: "500mg + 250 IU",
    packaging: "30 Tablets",
    description: "Essential for strong bones and calcium absorption.",
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.therapeutic.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              Product Portfolio
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100">
              Our Pharmaceutical Range
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
              Explore our comprehensive portfolio of over 500 high-quality pharmaceutical 
              formulations across multiple therapeutic categories.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-medium"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/30"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover-lift"
              >
                <div className="h-40 bg-gradient-to-br from-primary/5 to-teal-light flex items-center justify-center">
                  <Pill className="w-16 h-16 text-primary/30 group-hover:text-primary/50 transition-colors" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                      {product.therapeutic}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Strength:</span>
                      <span className="text-foreground font-medium">{product.strength}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Packaging:</span>
                      <span className="text-foreground font-medium">{product.packaging}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <FlaskConical className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                No products found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-teal-medium text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Need Custom Formulations?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            We offer contract manufacturing and custom formulation services 
            tailored to your specific requirements.
          </p>
          <Button variant="accent" size="xl" asChild>
            <Link to="/work-with-us">
              Partner With Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
