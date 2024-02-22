import styles from "../../styles/Upload.module.css"
import Head from "next/head"
import ImageUploadForm from "../../components/ImageUploadForm/ImageUploadForm"
import { useState } from "react"
import ResultsForm from "../../components/ResultsForm/ResultsForm"
import { useRouter } from 'next/router'

export default function Upload({ params }) {
  const [sheetMusicData, setSheetMusicData] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const dataType = router.query.dataType

  return (
  <div className={styles.container}>
    <Head>
      <title>Upload</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ImageUploadForm setData={setSheetMusicData} setIsLoading={setIsLoading}/>
    {/* <ImageList/> */}
    {sheetMusicData ?
    <ResultsForm data={sheetMusicData} dataType={dataType}/>
     :
     isLoading ? <p>...loading...</p> : null }
  </div>
  )
}
