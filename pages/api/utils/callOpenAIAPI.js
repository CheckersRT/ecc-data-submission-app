import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


export default async function callOpenAIAPI(text) {
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
      return completion;
    } catch (error) {
      console.error("Error: ", error);
    }
  }