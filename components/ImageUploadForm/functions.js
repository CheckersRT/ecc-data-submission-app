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
    console.log("File: ", file);

    const formData = new FormData();
    formData.append("file", file)

    for (const value of formData.values()) { console.log(value); }

    setFileData(formData);
  }
}

export async function onSubmit(event, fileData, trigger, setData) {
  event.preventDefault();
  if (!fileData) {
    return;
  }
  const formElement = event.currentTarget;

  // const url = await uploadToCloudinary(fileData);

  // const payloadSizeBytes = new TextEncoder().encode(JSON.stringify({ image: fileData })).length;
  // console.log("Payload size (bytes):", payloadSizeBytes);

  console.log("fileData onSubmit: ", fileData);
  try {
    const response = await fetch("/api/getDataFromImage", {
      method: "POST",
      body: fileData,
    });

    if (response.ok) {
      const data = await response.json();
      console.log("data: ", data.data);
      setData(data.data);
      console.log(event);
      trigger(fileData);
      formElement.reset();
    }
  } catch (error) {
    console.error("Error: ", error);
  }
}


async function uploadToCloudinary(image) {
  const cloudName = "dm1n4kfee";
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

  const formData = new FormData();
  formData.append("image", image.binaryData);
  formData.append("upload_preset", "y0myraqm");

  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    resource_type: "image",
  };

  try {
    const result = await fetch(url, {
      method: "POST",
      body: formData,
    });

    console.log("Result from cloudinary: ", result)
  } catch (error) {
    console.error("Error from uploadToCloudinary", error);
    return "No such file or directory";
  }

  return result;
}



      // {
      //converts image to base64
      // binaryData: Buffer.from(await file.arrayBuffer()),
      // formData: formData,
      // originalFilename: file.name,
      // size: file.size,
      // mimetype: file.type,
    // }