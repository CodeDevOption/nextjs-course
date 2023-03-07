import { Comment } from "@/components";
import Header from "@/components/Header";
import Link from "next/link";
import useSWR from "swr";

const Posts = ({ comments }) => {
  return (
    <div>
      <h1>List of Posts</h1>
      {comments.map((comment) => (
        <Link key={comment.id} href={`/posts/?id=${comment.id}`}>
          <div>
            <Comment {...comment} />
          </div>
          <br />
        </Link>
      ))}
    </div>
  );
};

Posts.getLayout = (post) => {
  return (
    <>
      <Header />
      {post}
    </>
  );
};

export default Posts;

export const getServerSideProps = async ({ query }) => {
  const { id } = query;
  const reqStr = id ? `/?id=${id}` : "";
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments${reqStr}`
  );
  const comments = await res.json();

  return {
    props: {
      comments,
    },
  };
};
