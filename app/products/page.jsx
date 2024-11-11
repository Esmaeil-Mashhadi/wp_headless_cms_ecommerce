"use client";

import { useEffect, useState } from "react";
import Card from "./productCard/Card";

const Products = () => {
  const [products, setProducts] = useState();
  const [page , setPage] = useState(1)
  const [isLoading , setIsLoading] =useState(true)

  useEffect(() => {
    const getProduct = async () => {
        setIsLoading(true)
      const res = await fetch(
        `https://boosboosshop.com/wp-json/wc/v3/products?page=${page}&per_page=30`,
        {
          headers: {
            Authorization:
              "Basic " +
              Buffer.from(
                `ck_a012d09ee0f760ab7b85d3d2c42bc27750be1004:cs_fcc7a67dfbf700391e0bb5cd16d9a10fb4615d56`
              ).toString("base64"),
          },
        }
      );

      const products = await res.json();
      setProducts(products);
      setIsLoading(false)
    };
    getProduct();
  }, [page]);



  return (
    <div className=" grid grid-cols-5 gap-10 mb-8">
      {!products  || isLoading? (
        <h1>Loading ...</h1>
      ) : (
        products.map((item, index) => <Card key={index} product={item} />)
      )}

      <div className="flex gap-5 items-center w-full fixed bottom-0 justify-center bg-white text-black ">
        <button onClick={()=>setPage((prev)=> (prev+1))}>next page</button>
        <button onClick={()=>setPage((prev)=>(prev-1))}>prev page</button>
      </div>
    </div>
  );
};

export default Products;