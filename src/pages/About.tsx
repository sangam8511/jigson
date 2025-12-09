import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Users, Award, Lightbulb, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import aboutLab from "@/assets/about-lab.jpg";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Unwavering commitment to the highest standards in pharmaceutical manufacturing.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuous research and development to bring cutting-edge solutions.",
  },
  {
    icon: Heart,
    title: "Patient-Centric",
    description: "Every decision we make is guided by patient safety and well-being.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building strong partnerships with healthcare providers worldwide.",
  },
];

const founders = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Founder & CEO",
    bio: "With over 30 years in pharmaceutical research, Dr. Kumar founded Jigson Pharmaceuticals with a vision to make quality healthcare accessible globally.",
  },
  {
    name: "Dr. Meera Patel",
    role: "Co-Founder & CSO",
    bio: "A pioneer in drug formulation, Dr. Patel leads our R&D initiatives and has contributed to over 200 successful product launches.",
  },
  {
    name: "Vikram Singh",
    role: "Co-Founder & COO",
    bio: "Expert in pharmaceutical manufacturing operations, Vikram ensures our facilities maintain the highest international standards.",
  },
];

const milestones = [
  { year: "2003", title: "Founded", description: "Jigson Pharmaceuticals established in Mumbai" },
  { year: "2008", title: "WHO-GMP Certified", description: "Achieved international certification" },
  { year: "2012", title: "Global Expansion", description: "Started exporting to 20+ countries" },
  { year: "2018", title: "R&D Center", description: "Launched advanced research facility" },
  { year: "2023", title: "500+ Products", description: "Milestone in product portfolio" },
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
              About Jigson
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100">
              Pioneering Healthcare Excellence Since 2003
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
              For over two decades, we have been at the forefront of pharmaceutical innovation, 
              delivering life-changing medicines to millions of patients worldwide.
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
                To provide affordable, high-quality pharmaceutical products that improve 
                patient outcomes globally. We are committed to innovation, sustainability, 
                and ethical business practices in everything we do.
              </p>
              <ul className="space-y-3">
                {["Quality without compromise", "Accessible healthcare solutions", "Sustainable manufacturing"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-primary to-blue-medium rounded-3xl p-10 text-primary-foreground hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                To become a global leader in pharmaceutical manufacturing, recognized 
                for our commitment to quality, innovation, and positive impact on 
                healthcare systems worldwide.
              </p>
              <ul className="space-y-3">
                {["Global healthcare partner", "Innovation-driven growth", "Trusted by millions"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Journey Timeline */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Milestones of Excellence
            </h2>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden md:block" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-card rounded-2xl p-6 border border-border hover-lift inline-block">
                      <div className="text-primary font-display font-bold text-xl mb-2">{milestone.year}</div>
                      <h3 className="font-semibold text-foreground mb-1">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-primary relative z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
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
              Visionary leaders with decades of combined experience in pharmaceuticals.
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
                src={aboutLab}
                alt="Jigson Pharmaceuticals Laboratory"
                className="w-full h-[400px] object-cover"
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
                Our manufacturing facilities span over 100,000 sq. ft. and are equipped 
                with the latest technology for pharmaceutical production. Every unit 
                operates under strict GMP guidelines and is regularly audited by 
                international regulatory bodies.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: "100,000+", label: "Sq. Ft. Facility" },
                  { value: "500+", label: "Skilled Staff" },
                  { value: "10", label: "Production Lines" },
                  { value: "24/7", label: "Quality Control" },
                ].map((stat, index) => (
                  <div key={index} className="bg-card rounded-xl p-4 border border-border">
                    <div className="font-display text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">
                  Schedule a Visit
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
