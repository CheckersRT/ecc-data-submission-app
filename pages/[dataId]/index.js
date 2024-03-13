import Head from "next/head";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import Link from "next/link";
import BackButton from "../../components/BackButton/BackButton";
import { useRouter } from "next/router";

export default function SelectType({ params }) {

  const router = useRouter()
  const dataId = router.query.dataId

  return (
    <>
      <Head>
        <title>Select Type</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <H1>What kind of sheet music do you have?</H1>
      <OptionsContainer>
        <StyledLink 
        href={`/${dataId}/printedPublication`}
        >
          <Card
            title={"Print publication"}
            description={"A printed book containing multiple pieces."}
            icon={"/printer.svg"}
          />
        </StyledLink>
        <StyledLink href={`/${dataId}/singleSheet`}>
          <Card
            title={"Single sheet"}
            description={"A single printed piece of sheet music."}
            icon={"/singleSheet.svg"}
          />
        </StyledLink>
        <StyledLink href={`/${dataId}/downloadCopy`}>
          <Card
            title={"Download copy"}
            description={"Sheet music downloaded from a website."}
            icon={"/download.svg"}
          />
        </StyledLink>
      </OptionsContainer>
      <BackButton />
    </>
  );
}

const Container = styled.div`

`

const OptionsContainer = styled.div`
box-sizing: border-box;
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
  color: black;

  &:visited {
    text-decoration: none;
    color: black;
  }
`;
