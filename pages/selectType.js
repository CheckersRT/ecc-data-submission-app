import Head from "next/head";
import styled from "styled-components";
import Card from "../components/Card/Card";
import Link from "next/link";

export default function SelectType({ params }) {
  return (
    <div>
      <Head>
        <title>Select Type</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <H1>What kind of sheet music do you have?</H1>
      <Container>
        <StyledLink href="/upload/printedPublication">
          <Card
            title={"Print publication"}
            description={"A printed book containing multiple pieces."}
            icon={"/printer.svg"}
          />
        </StyledLink>
        <StyledLink href="/upload/singleSheet">
          <Card
            title={"Single sheet"}
            description={"A single printed piece of sheet music."}
            icon={"/singleSheet.svg"}
          />
        </StyledLink>
        <StyledLink href="/upload/downloadCopy">
          <Card
            title={"Download copy"}
            description={"Sheet music downloaded from a website."}
            icon={"/download.svg"}
          />
        </StyledLink>
      </Container>
    </div>
  );
}

const Container = styled.div`
padding-top: 1rem;
display: flex;
flex-direction: column;
gap: 1rem;
`

const H1 = styled.h1`
  font-size: 2.1rem;
  font-weight: 400;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited {
    text-decoration: none;
    color: black;
  }
`;
