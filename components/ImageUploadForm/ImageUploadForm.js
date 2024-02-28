import { useState } from "react";
import { onChange, onSubmit, uploadImage } from "./functions";
import useSWRMutation from "swr/mutation";
import styled from "styled-components";
import Image from "next/image";

export default function ImageUploadForm({
  setData,
  setIsLoading,
  setImageIds,
  isLoading,
}) {
  const [fileData, setFileData] = useState();
  const [isClicked, setIsClicked] = useState();
  // const { trigger } = useSWRMutation("/api/image", uploadImage);

  return (
    <>
      <form>
        <StyledLabel
          htmlFor="upload"
          $isLoading={isLoading}
          // $isClicked={isClicked}
          onClick={() => setIsClicked(!isClicked)}
        >
          {isLoading ? (
            "..."
          ) : (
            <StyledImage
              alt="plus icon"
              src="/plus.svg"
              width={24}
              height={24}
            />
          )}
          <P>{isLoading ? "Loading" : "Select photos"}</P>
        </StyledLabel>
        <StyledInput
          type="file"
          id="upload"
          name="upload"
          multiple
          onChange={(event) =>
            // onChange(event, setFileData)
            onSubmit(event, setData, setIsLoading, setImageIds)
          }
        ></StyledInput>
      </form>
    </>
  );
}

const StyledImage = styled(Image)``;

const StyledLabel = styled.label`
  margin-top: 16px;
  margin-bottom: 8px;
  box-sizing: border-box;
  height: 48px;
  border: 1.5px black solid;
  border-radius: 26px;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: ${(props) =>
    props.$isLoading ? "black" : "none"};
  color: ${(props) =>
    props.$isLoading ? "white" : "black"};

  &:hover,
  :active {
    background-color: black;
    color: white;
  }

  &:hover ${StyledImage} {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(100deg)
      brightness(104%) contrast(105%);
  }
`;

const StyledInput = styled.input`
  display: none;
`;

const P = styled.p`
  margin: 0;
  padding: 0;
`;
