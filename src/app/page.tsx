"use client";

import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import CategoryList from "@/components/CategoryList";
import ListPage from "./list/page";
import { WixClientContext } from "@/context/wixContex";
import { useContext, useEffect } from "react";

const HomePage = () => {
  const wixClient = useContext(WixClientContext);

  useEffect(() => {
    const getProducts = async () => {
      const res = await wixClient.products.queryProducts().find();
      console.log(res);
    };

    getProducts();
  }, [wixClient]);

  return (
    <div className="">
      <Slider />
      <div className="mt-24 md:px-8 lg:px-16 xl:px-32 2xl:64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl md:px-8 lg:px-16 xl:px-32 2xl:64 mb-12">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 md:px-8 lg:px-16 xl:px-32 2xl:64">
        <h1 className="text-2xl">New Products</h1>
        <ListPage />
      </div>
    </div>
  );
};

export default HomePage;
