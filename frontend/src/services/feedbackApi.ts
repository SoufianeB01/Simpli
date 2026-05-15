export async function sendFeedback(data: {
  rating: string;
  extraFeedback?: string;
}) {
  await fetch("http://localhost:5001/api/feedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}