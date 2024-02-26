export default async function callGoogleVisionAPI(images) {
    const apiKey = process.env.GOOGLE_VISION_API_KEY;
    const url = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;
  
    console.log("made it to google api call", images);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requests: images.map((image) => {
            return {
              image: {
                source: {
                  imageUri: image
                },
              },
              features: [
                {
                  type: "TEXT_DETECTION",
                },
              ],
            }
          }),
          // requests: [
          //   {
          //     image: {
          //       source: {
          //         imageUri: image
          //       },
          //       // content: image,
          //     },
          //     features: [
          //       {
          //         type: "TEXT_DETECTION",
          //       },
          //     ],
          //   },
          // ],
        }),
      });
  
      if (response.ok) {
        const extractedText = [];
        const annotations = await response.json();
        console.log("annotations: ", annotations)

        for (let i = 0; i < annotations.responses.length; i++) {
          const detections = annotations.responses[i].textAnnotations;
          console.log("detections: ", detections);

          const text = detections[0].description.toString();
          extractedText.push(text)
        }
        const extractedString = extractedText.join(" ")

        return extractedString;
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  }