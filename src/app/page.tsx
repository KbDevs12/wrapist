import { HeroCarousel } from "@/components/layout/hero-carousel";
import MenuWrapper from "@/components/layout/menut-wrapper";
import Review from "@/components/layout/review";

export default function Page() {
  return (
    <div>
      <HeroCarousel />
      <section className="py-10">
        <h2 className="text-2xl font-bold text-center mb-6">Produk Kami</h2>
        <MenuWrapper />
        <hr className="mt-10 border-t border-muted-foreground/20 w-1/2 mx-auto" />
      </section>
      <section className="py-10">
        <h2 className="text-2xl font-bold text-center mb-6">Testimoni</h2>
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-muted-foreground text-center mb-6">
            Apa kata pelanggan kami tentang layanan dan produk kami.
          </p>
          <Review />
        </div>
      </section>
    </div>
  );
}
