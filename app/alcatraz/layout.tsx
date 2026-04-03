import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://liviuorehovschi.com"),
  title: "Escape from Alcatraz | Fundraiser for American Cancer Society",
  description:
    "I'm racing one of the most demanding triathlons in the world to raise money for the American Cancer Society. Every dollar supports cancer research and patient care.",
  openGraph: {
    title: "Help Me Escape Alcatraz for the American Cancer Society",
    description:
      "I'm racing one of the most demanding triathlons in the world to raise money for cancer research. This is personal.",
    url: "https://liviuorehovschi.com/alcatraz",
    siteName: "Liviu Orehovschi",
    type: "website",
    images: [
      {
        url: "/bike.jpg",
        width: 1200,
        height: 630,
        alt: "Liviu training for Escape from Alcatraz triathlon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Me Escape Alcatraz for the American Cancer Society",
    description:
      "I'm racing one of the most demanding triathlons in the world to raise money for cancer research.",
    images: ["/bike.jpg"],
  },
};

export default function AlcatrazLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
