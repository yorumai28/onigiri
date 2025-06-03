function sendMessage() {
  const input = document.getElementById("message");
  const chatBox = document.getElementById("chat-box");
  const message = input.value.trim();
  if (!message) return;

  const msgDiv = document.createElement("div");
  msgDiv.textContent = message;
  msgDiv.style.marginBottom = "5px";
  chatBox.appendChild(msgDiv);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
