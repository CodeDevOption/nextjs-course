import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { getSession, useSession } from "next-auth/react";
const Home = () => {
  const router = useRouter();

  const { data, status } = useSession();
  console.log(data, status);
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <main className={styles.container}>
        Pre Rendering
        <Link href={"/api/auth/signout"}>SignOut</Link>
        <Link href={"/posts"}>Posts</Link>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  console.log("this is the session", session);
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: true,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
