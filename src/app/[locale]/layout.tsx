import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Poppins, Caveat, Mrs_Saint_Delafield } from "next/font/google";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { isLocale, locales, localeDirection } from "@/lib/i18n";
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-caveat",
  display: "swap",
});

/* Stands in for "Thesignature", the licensed face the Figma signature is set
   in. Drop the real font in and point --font-signature at it to match. */
const signature = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-signature-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asadtech.com"),
  title: {
    default: "Asadtech — Cooling, Cold Rooms & Lifting Solutions in Saudi Arabia",
    template: "%s | Asadtech",
  },
  description:
    "Asad Advanced Technologies supplies ISO-certified transport refrigeration, cold rooms, tail lifters, and spider cranes across Saudi Arabia.",
  openGraph: {
    type: "website",
    siteName: "Asadtech",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    /* The font variables must live on <html>: the theme tokens that reference
       them are declared at :root, and a var() pointing at an undefined
       property makes the whole declaration invalid. */
    <html
      lang={locale}
      dir={localeDirection[locale]}
      className={`${poppins.variable} ${caveat.variable} ${signature.variable}`}
    >
      <body className="antialiased">
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
