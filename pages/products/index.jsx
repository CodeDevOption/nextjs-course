import Link from "next/link";
import React from "react";

const Product = () => {
  return (
    <div>
      Product Home Page
      <Link href={"/products/1"}>Product One</Link>
      <Link href={"/products/2"}>Product Two</Link>
      <Link href={"/products/3"}>Product Three</Link>
    </div>
  );
};

export default Product;
