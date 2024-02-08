export default async function callGoogleVisionAPI(image) {
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