import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardFooter, CardHeader } from "../ui/card";

const products = [
  {
    name: "Midnight Lavender",
    images: "/images/parfum.png",
  },
  {
    name: "Hydravia",
    images: "/images/cream.png",
  },
  {
    name: "Purely Powder",
    images: "/images/bedak.png",
  },
];

export default function Menu() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto py-10">
      {products.map((product) => (
        <Card
          key={product.name}
          className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="relative w-full aspect-square">
            <Image
              src={product.images}
              alt={product.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardHeader className="text-center">
            <h3 className="text-lg font-semibold">{product.name}</h3>
          </CardHeader>
          <CardFooter className="justify-center">
            <Link
              href={`/product/${encodeURIComponent(
                product.name.toLowerCase().replace(/\s+/g, "-")
              )}`}
            >
              <Button>Lihat Produk</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
