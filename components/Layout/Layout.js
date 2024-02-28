import styled from "styled-components";
import Image from "next/image";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <Container>{children}</Container>
    </>
  );
}

const StyledHeader = styled(Header)`
  margin: auto;
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
box-sizing: border-box;
  display: flex;
  margin: auto;
  max-width: 60rem;
  flex-direction: column;
  padding: 2rem 1rem;
  gap: 1rem;
`;
