"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Category = ({ img, category, listing }) => {
  const router = useRouter();

  return (
    <div className="h-fit pb-4 flex flex-col gap-4">
      <img src={img} className="w-full" />
      <div className="flex flex-col gap-1 px-2">
        <h3 className="font-semibold">{category}</h3>
        {listing.map((list, index) => (
          <p
            className="cursor-pointer hover:opacity-70"
            key={index}
            onClick={() => router.push(`/products/${list.toLowerCase()}`)}
          >
            {list}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Category;
