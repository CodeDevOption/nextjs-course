import { Post } from "@/components";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Params = () => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { postId } = router.query;

  useEffect(() => {
    const dataFetch = async () => {
      if (postId != undefined) {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        const data = await res.json();
        setPost(data);
      }
    };
    dataFetch().then(() => {
      setIsLoading(false);
    });
  }, [postId]);

  if (isLoading && postId == undefined) return <h1>Loading...</h1>;

  return (
    <div>
      <Post {...post} />
      {postId}
    </div>
  );
};

export default Params;
