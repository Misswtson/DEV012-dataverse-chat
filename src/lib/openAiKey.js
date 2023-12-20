// Esta función recibe los parametros necesarios para que podamos completar la petición al servidor
export const chatCompletions = (apiKey, data) =>{
  return fetch("https://api.openai.com/v1/chat/completions", {
    // .fetch es una promesa
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  })
};

