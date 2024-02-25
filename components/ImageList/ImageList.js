import useSWR from "swr";
import ImageComponent from "../ImageComponent/ImageComponent";
import styled from "styled-components"

export default function ImageList({images}) {
    // const {data: images, error, isLoading} = useSWR("/api/image")

    // console.log(images, error, isLoading)

    console.log(images ? images : null)
  return (
    <Container>
      {images && images.map((image) => (
        <ImageComponent key={image._id} image={image}/>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
`