import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { useRestaurant } from "../../context/RestaurantContext";
import { handleSearchFocus } from "@/src/lib/searchScroll";

const productLinks = [
  { label: "Search", href: "/" },
  { label: "FAQs", href: "/faq" },
  { label: "Track Order", href: "/" },
];

const information = [
  { label: "5pm to 2am" },
  { label: "0309 9930777", href: "tel:+923099930777" },
  { label: "temp@gmail.com", href: "mailto:syedkhubaibshah@icloud.com" },
];

export const Footer: React.FC = () => {
  const { config } = useRestaurant();

  const navigateTo = (
    path: string,
    e?: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    if (e) e.preventDefault();
    if (window.location.pathname === path) return;
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-brand-primary/10 bg-background-card text-text-secondary">
      <section className="max-w-[1220px] mx-auto px-6 py-16">
        <div className="grid gap-14 grid-cols-2 lg:grid-cols-12 items-center justify-center">
          <div className="space-y-6 col-span-2 md:col-span-8">
            <div className="flex items-center gap-4">
              <div className="flex h-28 w-28 items-center justify-center rounded-3xl text-brand-primary">
                <img
                  src={config.logo}
                  alt={config.name}
                  className="size-full object-contain"
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
              {config.footer.description}
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
                    href="/"
                    className="hover:text-brand-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSearchFocus();
                    }}
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
              Information
            </h3>
            <div className="flex flex-col gap-3 text-sm text-text-secondary">
              {information.map((link) => (
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
        </div>

        <div className="mt-16 border-t border-brand-primary/15 pt-8">
          <div className="flex flex-col gap-4 text-sm text-text-secondary md:flex-row md:items-center md:justify-between">
            <p>
              Powered by{" "}
              <a
                href="https://www.thekhubaib.me"
                className="font-semibold text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Khubaib Shah
              </a>
              . All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/privacy"
                onClick={(e) => navigateTo("/privacy", e)}
                className="hover:text-brand-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/faq"
                onClick={(e) => navigateTo("/faq", e)}
                className="hover:text-brand-primary transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
