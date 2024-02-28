import Image from "next/image";
import styled from "styled-components";

export default function Loading({ params }) {
  return (
    <>
      <H1>... doing AI...</H1>;
      <StyledImage alt="photocopier loading screen" src="/photocopier.svg" width={300} height={300}/>
    </>
  );
}

const H1 = styled.h1`
  font-size: 2.1rem;
  font-weight: 400;
  text-align: center;
`;

const StyledImage = styled(Image)`
margin: auto;
`