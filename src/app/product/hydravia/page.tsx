"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProductDetailPage() {
  const [mainImage, setMainImage] = useState("/images/cream.png");
  const [subImages, setSubImages] = useState([
    "/images/cream1.png",
    "/images/cream2.png",
    "/images/cream3.png",
  ]);

  const swapImage = (index: number) => {
    const newMain = subImages[index];
    const newSubs = [...subImages];
    newSubs[index] = mainImage;
    setMainImage(newMain);
    setSubImages(newSubs);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("saya ingin custom packaging dong!");
    window.open(`https://wa.me/6285183266352?text=${message}`, "_blank");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <Card className="overflow-hidden mb-4">
          <Image
            src={mainImage}
            alt="Main Product"
            width={600}
            height={400}
            className="w-full h-[300px] object-cover"
          />
        </Card>
        <div className="flex items-center justify-center gap-4 mb-4">
          {subImages.map((img, i) => (
            <Card
              key={i}
              className="overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary transition"
              onClick={() => swapImage(i)}
            >
              <Image
                src={img}
                alt={`Thumbnail ${i + 1}`}
                width={200}
                height={150}
                className="w-[120px] h-[100px] object-cover"
              />
            </Card>
          ))}
        </div>
        <Button className="w-full text-lg" size="lg" onClick={handleWhatsApp}>
          Pesan Sekarang
        </Button>
      </div>

      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-4">Custom Packaging Premium</h1>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Kami menyediakan jasa kustomisasi packaging untuk meningkatkan
          branding produk Anda. Mulai dari desain, bahan, hingga finishing,
          semua bisa disesuaikan sesuai kebutuhan.
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Desain sesuai permintaan</li>
          <li>• Bahan berkualitas tinggi</li>
          <li>• Waktu produksi cepat</li>
          <li>• Cocok untuk UMKM & perusahaan</li>
        </ul>
      </div>
    </div>
  );
}
