import type { Metadata } from "next";
import localFont from "next/font/local";

import Navbar from "@/components/layout/navbar";
import "./globals.css";
import Footer from "@/components/layout/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Wrapist - Custom Packaging Premium untuk Brand & UMKM",
  description:
    "Wrapist menyediakan layanan custom packaging dengan desain unik, bahan berkualitas, dan harga terjangkau. Cocok untuk brand dan UMKM yang ingin tampil premium.",
  keywords: [
    "wrapist",
    "custom packaging",
    "kemasan produk",
    "cetak kemasan",
    "packaging unik",
    "kotak custom",
    "desain kemasan",
    "kemasan premium",
    "kemasan murah",
    "kemasan UMKM",
  ],
  authors: [{ name: "Wrapist" }],
  creator: "Wrapist",
  openGraph: {
    title: "Wrapist - Custom Packaging Premium untuk Brand & UMKM",
    description:
      "Layanan custom packaging dengan desain unik, bahan berkualitas, dan harga terjangkau. Cocok untuk brand dan UMKM.",
    url: "https://wrapist.vercel.app",
    siteName: "Wrapist",
    images: [
      {
        url: "https://wrapist.vercel.app/images/2.png",
        width: 1200,
        height: 630,
        alt: "Wrapist Custom Packaging",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wrapist - Custom Packaging Premium untuk Brand & UMKM",
    description:
      "Layanan custom packaging dengan desain unik, bahan berkualitas, dan harga terjangkau. Cocok untuk brand dan UMKM.",
    images: ["https://wrapist.vercel.app/images/2.png"],
  },
  metadataBase: new URL("https://wrapist.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 container mx-auto p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
