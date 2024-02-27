import Head from "next/head";
import ImageUploadForm from "../../../components/ImageUploadForm/ImageUploadForm";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ImageList from "../../../components/ImageList/ImageList";
import styled from "styled-components";

export default function imageUpload({ params }) {
  const [sheetMusicData, setSheetMusicData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [imageIds, setImageIds] = useState();
  const [images, setImages] = useState();

  const router = useRouter();
  const dataType = router.query.dataType;

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
    router.push(`/upload/${dataType}/${imageIds && imageIds.join("-")}`);
  }

  return (
    <Container>
      <H1>Upload photos</H1>
      <Regular16>
        You only need 3 images: the front, the back, and the first page. See
        photo tips.
      </Regular16>
      <ImageUploadForm
        setData={setSheetMusicData}
        setIsLoading={setIsLoading}
        setImageIds={setImageIds}
      />
      {images && <ImageList images={images} />}
      {images && <StyledButton onClick={handleClick}>Continue</StyledButton>}
    </Container>
  );
}

const Container = styled.div`
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

const StyledButton = styled.button``;
