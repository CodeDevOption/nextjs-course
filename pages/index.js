import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <main className={styles.container}>
        Pre Rendering
        <Link href={"/posts"}>Posts</Link>
      </main>
    </>
  );
};

export default Home;
