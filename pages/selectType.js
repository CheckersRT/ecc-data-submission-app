import styles from "../styles/SelectType.module.css";
import Head from "next/head";

export default function SelectType({ params }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Select Type</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 className={styles.title}>What kind of sheet music do you have?</h2>
      <div className={styles.grid}>
        <a href="/upload/printedPublication" className={styles.card}>
          <h3>Print publication &rarr;</h3>
          <p>A printed book containing multiple pieces of music.</p>
        </a>

        <a href="/upload/singleSheet" className={styles.card}>
          <h3>Single sheet &rarr;</h3>
          <p>A single printed piece of sheet music.</p>
        </a>

        <a
          href="/upload/downloadCopy"
          className={styles.card}
        >
          <h3>Download copy &rarr;</h3>
          <p>A piece of sheet music downloaded from a website.</p>
        </a>

      </div>
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
