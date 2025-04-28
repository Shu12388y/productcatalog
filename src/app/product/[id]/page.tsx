"use client";

import React from "react";
import { useFetch } from "@/hooks/useFetch";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Star } from "lucide-react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

function Page({ params }: { params: { id: string } }) {
  const { data, error, loading } = useFetch<Product>(
    `https://fakestoreapi.com/products/${params.id}`
  );

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-xl font-medium">Loading product details...</div>
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

  // Check if data exists before rendering
  if (!data) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-xl font-medium">Product not found</div>
      </div>
    );
  }

  if (data) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Product Image */}
          <div className="flex items-center justify-center rounded-lg bg-white p-6 shadow-md">
            <Image
              width="1000"
              height="1000"
              src={data.image}
              alt={data.title }
              className="h-64 w-full object-contain md:h-96"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <span className="mb-2 inline-block items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
              {data.category}
            </span>
            <h1 className="mb-2 text-2xl font-bold md:text-3xl">
              {data.title}
            </h1>

            <div className="mb-4 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.round(data.rating.rate)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {data.rating.rate} ({data.rating.count} reviews)
              </span>
            </div>

            <div className="mb-6 text-3xl font-bold text-gray-900">
              ${data.price.toFixed(2)}
            </div>

            <p className="mb-6 text-gray-700">{data.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
