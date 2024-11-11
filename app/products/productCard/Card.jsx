import React from "react";

const Card = ({ product }) => {


  const addToCartHandler = async()=>{
    const res = await fetch("https://yourdomain.com/wp-json/wc/store/cart/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: product.id,
        quantity: 1
      })
    });
    const result = res.json()
    console.log(result)
  }
  return (
    <div className="flex m-3 flex-col gap-3 w-full h-[450px] items-center bg-gray-600 rounded-lg p-4">
      <h2 className="text-center font-bold text-lg">{product.name}</h2>
      <img  src={product.images[0]?.src} className="w-full h-full rounded-lg" />
      <p >{product.price} تومان</p>

      <div className="w-full flex justify-between gap-2">
        <button onClick={addToCartHandler} className=" bg-slate-700 p-2 rounded-lg">افزودن به سبد خرید</button>
        <button className="bg-pink-400 text-black p-2 rounded-lg">افزودن به علاقه مندی ها </button>
      </div>
    </div>
  );
};

export default Card;
