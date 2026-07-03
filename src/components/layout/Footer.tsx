import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { useRestaurant } from "../../context/RestaurantContext";
import { handleSearchFocus } from "@/src/lib/searchScroll";

const productLinks = [
  { label: "Search", href: "/" },
  { label: "Pricing", href: "/" },
  { label: "Deals", href: "/" },
  { label: "Track Order", href: "/" },
];

const resourceLinks = [
  { label: "Opening Hours", href: "/" },
  { label: "How It Works", href: "/" },
  { label: "FAQs", href: "/" },
  { label: "Support", href: "mailto:syedkhubaibshah@icloud.com" },
];

const companyLinks = [
  { label: "About Us", href: "/pages/about" },
  { label: "Developer Portfolio", href: "https://www.thekhubaib.me" },
  { label: "Contact Developer", href: "mailto:syedkhubaibshah@icloud.com" },
  { label: "Custom Development", href: "https://www.thekhubaib.me" },
];

export const Footer: React.FC = () => {
  const { config } = useRestaurant();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-primary/10 bg-background-card text-text-secondary">
      <section className="max-w-[1220px] mx-auto px-6 py-16">
        <div className="grid gap-14 grid-cols-2 lg:grid-cols-12 items-center justify-center">
          <div className="space-y-6 col-span-2 md:col-span-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl text-brand-primary">
                <img
                  src={config.logo}
                  alt={config.name}
                  className="h-20 w-20 object-contain"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-brand-primary font-bold">
                  {config.slug}
                </p>
                <h2 className="mt-2 text-2xl font-black text-text-primary">
                  {config.name}
                </h2>
              </div>
            </div>

            <p className="max-w-lg text-sm leading-7 text-text-secondary">
              A premium multi-tenant restaurant template built to support fresh
              brands, modern kitchens, and elegant online ordering experiences.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={config.social.facebook || "#"}
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary transition-all duration-300 hover:bg-brand-primary hover:text-text-inverse hover:-translate-y-1 hover:shadow-lg"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={config.social.instagram || "#"}
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary transition-all duration-300 hover:bg-brand-primary hover:text-text-inverse hover:-translate-y-1 hover:shadow-lg"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-5  md:col-span-2">
            <h3 className="text-sm uppercase tracking-[0.35em] text-text-primary font-semibold">
              Product
            </h3>
            <div className="flex flex-col gap-3 text-sm text-text-secondary">
              {productLinks.map((link) =>
                link.label === "Search" ? (
                  <a
                    key={link.label}
                    className="hover:text-brand-primary transition-colors"
                    onClick={handleSearchFocus}
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="hover:text-brand-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>

          <div className="space-y-5 md:col-span-2">
            <h3 className="text-sm uppercase tracking-[0.35em] text-text-primary font-semibold">
              Resources
            </h3>
            <div className="flex flex-col gap-3 text-sm text-text-secondary">
              {resourceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-brand-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-5 md:col-span-2">
            <h3 className="text-sm uppercase tracking-[0.35em] text-text-primary font-semibold">
              Company
            </h3>
            <div className="flex flex-col gap-3 text-sm text-text-secondary">
              {companyLinks.map((link, index) => (
                <a
                  key={link.label + index}
                  href={link.href}
                  className="hover:text-brand-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-brand-primary/15 pt-8">
          <div className="flex flex-col gap-4 text-sm text-text-secondary md:flex-row md:items-center md:justify-between">
            <p>
              © {currentYear} {config.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/"
                className="hover:text-brand-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/"
                className="hover:text-brand-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/"
                className="hover:text-brand-primary transition-colors"
              >
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
