import { Post } from "@/components";
import Link from "next/link";
import React from "react";

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>List of Posts</h1>
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <div>
            <Post {...post} />
          </div>
          <br />
        </Link>
      ))}
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
