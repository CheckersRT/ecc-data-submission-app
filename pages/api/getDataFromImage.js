import OpenAI from "openai";
import {Formidable} from "formidable"

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(request, response) {

  try {
    const form = new Formidable()
  
    form.parse(request, (error, fields, files) => {

      console.log("files", files)
      const image = files.file

      const base64string = Buffer.from(await image.arrayBuffer()),
    })
    

  } catch (error) {
    console.error("Error: ", error)
  }
  // try {

  //       const extractedText = await callGoogleVisionAPI(base64String);
  //       console.log("Extracted Text: ", extractedText);

  //       const submissionData = await callOpenAIAPI(extractedText);

  //       if (!extractedText) {
  //         response.status(500).json({ error: "Something failed" });
  //         return
  //       }
  //       if(submissionData) {
  //         response.status(200).json({data: submissionData})
  //         return
  //       }

  //     console.log("after parse")
  //     response.status(500).json({error: "somethings gone wrong"})
  //     // If the incoming request is not FormData, handle it accordingly
  //     response.status(400).json({ error: 'Unsupported content type' });
  // } catch (error) {
  //   console.log("Error from api getDataFromImage: ", error);
  //   response.status(500).json({error: error});
  // }
}

async function callGoogleVisionAPI(image) {
  const apiKey = process.env.GOOGLE_VISION_API_KEY;
  const url = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;

  console.log("made it to google api call");
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requests: [
          {
            image: {
              content: image,
            },
            features: [
              {
                type: "TEXT_DETECTION",
              },
            ],
          },
        ],
      }),
    });

    if (response.ok) {
      const extractedText = [];
      const annotations = await response.json();
      const detections = annotations.responses[0].textAnnotations;
      console.log("detections: ", detections);
      detections.forEach((word) => {
        extractedText.push(word.description);
      });
      const extractedString = extractedText.toString();

      return extractedString;
    }
  } catch (error) {
    console.error("Error: ", error);
  }
}
async function callOpenAIAPI(text) {
  console.log("OPEN AI CALL");
  const prompt = `
  Extract the title of the song/piece of music, the composer or arranger, the title of the book (if the music is from a book of songs), the print publisher (if the song is part of a book), the music publisher (usually found in the copyright line at the bottom of the first page of music), the website (if there is one), and the ISBN (found only on books) from this text: ${text}. 
  Return a JSON object with the following keys:
  titleOfWork,
  composerArranger,
  titleOfBook,
  printPublisher,
  musicPublisher,
  website,
  ISBN,
  Fill in their respective values."
  }`;

  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "json_object" },
      temperature: 0.2,
    });
    const completion = JSON.parse(response.choices[0].message.content);
    console.log(response.choices[0].message.content);
    return completion
  } catch (error) {
    console.error("Error: ", error);
  }
}


export const config = {
  api: {
      bodyParser: false
      // {
      //     sizeLimit: '4mb' // Set desired value here
      // }
  }
}