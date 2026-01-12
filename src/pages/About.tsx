import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Award, Lightbulb, Heart, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import cetzixDx3d from "@/assets/products/cetzix-dx-3d.jpg";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "Every product meets strict global standards.",
  },
  {
    icon: Shield,
    title: "Safety Always",
    description: "Child-friendly, stable, and dependable formulations.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Transparent processes and ethical practices in everything we do.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously improving with research-driven development.",
  },
  {
    icon: Users,
    title: "Responsibility",
    description: "Caring for communities, partners, and young patients worldwide.",
  },
];

const founders = [
  {
    name: "Jignesh Acharya",
    role: "D.Pharm, Biotechnology, MBA",
    bio: "Jignesh leads the product, research, and formulation development side of Jigson. With a strong scientific and pharma background, he ensures every product meets high stability, quality, and safety benchmarks.",
  },
  {
    name: "Hetal Acharya",
    role: "B.Com, M.Com",
    bio: "Hetal manages the operations, coordination, and day-to-day functioning of the company. Her structured approach keeps production, supply, and communication running smoothly.",
  },
  {
    name: "Shail Surresh Thakkar",
    role: "BBA, MBA",
    bio: "A creative thinker and experienced businessman, Shail handles accounts, strategy, and business planning. His practical approach and financial oversight help Jigson run efficiently and sustainably.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100">
              Specialising in Paediatric Healthcare Since 2016
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
              At Jigson Pharma, we specialise in paediatric healthcare, creating formulations that are 
              safe, stable, and scientifically designed for growing children. Our focus has been simple — 
              quality you can trust and care you can rely on.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              With strong manufacturing standards and a commitment to child-friendly solutions, 
              Jigson has grown into a dependable partner for doctors, hospitals, distributors, and parents.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-background rounded-3xl p-10 border border-border hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To provide safe, high-quality paediatric medicines that support healthier childhoods, 
                backed by scientific research, strict compliance, and a commitment to consistent care.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-primary to-blue-medium rounded-3xl p-10 text-primary-foreground hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                To become a globally trusted name in paediatric healthcare, known for our reliability, 
                innovation, and dedication to improving children's wellbeing across markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Core Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Principles That Guide Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover-lift text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Leadership
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Founders
            </h2>
            <p className="text-muted-foreground">
              Visionary leaders driving Jigson's mission in paediatric healthcare.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-background rounded-3xl p-8 border border-border hover-lift text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-blue-medium flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-display font-bold text-primary-foreground">
                    {founder.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">{founder.name}</h3>
                <p className="text-primary text-sm font-medium mb-4">{founder.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={cetzixDx3d}
                alt="Jigson Pharmaceuticals Product"
                className="w-full h-[400px] object-contain bg-gradient-to-br from-gray-50 to-gray-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Facilities
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                State-of-the-Art Manufacturing
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our manufacturing facilities are equipped with the latest technology for pharmaceutical 
                production. Every unit operates under strict GMP guidelines and is regularly audited by 
                international regulatory bodies including FDA, WHO-GMP, and EU-GMP standards.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: "FDA", label: "Approved" },
                  { value: "WHO-GMP", label: "Certified" },
                  { value: "EU-GMP", label: "Compliant" },
                  { value: "40+", label: "Products" },
                ].map((stat, index) => (
                  <div key={index} className="bg-card rounded-xl p-4 border border-border">
                    <div className="font-display text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;