export const dataTypes = {
    printedPublication: [
        {key: "titleOfWork", name: "Title of piece*", required: true},
        {key: "composerArranger", name: "Composer/Arranger*", required: true},
        {key: "titleOfBook", name: "Title of book", required: false},
        {key: "printPublisher", name: "Print publisher*", required: true},
        {key: "musicPublisher", name: "Music publisher*", required: true},
        {key: "ISBN", name: "ISBN", required: false},
        {key: "numCopies", name: "Number of copies", required: false},
    ],
    singleSheet: [
        {key: "titleOfWork", name: "Title of piece*", required: true},
        {key: "composerArranger", name: "Composer/Arranger*", required: true},
        {key: "printPublisher", name: "Print publisher", required: false},
        {key: "musicPublisher", name: "Music publisher*", required: true},
        {key: "numCopies", name: "Number of copies", required: false},
    ],
    downloadCopy: [
        {key: "titleOfWork", name: "Title of piece*", required: true},
        {key: "composerArranger", name: "Composer/Arranger*", required: true},
        {key: "musicPublisher", name: "Music publisher", required: false},
        {key: "website", name: "Website*", required: true},
        {key: "numCopies", name: "Number of copies", required: false},
    ]
}
