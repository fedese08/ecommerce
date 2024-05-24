import React, { useState } from "react";
import DropdownComponent from "./DropdownComponent";
import { categories } from "../../mock/data";
import { Input } from "@nextui-org/react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function Filter({ setInputSearch, setCategory }) {
  return (
    <div className="w-full justify-center flex gap-4 text-start ">
      <Input
        isClearable
        onClear={() => setInputSearch("")}
        radius="lg"
        placeholder="Buscar producto"
        className="w-[60vw] bg-white rounded-md px-2 py-2 shadow-md"
        onChange={(e) => setInputSearch(e.target.value)}
        startContent={<MagnifyingGlassIcon className="h-6 stroke-[2px]" />}
      />
      <DropdownComponent
        title={"Categoria"}
        items={categories}
        setCategory={setCategory}
      />
    </div>
  );
}
