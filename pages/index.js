import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <main className={styles.container}>This is the Home Page</main>
    </>
  );
};

export default Home;
