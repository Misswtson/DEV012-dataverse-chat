
// MAKES THE CALL TO THE CLIENT

export const chatCompletions = (apiKey,data) => {
  return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  });
};
