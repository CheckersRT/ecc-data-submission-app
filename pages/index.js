import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Every Copy Counts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Image alt="icon" src="/icon.svg" width={24} height={24} />
        <Image alt="icon" src="/settingsIcon.svg" width={24} height={24} />
      </Header>

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

      {/* <footer>
        <a
          href="https://www.everycopycounts.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Every Copy Counts
        </a>
      </footer> */}
    </Container>
  );
}

const Container = styled.div`
  margin: auto;
  width: 345px;
  position: relative;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const Header = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.main`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 20px;
`

const H1 = styled.h1`
font-size: 3rem;
`

const P = styled.p`
font-size: 1.5rem;
line-height: 1.5;
`

const Button = styled.button`
  align-self: end;
  width: 160px;
  appearance: none;
  text-decoration: none;
  background-color: black;
  padding: 12px;
  border-radius: 22px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:visited {
    text-decoration: none;
  }

`;
