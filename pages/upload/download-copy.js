import styles from "../../styles/Upload.module.css"
import Head from "next/head"
import ImageUploadForm from "../../components/ImageUploadForm/ImageUploadForm"
import ImageList from "../../components/ImageList/ImageList"

export default function Upload({ params }) {


  return (
  <div className={styles.container}>
    <Head>
      <title>Upload</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ImageUploadForm/>
    <ImageList/>
  </div>
  )
}
