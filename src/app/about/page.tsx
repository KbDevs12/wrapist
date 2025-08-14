import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] flex items-center justify-center bg-primary text-primary-foreground">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-2">Tentang Kami</h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Solusi lengkap untuk kemasan produk Anda — kustomisasi desain,
            bahan, dan ukuran sesuai kebutuhan bisnis.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Kenapa Memilih Kami?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Kami adalah penyedia jasa kustomisasi packaging yang mengutamakan
            kualitas dan estetika. Dengan pengalaman bertahun-tahun, kami
            membantu UMKM hingga perusahaan besar menciptakan kemasan yang
            menarik, fungsional, dan ramah lingkungan.
          </p>
          <Button asChild>
            <a href="/contact">Hubungi Kami</a>
          </Button>
        </div>
        <div className="relative h-[300px] md:h-full">
          <Image
            src="/images/LOGOSAMPING.png"
            alt="Custom Packaging"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Value Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Nilai yang Kami Tawarkan
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Kustomisasi Penuh",
                desc: "Bebas memilih bahan, desain, warna, dan ukuran sesuai kebutuhan brand Anda.",
              },
              {
                title: "Kualitas Premium",
                desc: "Menggunakan material terbaik untuk menjaga kualitas dan daya tahan kemasan.",
              },
              {
                title: "Harga Kompetitif",
                desc: "Memberikan solusi terjangkau tanpa mengorbankan kualitas.",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
