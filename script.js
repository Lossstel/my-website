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
