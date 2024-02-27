import useSWR from "swr";
import ImageComponent from "../ImageComponent/ImageComponent";
import styled from "styled-components"

export default function ImageList({images}) {
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
  gap: 0.5rem;
`