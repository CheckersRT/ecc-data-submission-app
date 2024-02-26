import fs from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);

export default async function convertFileToBase64(file) {
    try {

        const filepath = createFilepath(file)
      // Read the file content asynchronously
      const fileBuffer = await readFileAsync(file.filepath);
  
      // Convert the file content to a base64 string
      const base64string = fileBuffer.toString('base64');
  
      return base64string;
    } catch (error) {
      console.error('Error reading file:', error);
      throw new Error('Error reading file');
    }
  }
