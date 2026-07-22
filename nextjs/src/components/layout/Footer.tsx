import React from "react";
import Image from "next/image";
import { Globe, Share2 } from "lucide-react";
import { useRestaurant } from "../../context/RestaurantContext";
import { handleSearchFocus } from "@/lib/searchScroll";

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
  const variant = config.footer.layoutVariant ?? "classic";

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

  const footerContent = () => {
    if (variant === "compact") {
      return (
        <section className="container max-w-7xl mx-auto md:my-8 px-6 py-12 rounded-t-3xl md:rounded-3xl relative overflow-hidden backdrop-blur-sm bg-brand-accent/5 border border-brand-primary/20 shadow-2xl shadow-black/20 ring-1 ring-brand-primary/10">
          <div className="grid gap-10 lg:grid-cols-[1.7fr_1fr] items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl text-brand-primary bg-brand-primary/5">
                  <Image
                    src={config.logo}
                    alt={config.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 object-contain"
                    unoptimized={config.logo.startsWith('data:')}
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

              <p className="max-w-xl text-sm leading-7 text-text-secondary">
                {config.footer.description}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 text-sm text-text-secondary">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.35em] text-text-primary font-semibold">
                  Product
                </p>
                <div className="flex flex-col gap-3">
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

              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.35em] text-text-primary font-semibold">
                  Information
                </p>
                <div className="flex flex-col gap-3">
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
          </div>

          <div className="mt-14 border-t border-brand-primary/15 pt-8 text-sm text-text-secondary md:flex md:items-center md:justify-between">
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
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0">
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
        </section>
      );
    }

    if (variant === "classic") {
      return (
        <section className="container max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-12">
          <div className="grid gap-10 lg:grid-cols-[1.7fr_1fr] items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl">
                  <Image
                    src={config.logo}
                    alt={config.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain rounded-full"
                    unoptimized={config.logo.startsWith('data:')}
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

              <p className="max-w-xl text-sm leading-7 text-text-secondary">
                {config.footer.description}
              </p>

              <div className="flex gap-4">
                {config.social.facebook && (
                  <a
                    href={config.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary hover:text-brand-primary/80 transition-colors"
                  >
                    <Globe size={20} />
                  </a>
                )}
                {config.social.instagram && (
                  <a
                    href={config.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary hover:text-brand-primary/80 transition-colors"
                  >
                    <Share2 size={20} />
                  </a>
                )}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 text-sm text-text-secondary">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.35em] text-text-primary font-semibold">
                  Product
                </p>
                <div className="flex flex-col gap-3">
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

              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.35em] text-text-primary font-semibold">
                  Information
                </p>
                <div className="flex flex-col gap-3">
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
          </div>
          <div className="mt-14 border-t border-brand-primary/15 pt-8 pb-8 md:pb-0 text-sm text-text-secondary flex flex-col md:flex-row-reverse items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0">
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
            </p>
          </div>
        </section>
      );
    }

    if (variant === "minimal") {
      return (
        <section className="max-w-4xl mx-auto px-6 py-12 text-center">
          <div className="space-y-6">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-primary/5 text-brand-primary">
              <Image
                src={config.logo}
                alt={config.name}
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
                unoptimized={config.logo.startsWith('data:')}
              />
            </div>
            <div>
              <h2 className="text-2xl font-black text-text-primary">
                {config.name}
              </h2>
              <p className="mt-2 text-sm text-text-secondary leading-7">
                {config.footer.description}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-text-secondary">
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
            <div className="flex flex-wrap justify-center gap-4 text-sm text-text-secondary">
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
            <p className="text-xs text-text-muted">
              Powered by Khubaib Shah. All rights reserved.
            </p>
          </div>
        </section>
      );
    }
  };

  return footerContent();
};

