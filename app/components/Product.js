import React from "react";
function Product({ product }) {
  return (
    <div className="flex flex-col h-[350px] justify-between pb-4 gap-2 rounded-lg overflow-hidden mb-4 hover:shadow-lg cursor-pointer relative bg-white">
      <img src={product?.image[0]} alt={product?.name} className="w-full " />
      {product?.sale ? (
        <p className="bg-[#440099] text-white absolute right-0 px-1 rounded-sm text-[18px]">
          %{product.sale} OFF
        </p>
      ) : (
        ""
      )}
      <div className="flex flex-col gap-2 px-2 text-center">
        <h3 className=" line-clamp-2 h-[50px]">{product.name}</h3>
        {product?.sale ? (
          <div className="flex justify-end gap-2">
            <p className="font-light text-right line-through text-sm text-gray-400">
              USD {product.price.toFixed(2)}
            </p>
            <div className="">
              <p className="font-semibold text-right">
                USD {(product.price * (1 - product.sale / 100)).toFixed(2)}
              </p>
            </div>
          </div>
        ) : (
          <p className="font-semibold text-right">
            USD {product.price.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
}

export default Product;
