import styles from "../../styles/Upload.module.css"
import Head from "next/head"

export default function Upload({ params }) {

  return (
  <div className={styles.container}>
    <Head>
      <title>Upload</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <p>Download-copy</p>
  </div>
  )
}
