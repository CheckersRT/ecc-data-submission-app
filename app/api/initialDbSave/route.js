import { DbService } from "../../../services/DbService";
import { NextResponse } from "next/server";
import { initialDataDbObject } from "../../../pages/api/utils/initialDataDbObject";

export async function POST(request, response) {
  const { createData } = DbService;

  try {
    const data = await request.json();
    console.log("data: ", data);
    const schoolName = data.schoolName;
    console.log("schoolName: ", schoolName);

    const dataObject = createDataDbObject(schoolName);

    const savedDob = await createData(dataObject);

    console.log("Document saved", savedDob);

    return NextResponse.json({ success: true, doc: savedDob }, { status: 200 });
  } catch (error) {
    console.error("Error parsing FormData at submitFinalData:", error);
    return NextResponse.json(
      { error: "Error parsing FormData" },
      { status: 500 }
    );
  }
}

function createDataDbObject(schoolName) {
  return {
    type: "",
    school: schoolName,
    isOwnArrangement: false,
    titleOfWork: "",
    composerArranger: "",
    titleOfBook: "",
    printPublisher: "",
    musicPublisher: "",
    website: "",
    ISBN: "",
    numCopies: 0,
  };
}
