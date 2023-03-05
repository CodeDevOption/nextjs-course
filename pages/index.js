import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <main className={styles.container}>
        This is the Home Page
        <Link href="/products">Products</Link>
        <Link href="/blogs">Blogs</Link>
      </main>
    </>
  );
};

export default Home;
