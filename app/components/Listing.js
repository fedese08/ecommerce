"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Product from "./Product";

function Listing({ products }) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 overflow-x-hidden sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[12px] mx-auto min-h-[100vh] ">
      {products?.map((product) => (
        <div
          key={product.id}
          onClick={() => router.push(`/products/listing/${product.id}`)}
        >
          {" "}
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}

export default Listing;
