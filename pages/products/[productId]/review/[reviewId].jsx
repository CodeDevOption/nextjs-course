import { useRouter } from "next/router";
import React from "react";

const Review = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <div>
      This is the Product id : {productId} Review Id: {reviewId}{" "}
    </div>
  );
};

export default Review;
