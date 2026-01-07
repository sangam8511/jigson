import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import jigsonLogo from "@/assets/jigson-logo.jpg";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Products", href: "/products" },
    { name: "Work With Us", href: "/work-with-us" },
    { name: "Contact", href: "/contact" },
  ],
  products: [
    { name: "Tablets", href: "/products" },
    { name: "Capsules", href: "/products" },
    { name: "Syrups", href: "/products" },
    { name: "Dry Syrups", href: "/products" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container-wide py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Get Our News And Updates</h3>
              <p className="text-background/60">Subscribe to our newsletter for the latest updates.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/40 rounded-full h-12 w-full md:w-72"
              />
              <Button variant="accent" size="lg" className="shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src={jigsonLogo} 
                alt="Jigson Pharmaceuticals" 
                className="h-14 w-auto bg-background rounded-lg p-2"
              />
            </Link>
            <p className="text-background/60 text-sm leading-relaxed">
              Specialising in paediatric healthcare since 2016. Creating safe, stable, 
              and scientifically designed formulations for growing children.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-5">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-background/60">
                  Prime Estate, Near Ujala Cross Road, Tal. Sarkhej, Ahmedabad - 382210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-background/60">+91 97141 03005</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-background/60">jigson2016@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © 2024 Jigson Pharmaceuticals Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};