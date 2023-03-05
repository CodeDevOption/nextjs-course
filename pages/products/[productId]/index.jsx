import { useRouter } from "next/router";
import React from "react";

const Product = () => {
  const router = useRouter();
  const { productId } = router.query;
  return <div>Product product Id:{productId}</div>;
};

export default Product;
