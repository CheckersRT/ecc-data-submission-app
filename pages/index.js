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

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
