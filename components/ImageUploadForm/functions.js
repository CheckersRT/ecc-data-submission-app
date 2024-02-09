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

    // using formData keeps file sizes managable. A JSON string adds 33%.
    const formData = new FormData();
    formData.append("file", file);

    for (const value of formData.values()) {
      console.log(value);
    }

    setFileData(formData
      // fileData: {
      //   binaryData: Buffer.from(await file.arrayBuffer()),
      //   originalFilename: file.name,
      //   size: file.size,
      //   mimetype: file.type,
      // },
    );
  }
}

export async function onSubmit(event, fileData, trigger, setData) {
  event.preventDefault();
  if (!fileData) {
    return;
  }
  const formElement = event.currentTarget;
  console.log("fileData onSubmit: ", fileData);

  // setIsLoading("Saving images")
  // const saved = await uploadImagesToCloudinary(fileData)
  // setIsLoading(saved)

  //setIsLoading("doing AI")
  // const data = await getDataFromImages(fileData)
  //setSubmissionData(data)

  try {
    const response = await fetch("/api/getDataFromImage", {
      method: "POST",
      body: fileData.formData,
    });

    if (response.ok) {
      const data = await response.json();
      console.log("data: ", data.data);
      setData(data.data);
      trigger(fileData.fileData);
      formElement.reset();
    }
  } catch (error) {
    console.error("Error: ", error);
  }
}


async function uploadImages(images) {
  try {
    const response = await fetch("/api/uploadImages", {
      method: "POST",
      body: images,
    })

    if(response.ok) {
      return "Images saved"
    }
    
  } catch (error) {
    console.error("Error: ", error)
  }
}

async function getDataFromImages() {
  try {
    
  } catch (error) {
    
  }
}