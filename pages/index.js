import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import useSWR from "swr";

export default function Home() {

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Every Copy Counts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Hello,</h1>

        <p className={styles.description}>
          Welcome to the Every Copy Counts data submission app.
        </p>
        <button>
          <Link href="/selectType">Upload</Link>
        </button>
      </main>

      <footer>
        <a
          href="https://www.everycopycounts.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Every Copy Counts
        </a>
      </footer>
    </div>
  );
}
