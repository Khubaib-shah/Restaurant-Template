import React from "react";
import { useRestaurant } from "../../context/RestaurantContext";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { ArrowLeft } from "lucide-react";

export const FaqPage: React.FC = () => {
  const { config } = useRestaurant();

  const faqs = config.faqs;
  const title = faqs?.title || "Frequently Asked Questions";
  const intro = faqs?.intro || "Find answers to common questions about our services.";
  const items = faqs?.items || [];

  return (
    <div className="min-h-screen bg-background-page text-text-primary flex flex-col font-sans">
      <Header />

      <main className="flex-1 container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="mb-8 flex items-center gap-3">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:opacity-80"
          >
            <ArrowLeft size={16} />
            Back to home
          </a>
        </div>

        <div className="rounded-3xl border border-brand-primary/15 bg-background-card shadow-sm overflow-hidden">
          <div className="border-b border-brand-primary/10 bg-brand-primary/5 px-6 py-8 sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-primary/80">
              Help center
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-text-primary">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm sm:text-base leading-7 text-text-muted">
              {intro}
            </p>
          </div>

          <div className="divide-y divide-brand-primary/10 px-4 py-4 sm:px-8 sm:py-6">
            {items.length > 0 ? (
              items.map((item, index) => (
                <details key={`${item.question}-${index}`} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 rounded-xl px-2 py-2 text-left text-sm sm:text-base font-semibold text-text-primary transition hover:bg-brand-primary/5">
                    <span>{item.question}</span>
                    <span className="text-lg text-brand-primary transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-2 pb-2 pt-3 text-sm leading-7 text-text-muted">
                    {Array.isArray(item.answer) ? (
                      item.answer.map((paragraph, paragraphIndex) => (
                        <p key={`${item.question}-${paragraphIndex}`} className="mt-2 first:mt-0">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p>{item.answer}</p>
                    )}
                  </div>
                </details>
              ))
            ) : (
              <p className="px-2 py-8 text-sm text-text-muted">
                FAQ content will appear here once it is added for this tenant.
              </p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
