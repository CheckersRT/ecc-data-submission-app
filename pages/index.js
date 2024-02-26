import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dm_Sans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Every Copy Counts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <H1>Hello,</H1>

        <P>Welcome to the Every Copy Counts data submission app.</P>
        <P>
          We've simplified data collection. Upload your pictures and let AI do
          the heavy lifting.
        </P>
        <Button>
          <StyledLink href="/selectType">Upload item</StyledLink>
          <Image alt="arrow icon" src="/arrow.svg" width={24} height={24} />
        </Button>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 16px 24px;
  position: relative;
  font-family: ${dm_Sans.style.fontFamily};
`;



const Main = styled.main`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 20px;
`

const H1 = styled.h1`
font-size: 2.5rem;
font-weight: 400;
`

const P = styled.p`
font-size: 1.7rem;
line-height: 1.5;
text-transform: uppercase;
`

const Button = styled.button`
  align-self: end;
  width: 180px;
  appearance: none;
  text-decoration: none;
  background-color: black;
  padding: 12px;
  border-radius: 26px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.3rem;


  &:visited {
    text-decoration: none;
  }

`;
