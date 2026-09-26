// components/ProductCard.tsx
import type { IProducts } from "@/types/product.interaface";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: IProducts;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
     
      
     
      <Link href={`/shopingapp/products/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image || "https://via.placeholder.com/500"}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      
      <div className="p-4 space-y-3 flex flex-col flex-1">
        {/* Category Badge */}
        <span className="inline-block px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full w-fit">
          {product.category}
        </span>

        {/* Title - Clickable */}
        <Link 
          href={`/shopingapp/products/${product.id}`}
          className="block font-semibold text-foreground line-clamp-1 hover:text-cyan-600 transition-colors"
        >
          {product.title}
        </Link>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

       
        <div className="flex-1"></div>

        {/* Price & Quantity */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-cyan-600">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-xs text-muted-foreground">
            Stock: {product.quantity}
          </span>
        </div>

        {/* ✅ Add to Cart Button - এখন সবসময় নিচে থাকবে */}
        <button className="w-full py-2.5 px-4 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors duration-300">
          <ShoppingCart size={18} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}