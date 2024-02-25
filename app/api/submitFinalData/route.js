import { DbService } from "../../../services/DbService";
import { NextResponse } from "next/server";

export async function POST(request, response) {
  const { updateData } = DbService;

  try {
    const formData = await request.formData();
    console.log("Request.formData(): ", formData);

    const data = Object.fromEntries(formData);
    const documentId = data.id;

    const updatedDoc = await updateData(documentId, data);

    console.log("Document updated", updatedDoc)

    return NextResponse.json({ success: true, doc: updatedDoc }, { status: 200 });
  } catch (error) {
    console.error("Error parsing FormData at submitFinalData:", error);
    return NextResponse.json({ error: "Error parsing FormData" }, { status: 500 });
  }
}
