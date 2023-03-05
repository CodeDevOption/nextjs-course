import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1>Blogs Page</h1>
      <Link href={"/blogs/first"}>First Blog</Link>
      <Link href={"/blogs/second"} replace>
        Second Blog
      </Link>
    </div>
  );
};

export default Blogs;
