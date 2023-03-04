import { Post } from "@/components";
import React from "react";

const Params = ({ post }) => {
  return (
    <div>
      <Post {...post} />
    </div>
  );
};

export default Params;

export const getServerSideProps = async ({ params }) => {
  const { postId } = params;
  console.log("ReValidate");
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await res.json();

  if (!post.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};
