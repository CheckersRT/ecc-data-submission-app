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
  const file = event.currentTarget.files[0];

  if (file) {
    console.log(event);
    console.log(file);
    setFileData({
      //converts image to base64
      binaryData: Buffer.from(await file.arrayBuffer()),
      originalFilename: file.name,
      size: file.size,
      mimetype: file.type,
    });
  }
}

export async function onSubmit(event, fileData, trigger) {
  event.preventDefault();
  if (!fileData) {
    return;
  }

  try {
    const response = await fetch("/api/getDataFromImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: fileData }),
    });

    if (response.ok) {
      const data = (await response).json();
      console.log("data: ", data);
    }
  } catch (error) {
    console.error("Error: ", error);
  }

  // api call that sends the fileData(image) to Google vision
  // then sends the result to openAI
  const formElement = event.currentTarget;
  trigger(fileData);
  formElement.reset();
}
