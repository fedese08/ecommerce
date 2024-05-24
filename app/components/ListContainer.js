"use client";
import React, { useEffect, useState } from "react";
import Listing from "./Listing";
import Filter from "./Filter";
import { products } from "../../mock/data";

function ListContainer() {
  const [productsList, setProductsList] = useState(products);

  const [inputSearch, setInputSearch] = useState("");
  const [category, setCategory] = useState("");

  const [filteredProducts, setFilteredProducts] = useState(productsList);

  useEffect(() => {
    if (category != "Todos los productos") {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      setProductsList(filteredProducts);
      setFilteredProducts(filteredProducts);
    } else {
      setProductsList(products);
      setFilteredProducts(products);
    }
    if (inputSearch != "") {
      const filtered = productsList.filter((product) =>
        product.name.toLowerCase().includes(inputSearch.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [inputSearch, category]);

  return (
    <div className="flex flex-col w-full mx-auto gap-4">
      <div className="w-full h-fit my-4">
        <Filter setInputSearch={setInputSearch} setCategory={setCategory} />
      </div>
      <div className="w-full mt-4">
        <Listing products={filteredProducts} />
      </div>
    </div>
  );
}

export default ListContainer;
