"use client";
import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";

function CartPage() {
  const { cartItems, clearCart } = useCart();

  const router = useRouter();

  let total = 0;
  cartItems.map((item) => {
    total += item.item.price * item.quant;
  });

  const [processing, setProcessing] = useState(false);

  const processPay = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      alert("Pago realizada con exito! Gracias por tu compra.");
      clearCart();
    }, 2000);
  };

  return (
    <div className="w-[100vw] min-h-[100vh] pt-20 pb-10">
      <h1 className="text-[30px] flex gap-4 mt-4 items-center ml-[5vw] font-medium mb-4 text-[#440099]">
        Tu carrito
        <ShoppingCartIcon className="h-8 w-8" stroke="1" />
      </h1>
      <div className="flex flex-col items-center md:items-start md:flex-row md:justify-center mx-auto w-full gap-6">
        <div className="flex flex-col  gap-2 w-full md:w-[60vw]">
          {cartItems.length == 0 ? (
            <p className="my-3 text-center font-medium mx-0 md:mx-4">
              Parece que tu carrito esta vacio,
              <span
                className="text-[#440099] hover:underline cursor-pointer ml-2"
                onClick={() => router.push("/")}
              >
                volver al inicio.
              </span>
            </p>
          ) : (
            cartItems.map((item, index) => {
              return <CartItem key={index} product={item} index={index} />;
            })
          )}
        </div>
        <div className="w-full px-4 md:w-[30vw]">
          <div className="flex flex-col md:px-10 py-4 w-full rounded-md bg-slate-50">
            {cartItems.leght == 0 ? (
              <p className="my-3 font-medium mx-4">Carrito vacio...</p>
            ) : (
              <div>
                <div className="flex text-[20px] justify-between px-6 mb-2">
                  <p>Producto</p>
                  <p>Precio</p>
                </div>
                {cartItems.map((item, index) => {
                  console.log(item.quant);
                  let itemsArray = [];
                  for (let i = 0; i < item.quant; i++) {
                    itemsArray.push(
                      <div
                        className="flex justify-between px-1 py-2 w-full"
                        key={i}
                      >
                        <p className="font-normal max-w-[75%] line-clamp-1 text-[18px] text-black">
                          {item.item.name}
                        </p>
                        <p className="font-normal text-center text-[18px] text-black">
                          USD {item.item.price}
                        </p>
                      </div>
                    );
                  }
                  return itemsArray;
                })}
              </div>
            )}
            <div className="flex justify-between border-t-[1px] border-[#3c3b3b61] px-2 py-4 w-full">
              <p className="font-normal text-[18px] text-black">Total</p>
              <p className="font-semibold text-[18px] text-black">
                USD {total.toFixed(2)}
              </p>
            </div>
          </div>
          <button
            onClick={() => processPay()}
            className={`w-full bg-[#7D67BC] hover:bg-[#440099] ${
              processing && "hover:bg-[#bbace2] bg-[#bbace2]"
            } duration-200 text-white text-[18px] font-normal py-4 rounded-md mt-4`}
            disabled={processing}
          >
            {processing ? "Procesando tu pago..." : "Pagar"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
