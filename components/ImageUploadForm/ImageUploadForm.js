import { useState } from "react";
import { onChange, onSubmit, uploadImage } from "./functions";
import useSWRMutation from "swr/mutation";

export default function ImageUploadForm({ setData, setIsLoading, setImageIds }) {
  const [fileData, setFileData] = useState();
  const { trigger } = useSWRMutation("/api/image", uploadImage);

  return (
    <>
      <h2>Upload images</h2>
      <p>
        You only need 3 images: the front, the back, and the first page. See
        photo tips.
      </p>
      <form
        onSubmit={(event) =>
          onSubmit(event, fileData, trigger, setData, setIsLoading, setImageIds)
        }
      >
        <label htmlFor="upload"></label>
        <input
          type="file"
          name="upload"
          multiple
          onChange={(event) => onChange(event, setFileData)}
        ></input>
        <button>Upload</button>
      </form>
    </>
  );
}
