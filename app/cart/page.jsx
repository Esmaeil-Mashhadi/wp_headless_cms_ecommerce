import React from 'react'

const page = () => {

    fetch("https:boosboosshop.com/wp-json/wc/store/cart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include" 
      })
        .then(response => response.json())
        .then(cartData => {
          console.log("Cart Items:", cartData);
        })
        .catch(error => console.error("Error fetching cart items:", error));
      
  return (
    <div>
        this is the cart 
    </div>
  )
}

export default page