import styles from "../../../styles/Upload.module.css"
import Head from "next/head"
import ImageUploadForm from "../../../components/ImageUploadForm/ImageUploadForm"
import { useEffect, useState } from "react"
import ResultsForm from "../../../components/ResultsForm/ResultsForm"
import { useRouter } from 'next/router'
import Link from "next/link"
import ImageList from "../../../components/ImageList/ImageList"

export default function imageUpload({ params }) {
  const [sheetMusicData, setSheetMusicData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [imageIds, setImageIds] = useState()
  const [images, setImages] = useState()

  const router = useRouter()
  const dataType = router.query.dataType

  useEffect(() => {
    if (!imageIds) return;
  
    async function fetchImages() {
      const fetchedImages = [];
      for (let i = 0; i < imageIds.length; i++) {
        const response = await fetch(`/api/image/${imageIds[i]}`);
        const imageData = await response.json();
        fetchedImages.push(imageData);
      }
      setImages(fetchedImages);
    }
  
    fetchImages();
  }, [imageIds]);

  return (
  <div className={styles.container}>
    <Head>
      <title>Upload</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ImageUploadForm setData={setSheetMusicData} setIsLoading={setIsLoading} setImageIds={setImageIds}/>
    {images ? <ImageList images={images}/> : null}
    {/* {sheetMusicData ?
    <ResultsForm data={sheetMusicData} dataType={dataType}/>
     :
     isLoading ? <p>...loading...</p> : null } */}
     <Link href={`/upload/${dataType}/results`}>Continue</Link>
  </div>
  )
}
