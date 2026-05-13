export async function simplifyDocument(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(
    "http://localhost:5001/api/document/simplify",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Upload mislukt");
  }

  return response.json();
}