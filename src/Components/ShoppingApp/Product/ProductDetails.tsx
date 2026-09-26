// components/ProductDetails.tsx
import type { IProducts } from "@/types/product.interaface";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

interface ProductDetailsProps {
  product: IProducts;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {/* Product Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-muted">
        <Image
          src={product.image} 
          alt={product.title || "Product image"} 
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-between gap-6">
        <div className="space-y-4">
          <span className="inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
            {product.category}
          </span>

          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            {product.title}
          </h1>

          <p className="text-base leading-relaxed text-muted-foreground">
            {product.description}
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between border-y border-border py-4">
            <span className="text-3xl font-bold text-cyan-600">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-muted-foreground">
              Stock: {product.quantity}
            </span>
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-cyan-700"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}