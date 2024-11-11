import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-black text-white w-full justify-around flex p-10">
      <Link className=" font-bold text-xl" href={"/profile"}>
        پروفایل
      </Link>
      <Link className="font-bold text-xl" href={"/cart"}>
        سبد خرید
      </Link>

      <Link className="font-bold text-xl" href={'/products'}>
            محصولات
      </Link>
    </div>
  );
};

export default Header;
