"use client";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Badge,
} from "@nextui-org/react";
import { categories } from "../../mock/data";
import { useRouter } from "next/navigation";
import { useCart } from "../../context/CartContext";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const { cartQuantity } = useCart();

  const router = useRouter();

  const checkScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div
      className={`fixed flex flex-col shadow-lg  z-50  duration-200 w-full text-[#7D67BC]  ${
        isScrolled ? "shadow-lg bg-white text-[#7D67BC]" : ""
      }`}
    >
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className={`text-[#7D67BC]  ${
          isScrolled ? " bg-white text-[#7D67BC]" : ""
        }`}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <h1
              onClick={() => router.push("/")}
              className="text-xl cursor-pointer ml-4 md:m-0 lg:m-0 font-bold min-w-[15vw] w-fit"
            >
              E-commerce
            </h1>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-20" justify="center">
          <NavbarItem>
            <p
              onClick={() => router.push("/")}
              className="text-[#7D67BC] cursor-pointer"
            >
              Productos
            </p>
          </NavbarItem>
          <NavbarItem>
            <p
              onClick={() => router.push("/")}
              className="text-[#7D67BC] cursor-pointer"
            >
              Acerca de
            </p>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className=" lg:flex">
            <div
              className="w-[20vw] flex justify-end"
              onClick={() => router.push("/cart")}
            >
              {cartQuantity > 0 ? (
                <Badge
                  content={cartQuantity}
                  shape="circle"
                  className="bg-white text-[#7D67BC] text-[12px] font-bold"
                >
                  <ShoppingCartIcon
                    className="h-6 w-6 hover:scale-110 duration-200 cursor-pointer  "
                    stroke="1"
                  />
                </Badge>
              ) : (
                <ShoppingCartIcon
                  className="h-6 w-6 hover:scale-110 duration-200 cursor-pointer  "
                  stroke="1"
                />
              )}
            </div>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="bg-white max-h-[200px] flex flex-col justify-center gap-8 border-b-2 border-[#7e67bc9a] bg-opacity-75">
          <NavbarMenuItem>
            <div
              onClick={() => {
                router.push("/"), setIsMenuOpen(false);
              }}
              className="w-full text-center cursor-pointer text-[#7D67BC]"
            >
              <p className="text-[25px] mx-auto">Productos</p>
            </div>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <div
              onClick={() => {
                router.push("/about"), setIsMenuOpen(false);
              }}
              className="w-full text-center cursor-pointer text-[#7D67BC]"
            >
              <p className="text-[25px] mx-auto">Acerca de</p>
            </div>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
      <div
        className={`duration-200 flex cursor-default  gap-4 text-center bg-[#7D67BC] items-center justify-center w-full ${
          isScrolled ? "opacity-100 h-8" : "opacity-0 h-0"
        }`}
      >
        <p className="text-white font-semibold text-[14px] md:text-[16px] lg:text-[16px]  text-center">
          % MEGA SALE
        </p>
        <p className="text-white font-normal text-[14px] md:text-[16px] lg:text-[16px]  text-center">
          Aprovecha nuestras ofertas increibles
        </p>
      </div>
    </div>
  );
}
