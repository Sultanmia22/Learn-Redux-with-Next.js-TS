// app/(ShopingApp)/shopingapp/products/[id]/page.tsx
import ProductDetails from "@/Components/ShoppingApp/Product/ProductDetails";
import productData from "@/data/products.json";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailsPage({ params }: PageProps) {
  const { id } = await params;
  
  const product = productData.find((p) => p.id === Number(id));


  if (!product || !product.image) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ProductDetails product={product} />
    </div>
  );
}