import Head from "next/head";
import ImageUploadForm from "../../../components/ImageUploadForm/ImageUploadForm";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ImageList from "../../../components/ImageList/ImageList";
import styled from "styled-components";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import ForwardButton from "../../../components/ForwardButton/ForwardButton";
import BackButton from "../../../components/BackButton/BackButton";
import ForBackNav from "../../../components/ForBackNav/ForBackNav";
import { dataTypes } from "../../../data/typeArrays";

const dm_Sans = DM_Sans({ subsets: ["latin"] });

export default function imageUpload({ params }) {
  const [sheetMusicData, setSheetMusicData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [imageIds, setImageIds] = useState();
  const [images, setImages] = useState();

  const router = useRouter();
  const dataType = router.query.dataType;
  const pathname = router.pathname;

  console.log("datatypes: ", dataTypes[dataType])

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

  function handleClick() {
    router.push(`/selectType/${dataType}/${imageIds && imageIds.join("-")}`);
  }

  return (
    <>
      <UploadContainer>
        <H1>Upload photos</H1>
        <Regular16>{dataType && dataTypes[dataType].uploadInstruction}</Regular16>
        <ImageUploadForm
          setData={setSheetMusicData}
          setIsLoading={setIsLoading}
          setImageIds={setImageIds}
          isLoading={isLoading}
        />
      </UploadContainer>
      {images && <ImageList images={images} />}
      <ForBackNav
        text={"Continue"}
        onClick={handleClick}
        forButton={images ? true : false}
      />
    </>
  );
}

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px lightgray dotted;
  padding: 16px;
  gap: 1rem;
  padding-top: 20px;
`;

const H1 = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0;
`;

const Regular16 = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
  text-align: center;
  line-height: 1.5;
`;
