export default async function parseFileToBase64(file?: File) {
  try {
    if (!file) return;
    const buffer = await file.arrayBuffer();
    return Buffer.from(buffer).toString("base64");
  } catch (error) {
    console.error(error);
  }
}
