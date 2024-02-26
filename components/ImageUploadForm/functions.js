export async function uploadImage(url, { arg }) {
  console.log("request in uploadImage", url, arg);

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      fileData: arg,
    }),
  });
}

export async function onChange(event, setFileData) {
  const files = event.currentTarget.files;

  if (files) {
    console.log("Files: ", files);

    // using formData keeps file sizes managable. A JSON string adds 33%.
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData.append("file", files[i]);
    }
    setFileData(formData)
  }
}

export async function onSubmit(
  event,
  fileData,
  trigger,
  setData,
  setIsLoading,
  setImageIds,
) {
  event.preventDefault();
  if (!fileData) {
    return;
  }
  const formElement = event.currentTarget;
  console.log("fileData onSubmit: ", fileData);

      for (const entry of fileData.entries()) {
      console.log(entry);
    }

  try {
    setIsLoading(true);
    const response = await fetch("/api/uploadImages", {
      method: "POST",
      body: fileData,
    });

    if (response.ok) {
      const data = await response.json();
      console.log("response: ", data);
      setImageIds(data.ids);
      setIsLoading(false);
      // trigger(fileData);
      formElement.reset();
    }

    // setIsLoading(true);
    // const response = await fetch("/api/getDataFromImage", {
    //   method: "POST",
    //   body: fileData,
    // });

    // if (response.ok) {
    //   const data = await response.json();
    //   console.log("data: ", data.data, "doc: ", data.doc);
    //   setData(data.doc);
    //   setIsLoading(false);
    //   // trigger(fileData);
    //   formElement.reset();
    // }
  } catch (error) {
    console.error("Error: ", error);
  }
}
