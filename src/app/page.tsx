"use client";

import { useEffect, useMemo } from "react";
import { useFetch } from "@/hooks/useFetch";
import { useProductStore } from "@/store/store";
import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

// Define a proper type for product items
interface ProductItem {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function Home() {
  const { product, fetchProduct } = useProductStore();
  const { data, error, loading } = useFetch<ProductItem[]>(
    "https://fakestoreapi.com/products"
  );

  useEffect(() => {
    if (data) {
      fetchProduct(data);
    }
  }, [data, fetchProduct]);

  // Memoize the product grid to prevent unnecessary re-renders
  const productGrid = useMemo(() => {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {product.map((ele: ProductItem) => (
          <Link key={ele.id} href={`/product/${ele.id}`}>
            <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg p-2">
              <div className="pb-2">
                <span className="inline-block items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                  {ele.category}
                </span>
                <CardTitle className="mt-2 line-clamp-1 text-lg">
                  {ele.title}
                </CardTitle>
              </div>
              <CardContent className="flex-grow">
                <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-md">
                  <Image
                    width="1000"
                    height="1000"
                    src={ele.image}
                    alt={ele.title}
                    className="h-full w-full object-contain p-4"
                  />
                </div>
                <CardDescription className="line-clamp-3 text-sm text-gray-600">
                  {ele.description}
                </CardDescription>
                <div className="mt-4 flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">
                    {ele.rating.rate}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t bg-gray-50 px-6 py-3">
                <p className="text-xl font-bold text-gray-900">
                  ${ele.price.toFixed(2)}
                </p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    );
  }, [product]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-xl font-medium">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="rounded-lg bg-red-100 p-6 text-red-700">
          <h3 className="mb-2 font-bold">Error</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Product Collection
      </h1>
      {productGrid}
    </div>
  );
}