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
        This is the Home Page
        <Link href="/products">Products</Link>
        <Link href="/blogs">Blogs</Link>
        <button onClick={() => router.push("/docs/introduction")}>Doc</button>
      </main>
    </>
  );
};

export default Home;
