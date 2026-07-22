import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { RestaurantProvider } from "@/context/RestaurantContext";
import { CartProvider } from "@/context/CartContext";
import { restaurants } from "@/restaurants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/**
 * Server-side config resolution for metadata.
 * Falls back to the 'marhababbq' tenant (the default for this deployment).
 * In a true multi-tenant server deployment, this would read from request headers or env.
 */
function getDefaultConfig() {
  const slug = (process.env.RESTAURANT_SLUG ?? "marhababbq") as keyof typeof restaurants;
  return restaurants[slug] ?? restaurants["marhababbq"];
}

export async function generateMetadata(): Promise<Metadata> {
  const config = getDefaultConfig();

  return {
    title: {
      default: `Order Online | ${config.name}`,
      template: `%s | ${config.name}`,
    },
    description: config.seoText,
    openGraph: {
      siteName: config.name,
      type: "website",
      description: config.seoText,
    },
    twitter: {
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ISR: revalidate every 60 seconds
export const revalidate = 60;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = getDefaultConfig();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: config.name,
    description: config.seoText,
    telephone: config.contact.phone,
    email: config.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.contact.address,
      addressLocality: config.location.city,
      addressCountry: "PK",
    },
    servesCuisine: config.businessType ?? "restaurant",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <RestaurantProvider>
          <CartProvider>{children}</CartProvider>
        </RestaurantProvider>
      </body>
    </html>
  );
}
