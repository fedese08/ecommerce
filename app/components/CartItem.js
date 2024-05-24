import React from "react";
import { useCart } from "../../context/CartContext";

function CartItem({ product, index }) {
  const { removeItemFromCart } = useCart();

  return (
    <div className="flex justify-between items-center px-4 md:px-10 py-4 w-full rounded-md bg-slate-50">
      <div className="flex w-full md:w-[80%] items-center">
        <img src={product?.item.image[0]} className="h-[120px] " alt="" />
        <div className="flex justify-between pr-4 md:pr-2 items-center w-full pl-6">
          <p className="font-normal line-clamp-2 max-w-[70%] md:max-w-[85%] text-[18px] text-black">
            {product?.item.name || "Product"}
          </p>
          <p className="font-normal line-clamp-2 text-[18px] text-black">
            x {product?.quant || "Cant"}
          </p>
        </div>
      </div>
      <button
        className="text-[#f47b7b]"
        onClick={() => removeItemFromCart(product.item.id)}
      >
        Quitar
      </button>
    </div>
  );
}

export default CartItem;
