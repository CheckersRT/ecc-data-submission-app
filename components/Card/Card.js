import Image from "next/image";
import styled from "styled-components";

export default function Card({ icon, title, description }) {
  return (
    <Container>
      <UpperRow>
        <Image alt="icon" src={icon} width={24} height={24} />
        <Title>{title}</Title>
      </UpperRow>
      <Description>{description}</Description>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  border: 0.5px solid #4e5056;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  gap: 0.3rem;

  &:hover, :active {
    background-color: #f2f2f2;
    // border: 1px solid #4e5056;
  }
`;

const UpperRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 400;
  margin: 0;
`;

const Description = styled.p`
  font-size: 0.8rem;
  font-weight: 200;
  margin: 0;
  padding-left: calc(24px + 0.8rem);
`;
