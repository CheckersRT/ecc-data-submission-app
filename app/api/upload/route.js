import { NextResponse } from "next/server";
import createImageDbObject from "../../../pages/api/utils/createImageDbObject";
import convertFileToBase64 from "../../../pages/api/utils/convertFileToBase64";
import { DbService } from "../../../services/DbService";
import { Formidable } from "formidable";

export async function POST(request, response) {
  const { createImage } = DbService;

    const formData = await request.formData()
    const images = formData.getAll("image")

  try {
    const imageSavePromises = images.map(async (image) => {
      const imageDbObject = await createImageDbObject(image);
      const { _id } = await createImage(imageDbObject);
      return _id;
    });

    const imageIds = await Promise.all(imageSavePromises);
    return NextResponse.status(200).json({
      message: "request success",
      ids: imageIds,
    });
  } catch (error) {
    console.error("Error saving images:", error);
    NextResponse.status(500).json({ error: "Error saving images" });
  }
}
