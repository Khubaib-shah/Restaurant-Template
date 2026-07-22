import React from "react";
import { AnnouncementBar } from "../layout/AnnouncementBar";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { useRestaurant } from "../../context/RestaurantContext";

export const PrivacyPage: React.FC = () => {
  const { config } = useRestaurant();

  const policy = config.privacyPolicy || {
    title: `${config.name} Privacy Policy`,
    lastUpdated: "Last updated: July 2026",
    intro: `At ${config.name}, we value your privacy and are committed to protecting your personal information while you order your favorite meals online.`,
    sections: [
      {
        heading: "What information we collect",
        body: "We collect your name, phone number, delivery address, order details, and payment information needed to prepare and deliver your order safely.",
      },
      {
        heading: "How we use your information",
        body: "Your information is used to process orders, contact you about your order, improve service quality, and prevent fraud.",
      },
      {
        heading: "Sharing your information",
        body: "We do not sell your personal data. We may share limited information with delivery and payment partners only to fulfill your order.",
      },
      {
        heading: "Contact us",
        body: "If you have any questions about this privacy notice, please contact us at the details available on our website.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background-page text-text-primary flex flex-col">
      <AnnouncementBar />
      <Header />

      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
          <section className="rounded-[2rem] border border-brand-primary/10 bg-background-card p-6 shadow-sm sm:p-8 lg:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-brand-primary">
              {policy.lastUpdated}
            </p>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-text-primary sm:text-4xl">
              {policy.title}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-text-secondary sm:text-base">
              {policy.intro}
            </p>
          </section>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              {policy.sections?.map((section, index) => (
                <section
                  key={`${section.heading}-${index}`}
                  className="rounded-[1.5rem] border border-brand-primary/10 bg-background-card p-6 shadow-sm"
                >
                  <h2 className="text-xl font-bold text-text-primary">
                    {section.heading}
                  </h2>
                  <div className="mt-3 space-y-3 text-sm leading-7 text-text-secondary sm:text-[15px]">
                    {Array.isArray(section.body) ? (
                      section.body.map((paragraph, paragraphIndex) => (
                        <p key={`${section.heading}-${paragraphIndex}`}>
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p>{section.body}</p>
                    )}
                  </div>
                </section>
              ))}
            </div>

            <aside className="rounded-[1.5rem] border border-brand-primary/10 bg-brand-primary/5 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-text-primary">
                Need help?
              </h2>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                If you have questions about our privacy practices, please reach
                out to {config.name} using the contact details below.
              </p>
              <div className="mt-5 space-y-3 text-sm text-text-secondary">
                <p>
                  <span className="font-semibold text-text-primary">
                    Phone:
                  </span>{" "}
                  {config.contact.phone}
                </p>
                <p>
                  <span className="font-semibold text-text-primary">
                    Email:
                  </span>{" "}
                  {config.contact.email}
                </p>
                <p>
                  <span className="font-semibold text-text-primary">
                    Address:
                  </span>{" "}
                  {config.contact.address}
                </p>
              </div>
              <a
                href="/"
                className="mt-6 inline-flex items-center rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-text-inverse transition-colors hover:bg-brand-primary/90"
              >
                Back to home
              </a>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
