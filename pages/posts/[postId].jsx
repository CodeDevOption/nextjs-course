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

export const getStaticProps = async ({ params }) => {
  const { postId } = params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: {
      postId: `${post.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
