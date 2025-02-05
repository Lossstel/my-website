document.getElementById("submit-btn").addEventListener("click", function () {
  sendToChatGPT();
});

function sendToChatGPT() {
  let value = document.getElementById("word-input").value;

  if (!value.trim()) {
      alert("Please enter a message!");
      return;
  }

  let body = {
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: value }],
      temperature: 1, // Corrected from 'tempreture' to 'temperature'
  };

  let headers = {
      Authorization: "Bearer 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",
  };

  axios.post("https://api.openai.com/v1/chat/completions", body, { headers: headers })
      .then((response) => {
          let reply = response.data.choices[0].message.content;
          document.getElementById("reply-content").textContent = reply;
      })
      .catch((error) => {
          console.error("Error sending request to ChatGPT:", error);
          alert("An error occurred while processing your request.");
      });
}