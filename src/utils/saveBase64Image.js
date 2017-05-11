import fsExtra from 'fs-extra';

export default async function saveBase64Image(filePath, base64Screenshot) {
  return fsExtra.outputFile(filePath, base64Screenshot, 'base64');
}
