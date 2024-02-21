import styles from "../../styles/Upload.module.css"
import Head from "next/head"
import ImageUploadForm from "../../components/ImageUploadForm/ImageUploadForm"
import ImageList from "../../components/ImageList/ImageList"
import { useState } from "react"
import ResultsForm from "../../components/ResultsForm/ResultsForm"

export default function Upload({ params }) {
  const [sheetMusicData, setSheetMusicData] = useState()
  const [isLoading, setIsLoading] = useState(false)


  return (
  <div className={styles.container}>
    <Head>
      <title>Upload</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ImageUploadForm setData={setSheetMusicData} setIsLoading={setIsLoading}/>
    {/* <ImageList/> */}
    {sheetMusicData ?
    <ResultsForm data={sheetMusicData}/>
     :
     isLoading ? <p>...loading...</p> : null }
  </div>
  )
}
