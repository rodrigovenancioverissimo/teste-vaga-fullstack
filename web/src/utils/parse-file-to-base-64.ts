export default async function parseFileToBase64(file?: File) {
  if (!file) throw new Error("Arquivo inválido");
  const buffer = await file.arrayBuffer();
  return Buffer.from(buffer).toString("base64");
}
