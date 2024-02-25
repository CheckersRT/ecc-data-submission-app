import convertFileToBase64 from "./convertFileToBase64";

export default async function createImageDbObject(file, base64string) {
    // console.log("Image file in createdb function", file);
    const { originalFilename, size, mimetype, url } = file;
    return {
      originalFilename,
      size,
      mimetype,
      binaryData: base64string,
      url,
    };
  }