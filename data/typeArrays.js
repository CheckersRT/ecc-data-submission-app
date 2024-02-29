export const dataTypes = {
  printedPublication: {
    uploadInstruction: "Upload 3 photos: the front cover, the back cover, and the first page of music. See photo tips.",
    dataFields: [
      { key: "titleOfWork", name: "Title of piece*", required: true, type: "text"},
      { key: "composerArranger", name: "Composer/Arranger*", required: true, type: "text" },
      { key: "titleOfBook", name: "Title of book", required: false, type: "text" },
      { key: "printPublisher", name: "Print publisher*", required: true, type: "text" },
      { key: "musicPublisher", name: "Music publisher*", required: true, type: "text" },
      { key: "ISBN", name: "ISBN", required: false, type: "text" },
      { key: "numCopies", name: "Number of copies", required: false, type: "number" },
    ],
  },
  singleSheet: {
    uploadInstruction: "Upload a photo of the first page of music. See photo tips.",
    dataFields: [
      { key: "titleOfWork", name: "Title of piece*", required: true, type: "text" },
      { key: "composerArranger", name: "Composer/Arranger*", required: true, type: "text" },
      { key: "printPublisher", name: "Print publisher", required: false, type: "text" },
      { key: "musicPublisher", name: "Music publisher*", required: true, type: "text" },
      { key: "numCopies", name: "Number of copies", required: false, type: "number" },
    ]
  },
  downloadCopy: {
    uploadInstruction: "Upload a photo of the first page of music. See photo tips.",
    dataFields: [
      { key: "titleOfWork", name: "Title of piece*", required: true, type: "text" },
      { key: "composerArranger", name: "Composer/Arranger*", required: true, type: "text" },
      { key: "musicPublisher", name: "Music publisher", required: false, type: "text" },
      { key: "website", name: "Website*", required: true, type: "text" },
      { key: "numCopies", name: "Number of copies", required: false, type: "number" },
    ]
  }
};
