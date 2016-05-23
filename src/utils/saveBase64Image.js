import fsExtra from 'fs-promise';

export default async function saveBase64Image(filePath, base64Screenshot) {
  return fsExtra.outputFile(filePath, base64Screenshot, 'base64');
}
