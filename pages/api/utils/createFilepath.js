export default async function createFilepath(file) {

    const blob = getBlobFromFile(file) 
    



}

async function getBlobFromFile(file) {
    const blob = new Blob([file], { type: file.type });

    return blob
}