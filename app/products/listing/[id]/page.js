"use client";
import { useParams } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import { products } from "../../../../mock/data";
import { useState } from "react";
import { useCart } from "../../../../context/CartContext";
import { Image } from "@nextui-org/react";

function ProductDetails() {
  const params = useParams();

  const [product, setProduct] = useState();

  const [mainImage, setMainImage] = useState(0);

  const changeImage = (index) => {
    setMainImage(index);
  };

  const [viewAll, setViewAll] = useState(false);

  const { addItemToCart } = useCart();

  useEffect(() => {
    let prod = products.find(
      (product) => String(product.id) === String(params.id)
    );
    setProduct(prod);
  }, []);

  return (
    <main className="flex flex-col md:flex-row md:justify-center gap-10 h-fit w-[90vw] mx-auto mt-28 md:mt-30 mb-14 md:py-0">
      <div className="w-full md:w-[45vw] lg:w-[45vw] flex flex-col  gap-4 justify-center items-center duration-300">
        <Image
          src={product?.image[mainImage]}
          alt={product?.name}
          fallbackSrc
          isZoomed={true}
          className="w-full md:w-[25vw] rounded-md"
        />
        {product?.image.length == 1 ? null : (
          <div className="flex flex-row gap-2">
            {product?.image.map((img, index) => {
              return (
                <Image
                  key={index}
                  src={img}
                  alt={product?.name}
                  fallbackSrc
                  width={120}
                  className="cursor-pointer  rounded-md"
                  onClick={() => changeImage(index)}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="w-full md:w-[40vw] mx-auto h-fit p-8 flex flex-col  justify-start border-[1px] border-[rgba(22,22,22,0.21)] rounded-md">
        <h1 className="font-bold text-[27px]">{product?.brand}</h1>
        <h1 className="font-semibold text-[27px]">{product?.name}</h1>
        <p className={`mt-6 ${viewAll ? "" : "line-clamp-6"}`}>
          {product?.description}
        </p>
        <p
          className={`text-[#440099] mt-2 hover:underline cursor-pointer`}
          onClick={() => setViewAll(!viewAll)}
        >
          {viewAll ? "Ver menos" : "Ver todo"}
        </p>
        {product?.sale ? (
          <div className="flex flex-col gap-1 mt-4">
            <p className="font-light line-through text-gray-500">
              $ {product?.price}
            </p>
            <div className="flex gap-4 items-center">
              <p className="font-semibold">
                ${(product.price * (1 - product.sale / 100)).toFixed(2)}
              </p>
              <p className="bg-[#440099] text-white py-1 rounded-md text-[14px] px-2 ">
                %{product.sale} OFF
              </p>
            </div>
          </div>
        ) : (
          <p className="font-semibold mt-4">${product?.price}</p>
        )}
        <button
          onClick={() => addItemToCart(product)}
          className="text-white mt-10 duration-200 py-2 px4 rounded-md bg-[#6547b8] hover:bg-[#440099]"
        >
          COMPRAR
        </button>
      </div>
    </main>
  );
}

export default ProductDetails;
