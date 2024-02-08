import styles from "../../styles/Upload.module.css"
import Head from "next/head"
import ImageUploadForm from "../../components/ImageUploadForm/ImageUploadForm"
import ImageList from "../../components/ImageList/ImageList"
import { useState } from "react"
import Results from "../../components/Results/Results"

export default function Upload({ params }) {
  const [sheetMusicData, setSheetMusicData] = useState({})


  return (
  <div className={styles.container}>
    <Head>
      <title>Upload</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ImageUploadForm setData={setSheetMusicData}/>
    {sheetMusicData && <ImageList/>}
    <Results data={sheetMusicData}/>
  </div>
  )
}
