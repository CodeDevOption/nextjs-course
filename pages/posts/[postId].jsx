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

export const getServerSideProps = async (context) => {
  const { params, req, res, query } = context;
  console.log(req.headers.cookie);
  const { name } = query;
  if (name == "Sadaruwan") {
    res.setHeader("Set-Cookie", ["name=Sadaruwan"]);
  }
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await resp.json();

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
