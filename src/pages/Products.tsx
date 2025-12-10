import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, Pill, Droplet, Syringe, FlaskConical, Package, Beaker } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/layout/Layout";

const categories = [
  { id: "all", name: "All Products", icon: Pill },
  { id: "capsules", name: "Capsules", icon: Pill },
  { id: "tablets", name: "Tablets", icon: Package },
  { id: "drysyrup", name: "Dry Syrups", icon: Beaker },
  { id: "suspension", name: "Suspensions", icon: Droplet },
  { id: "syrup", name: "Syrups", icon: Droplet },
  { id: "injection", name: "Injections", icon: Syringe },
  { id: "sachet", name: "Sachets", icon: Package },
];

const products = [
  {
    id: 1,
    name: "TINNIGO CAPSULE - 20 MG",
    category: "capsules",
    composition: "Caroverine 20 mg Capsule",
    packaging: "10X1X10 (Mono cartoon pack of 1 strip)",
    mrp: "₹260.00",
  },
  {
    id: 2,
    name: "JIXSCLAV 228.5 MG DRY SYRUP",
    category: "drysyrup",
    composition: "Amoxycillin Clavulanate 228.5 mg (3.3 GRAM / 30 ML)",
    packaging: "30 ML Glass Bottle + W.F.I. + Measuring Cup",
    mrp: "₹67.00",
  },
  {
    id: 3,
    name: "JIXSCLAV-XL 228.5 MG DRY SYRUP",
    category: "drysyrup",
    composition: "Amoxycillin Clavulanate 228.5 mg (6.6 GRAM / 60 ML)",
    packaging: "60 ML Glass Bottle + W.F.I. + Measuring Cup",
    mrp: "₹130.00",
  },
  {
    id: 4,
    name: "JIXSCLAV FORTE 457 MG DRY SYRUP",
    category: "drysyrup",
    composition: "Amoxycillin Clavulanate 457 mg (6.6 GRAM / 30 ML)",
    packaging: "30 ML Glass Bottle + W.F.I. + Measuring Cup",
    mrp: "₹165.00",
  },
  {
    id: 5,
    name: "JIXSCLAV FORTE-XL 457 MG DRY SYRUP",
    category: "drysyrup",
    composition: "Amoxycillin Clavulanate 457 mg (13.2 GRAM / 60 ML)",
    packaging: "60 ML Glass Bottle + W.F.I. + Measuring Cup",
    mrp: "₹285.00",
  },
  {
    id: 6,
    name: "JIXSCLAV 457 MG KIDS DISPERSIBLE TABLET",
    category: "tablets",
    composition: "Amoxycillin Clavulanate 457 mg Dispersible Tablet (Mango Flavour)",
    packaging: "10X1X10 (Mono cartoon pack of 1 strip)",
    mrp: "₹190.00",
  },
  {
    id: 7,
    name: "JIXSCLAV 625 MG FILM COATED TABLET",
    category: "tablets",
    composition: "Amoxycillin Clavulanate 625 mg Film Coated Tablet",
    packaging: "10X1X10 (Mono cartoon pack of 1 strip)",
    mrp: "₹195.00",
  },
  {
    id: 8,
    name: "JIXSPOD - 50 MG DRY SYRUP",
    category: "drysyrup",
    composition: "Cefpodoxime 50mg Dry Syrup (15 GM / 30 ML) - Tangy Orange Flavour",
    packaging: "30 ML Glass Bottle + W.F.I. + Measuring Cup",
    mrp: "₹91.00",
  },
  {
    id: 9,
    name: "JIXSPOD - CV-50 MG DRY SYRUP",
    category: "drysyrup",
    composition: "Cefpodoxime 50mg + Clavulanic Acid 31.25 mg (11 GM / 30 ML) - Mix Fruit Flavour",
    packaging: "30 ML Glass Bottle + W.F.I. + Measuring Cup",
    mrp: "₹119.00",
  },
  {
    id: 10,
    name: "JIXSPOD - 100 MG DRY SYRUP",
    category: "drysyrup",
    composition: "Cefpodoxime 100mg Dry Syrup (15 GM / 30 ML) - Tangy Orange Flavour",
    packaging: "30 ML Glass Bottle + W.F.I. + Measuring Cup",
    mrp: "₹135.00",
  },
  {
    id: 11,
    name: "JIXSPOD - CV-100 MG DRY SYRUP",
    category: "drysyrup",
    composition: "Cefpodoxime 100mg + Clavulanic Acid 62.50 mg (13 GM / 30 ML) - Mix Fruit Flavour",
    packaging: "30 ML Glass Bottle + W.F.I. + Measuring Cup",
    mrp: "₹191.00",
  },
  {
    id: 12,
    name: "JIXSPOD - 100 MG DISPERSIBLE TABLET",
    category: "tablets",
    composition: "Cefpodoxime 100mg Dispersible Tablet (Strawberry Flavour)",
    packaging: "10X10",
    mrp: "₹105.00",
  },
  {
    id: 13,
    name: "JIXSPOD - 200 MG FILM COATED TABLET",
    category: "tablets",
    composition: "Cefpodoxime 200mg Film Coated Tablet",
    packaging: "10X10",
    mrp: "₹165.00",
  },
  {
    id: 14,
    name: "TAVPOL - 100 SUSPENSION 60 ML",
    category: "suspension",
    composition: "Mefenamic Acid 100 mg Suspension (Sweet Mango Flavour)",
    packaging: "60ML PET Bottle + Measuring Cup",
    mrp: "₹37.05",
  },
  {
    id: 15,
    name: "TAVPOL - MF SUSPENSION 60 ML",
    category: "suspension",
    composition: "Paracetamol 250 mg + Mefenamic Acid 100 mg Suspension (Sweet Mango Flavour)",
    packaging: "60ML PET Bottle + Measuring Cup",
    mrp: "₹47.00",
  },
  {
    id: 16,
    name: "TAVPOL - MF SUSPENSION 100 ML",
    category: "suspension",
    composition: "Paracetamol 250 mg + Mefenamic Acid 100 mg Suspension (Sweet Mango Flavour)",
    packaging: "100ML PET Bottle + Measuring Cup",
    mrp: "₹66.00",
  },
  {
    id: 17,
    name: "TAWIBRO SUSPENSION 60 ML",
    category: "suspension",
    composition: "Paracetamol 100mg + Ibuprofen 162.5 mg Suspension (Mix Fruit Flavour)",
    packaging: "60ML PET Bottle + Measuring Cup",
    mrp: "₹38.00",
  },
  {
    id: 18,
    name: "TAWIBRO SUSPENSION 100 ML",
    category: "suspension",
    composition: "Paracetamol 100mg + Ibuprofen 162.5 mg Suspension (Mix Fruit Flavour)",
    packaging: "100ML PET Bottle + Measuring Cup",
    mrp: "₹53.00",
  },
  {
    id: 19,
    name: "ASTHAZIX SYRUP-15X - 100 ML",
    category: "syrup",
    composition: "Phenylephrine 5mg + Chlorpheniramine Maleate 2mg + Dextromethorphan 15mg per 5ml",
    packaging: "100ML PET Bottle + Measuring Cup",
    mrp: "₹95.00",
  },
  {
    id: 20,
    name: "ASTHAZIX SYRUP - 100 ML",
    category: "syrup",
    composition: "Salbutamol 1 mg + Theophyline 50 mg",
    packaging: "100ML PET Bottle + Measuring Cup",
    mrp: "₹45.00",
  },
  {
    id: 21,
    name: "RABZIX-DSR",
    category: "capsules",
    composition: "Domperidone 30mg + Rabeprazole 20mg",
    packaging: "Foil Packaging Strip",
    mrp: "₹85.00",
  },
  {
    id: 22,
    name: "PANZIX-DSR",
    category: "capsules",
    composition: "Domperidone 30mg + Pantoprazole 40mg",
    packaging: "Foil Packaging Strip",
    mrp: "₹99.00",
  },
  {
    id: 23,
    name: "ALAIRZIX-3D",
    category: "tablets",
    composition: "Ambroxol 75mg + Levocetirizine 5mg + Montelukast 10mg",
    packaging: "ALU-ALU",
    mrp: "₹125.00",
  },
  {
    id: 24,
    name: "ZIGZONE - 1GM INJECTION",
    category: "injection",
    composition: "Ceftriaxone 1 GM Injection",
    packaging: "Injection + WFI",
    mrp: "₹65.00",
  },
  {
    id: 25,
    name: "ZIGZONE - SB INJECTION",
    category: "injection",
    composition: "Ceftriaxone 1 GM + Sulbactam 500 MG",
    packaging: "Injection + WFI",
    mrp: "₹205.00",
  },
  {
    id: 26,
    name: "PIPTIX 4.5 GM INJECTION",
    category: "injection",
    composition: "Piperacillin 4 GM + Tazobactum 500 Mg",
    packaging: "Injection + WFI",
    mrp: "₹405.00",
  },
  {
    id: 27,
    name: "PIPTIX 1.125 GM INJECTION",
    category: "injection",
    composition: "Piperacillin 1 GM + Tazobactum 125 Mg",
    packaging: "Injection + WFI",
    mrp: "₹95.00",
  },
  {
    id: 28,
    name: "PANZIX 40MG INJECTION",
    category: "injection",
    composition: "Pantoprazole 40 Mg",
    packaging: "Injection + WFI",
    mrp: "₹49.00",
  },
  {
    id: 29,
    name: "MEROPAIM 1GM",
    category: "injection",
    composition: "Meropenem 1 GM",
    packaging: "Injection + WFI",
    mrp: "₹925.00",
  },
  {
    id: 30,
    name: "MEROPAIM 500 MG",
    category: "injection",
    composition: "Meropenem 500 Mg",
    packaging: "Injection + WFI",
    mrp: "₹525.00",
  },
  {
    id: 31,
    name: "AIZIX-XL-200MG SUSPENSION",
    category: "suspension",
    composition: "Azithromycin 200mg/5ml",
    packaging: "30ML PET Bottle + Measuring Cup",
    mrp: "₹90.00",
  },
  {
    id: 32,
    name: "DROTEAM-20 MG SUSPENSION",
    category: "suspension",
    composition: "Drotaverine 20mg/5ml",
    packaging: "60ML PET Bottle + Measuring Cup",
    mrp: "₹75.00",
  },
  {
    id: 33,
    name: "COLDBOY - SUSPENSION",
    category: "suspension",
    composition: "Chlorpheniramine 2mg + Paracetamol 250mg + Phenylephrine 5mg + Sodium Citrate 60mg",
    packaging: "60ML PET Bottle + Measuring Cup",
    mrp: "₹69.00",
  },
  {
    id: 34,
    name: "SPOBIO CL",
    category: "suspension",
    composition: "2 Billion Spores of Poly-antibiotic Resistance Bacillus Clausii (Original Strains)",
    packaging: "5 ML Mini Bottle / 10 Mini Bottles per Box",
    mrp: "₹47.00/Mini Bottle",
    highlight: true,
  },
  {
    id: 35,
    name: "KIDORS",
    category: "sachet",
    composition: "WHO Recommended ORS Formulation + Zinc 10 mg + Probiotics",
    packaging: "5 GM Sachet",
    mrp: "₹19.00/Sachet",
    highlight: true,
  },
  {
    id: 36,
    name: "KIDWITS ADVANCE SYRUP - 100 ML",
    category: "syrup",
    composition: "Advance Iron + Multivitamin + Multi Mineral + Zinc + Vitamin C + Vitamin D + Amino Acid + Antioxidants",
    packaging: "100 ML",
    mrp: "₹95.00",
    highlight: true,
  },
  {
    id: 37,
    name: "KIDWITS ADVANCE SYRUP - 200 ML",
    category: "syrup",
    composition: "Advance Iron + Multivitamin + Multi Mineral + Zinc + Vitamin C + Vitamin D + Amino Acid + Antioxidants",
    packaging: "200 ML",
    mrp: "₹185.00",
    highlight: true,
  },
  {
    id: 38,
    name: "KIDWITS ADVANCE PROTEIN POWDER",
    category: "sachet",
    composition: "Advanced 37 Vital Nutritional Support to Children (Chocolate Flavour)",
    packaging: "200 GM",
    mrp: "₹330.00",
    highlight: true,
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.composition.toLowerCase().includes(searchQuery.toLowerCase());
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
              Our Paediatric Range
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
              Explore our comprehensive portfolio of 38+ high-quality paediatric 
              pharmaceutical formulations designed with care for growing children.
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
                placeholder="Search products by name or composition..."
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
                className={`group bg-card rounded-2xl border overflow-hidden hover-lift ${
                  product.highlight ? "border-primary/50 ring-2 ring-primary/20" : "border-border"
                }`}
              >
                <div className={`h-32 flex items-center justify-center ${
                  product.highlight 
                    ? "bg-gradient-to-br from-primary/10 to-accent/10" 
                    : "bg-gradient-to-br from-primary/5 to-blue-light"
                }`}>
                  {product.highlight && (
                    <span className="absolute top-3 right-3 px-2 py-1 rounded-md bg-accent text-accent-foreground text-xs font-semibold">
                      Bestseller
                    </span>
                  )}
                  {product.category === "injection" && <Syringe className="w-12 h-12 text-primary/40 group-hover:text-primary/60 transition-colors" />}
                  {product.category === "drysyrup" && <Beaker className="w-12 h-12 text-primary/40 group-hover:text-primary/60 transition-colors" />}
                  {product.category === "suspension" && <Droplet className="w-12 h-12 text-primary/40 group-hover:text-primary/60 transition-colors" />}
                  {product.category === "syrup" && <Droplet className="w-12 h-12 text-primary/40 group-hover:text-primary/60 transition-colors" />}
                  {product.category === "tablets" && <Package className="w-12 h-12 text-primary/40 group-hover:text-primary/60 transition-colors" />}
                  {product.category === "capsules" && <Pill className="w-12 h-12 text-primary/40 group-hover:text-primary/60 transition-colors" />}
                  {product.category === "sachet" && <Package className="w-12 h-12 text-primary/40 group-hover:text-primary/60 transition-colors" />}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold text-foreground mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.composition}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Packaging:</span>
                      <span className="text-foreground font-medium text-right text-xs max-w-[60%]">{product.packaging}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">MRP:</span>
                      <span className="text-primary font-bold">{product.mrp}</span>
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
      <section className="section-padding bg-gradient-to-r from-primary to-blue-medium text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Looking for Partnership?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Partner with Jigson Pharma and access our reliable paediatric product range 
            backed by science, strong compliance, and consistent quality.
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
