import Image from "next/image";
import styled from "styled-components";

export default function Header({ params }) {
  return (
    <Container>
      <Image alt="icon" src="/icon.svg" width={24} height={24} />
      <Image alt="icon" src="/settingsIcon.svg" width={24} height={24} />
    </Container>
  );
}

const Container = styled.div`
display: flex;
justify-content: space-between;
height: 56px;
align-items: center;
padding: 0 1rem;
`