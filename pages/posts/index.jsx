import { Post } from "@/components";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const data = await res.json();
      setPost(data);
      setIsLoading(false);
    };
    dataFetch();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
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
