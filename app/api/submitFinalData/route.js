import { Formidable } from "formidable";

export async function POST(req, res) {

    const data = req.formData()
    // const data = request.body
    console.log("Request.formData(): ", data)
    try {
        const form = new Formidable();
        const { fields, files } = await new Promise((resolve, reject) => {
          form.parse(request, (error, fields, files) => {
            if (error) {
              reject(error);
              return;
            }
            resolve({ fields, files });
          });
        });
    
        console.log("fields:", fields);
        // Handle parsed fields and files as needed
    
        response.status(200).json({ success: true });
      } catch (error) {
        console.error("Error parsing FormData at submitFinalData:", error);
        response.status(500).json({ error: "Error parsing FormData" });
      }
}
