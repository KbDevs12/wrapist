"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground border-t border-border">
      <div className="container mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <Image
            src="/images/LOGOSAMPING.png"
            alt="Custom Packaging Logo"
            width={180}
            height={60}
            className="mb-3"
          />
          <p className="text-sm max-w-md">
            Kami menyediakan layanan pembuatan kemasan custom untuk meningkatkan
            branding produk Anda. Kualitas premium, desain fleksibel, dan proses
            mudah.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground">Menu</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground">Ikuti Kami</h4>
          <div className="flex gap-3 mt-3">
            <Link
              href="#"
              aria-label="Facebook"
              className="hover:text-foreground"
            >
              <Facebook />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="hover:text-foreground"
            >
              <Instagram />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="hover:text-foreground"
            >
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-8 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Wrapist. All rights reserved.
      </div>
    </footer>
  );
}
