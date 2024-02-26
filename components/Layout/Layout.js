import styled from "styled-components";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
    <Header>
      <Image alt="icon" src="/icon.svg" width={24} height={24} />
      <Image alt="icon" src="/settingsIcon.svg" width={24} height={24} />
    </Header>
      <main>{children}</main>
    </>
  );
}

const Header = styled.div`
    margin: auto;
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
