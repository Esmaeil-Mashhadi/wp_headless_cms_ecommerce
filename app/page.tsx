// 'use client'
import { getAllCategories, getAllPosts } from "@/wp-urls/wp_url";
import Link from "next/link";
// import { useEffect, useState } from "react"

const page = async () => {
  // const [posts , setPosts] = useState<any>([])

  // useEffect(()=>{
  //   const getPosts  = async()=>{
  //     const posts = await getAllPosts()
  //     console.log(posts)
  //     setPosts(posts)
  //   }
  //   getPosts()

  // },[])

  // console.log(posts)

  const res = await fetch(
    `${process.env.WORDPRESS_URL}/wp-json/wc/v3/products/categories?per_page=100`,
    {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            `${process.env.WOOCOMMERCE_API_KEY}:${process.env.WOOCOMMERCE_API_SECRET}`
          ).toString("base64"),
      },
    }
  );
  const data = await res.json();

  return (
    <div className=" flex  flex-wrap gap-20">

    </div>
  );
};

export default page;
