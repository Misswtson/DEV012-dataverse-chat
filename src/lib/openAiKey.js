/*import dataset from "../data/dataset.js";

const endpoint = "https://api.openai.com/v1/chat/completions";
export const personaje = dataset.map(properties => properties.name);

export function chatCompletions(personaje, inputChat) {
  
  const apiKey = localStorage.getItem("apiKey");

  console.log(apiKey);
  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `Eres ${personaje} un personaje principal de la película, presentate y responde a las preguntas`,
      },
      { role: "user", 
      content: inputChat.value},
    ],
  };
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  });
}*/

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
