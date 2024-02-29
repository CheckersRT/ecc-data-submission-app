import Image from "next/image";
import styled from "styled-components";
import { DM_Sans } from "next/font/google";

const dm_Sans = DM_Sans({ subsets: ["latin"] });

export default function ForwardButton({ onClick, text }) {
  return (
    <Button onClick={onClick}>
      <ButtonP>{text}</ButtonP>
      <Image alt="arrow icon" src="/arrow.svg" width={24} height={24} />
    </Button>
  );
}

const Button = styled.button`
  height: 48px;
  align-self: end;
  text-decoration: none;
  background-color: black;
  padding: 0 16px;
  border-radius: 28px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
  border: none;
`;

const ButtonP = styled.p`
  margin: 0;
  padding: 0;
  color: white;
  font-size: 1rem;
  font-family: ${dm_Sans.style.fontFamily};
`;
