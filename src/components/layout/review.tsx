"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Owner, Sweet Treats",
    review:
      "Pelayanan cepat, desain packaging sesuai permintaan, dan kualitas bahan sangat memuaskan!",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    name: "Michael Tan",
    role: "CEO, Crafty Co.",
    review:
      "Sangat profesional! Hasil cetak jelas dan warna konsisten. Akan pesan lagi.",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Lisa Wong",
    role: "Founder, Bloom & Co.",
    review:
      "Tim sangat membantu dalam memilih desain terbaik. Packaging membuat produk saya terlihat premium.",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    name: "Andi Prasetyo",
    role: "UMKM Lokal",
    review:
      "Harga terjangkau tapi kualitas tidak murahan. Recommended untuk UMKM seperti saya.",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Jessica Lim",
    role: "Marketing Manager",
    review:
      "Sangat fleksibel dalam custom ukuran dan desain. Proses pemesanan juga mudah.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

export default function Review() {
  const [api, setApi] = useState<CarouselApi | null>(null);

  return (
    <div className="relative max-w-xl mx-auto">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {reviews.map((r, index) => (
            <CarouselItem key={index} className="md:basis-full">
              <Card className="p-6 shadow-lg relative">
                <CardContent className="flex flex-col items-center text-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={r.avatar} alt={r.name} />
                    <AvatarFallback>{r.name[0]}</AvatarFallback>
                  </Avatar>
                  <p className="text-gray-600 italic">"{r.review}"</p>
                  <div>
                    <p className="font-semibold">{r.name}</p>
                    <p className="text-sm text-gray-500">{r.role}</p>
                  </div>
                </CardContent>
                {/* Tombol di pojok kanan bawah */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <CarouselPrevious className="static translate-y-0" />
                  <CarouselNext className="static translate-y-0" />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
