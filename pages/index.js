import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/router";
import { ButtonP } from "../components/ForwardButton/ForwardButton";

const dm_Sans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  const [disable, setDisable] = useState(true);
  const [schoolName, setSchoolName] = useState();
  const router = useRouter();

  async function handleSubmit() {
    event.preventDefault();
    console.log("schoolname: ", schoolName);

    const response = await fetch("api/initialDbSave", {
      method: "POST",
      body: JSON.stringify({ schoolName: schoolName }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      const dataId = data.doc._id
      console.log("id from initial save: ", dataId);
       router.push(`/${dataId}`);
    }
  }

  return (
    <>
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="school">Enter your school name</label>
          <Input
            id="school"
            name="school"
            type="text"
            onChange={(event) => {
              setDisable(false);
              setSchoolName(event.target.value);
            }}
          ></Input>
          <Button disabled={disable ? true : false}>
            <ButtonP>Upload item</ButtonP>
            <StyledImage
              alt="arrow icon"
              src={"/arrow.svg"}
              width={24}
              height={24}
            />
          </Button>
        </form>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

const H1 = styled.h1`
  font-size: 2.1rem;
  font-weight: 400;
`;

const P = styled.p`
  font-size: 1.6rem;
  line-height: 1.7;
  text-transform: uppercase;
  font-weight: 300;
`;
const StyledImage = styled(Image)``;

const Button = styled.button`
  align-self: end;
  width: 180px;
  appearance: none;
  text-decoration: none;
  background-color: ${(props) => (props.disabled ? "#B8B8BB" : "black")};
  border: ${(props) => (props.disabled ? "#B8B8BB" : "black")};
  padding: 12px;
  border-radius: 26px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
  margin-top: 12px;

  &:hover {
    background-color: ${(props) => (props.disabled ? null : "white")};
    border: ${(props) => (props.disabled ? null : "black 1px solid")};
  }

  &:hover ${ButtonP} {
    color: ${(props) => (props.disabled ? null : "black")};
  }

  &:hover ${StyledImage} {
    filter: ${(props) => (props.disabled ? null : "invert(100%) sepia(100%) saturate(0%) hue-rotate(100deg) brightness(104%) contrast(105%)")}
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.3rem;

  &:visited {
    text-decoration: none;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  appearance: none;
  // border: none;
  padding: 1.1rem;
  border: 1px solid #79747e;
  border-radius: 5px;
`;
