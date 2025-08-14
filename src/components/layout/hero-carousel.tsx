"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useRef } from "react";

export function HeroCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const images = ["/images/1.png", "/images/2.png"];

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[autoplay.current]}
      className="w-full max-w-4xl mx-auto"
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
              <Image
                src={src}
                alt="Carousel Image"
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
