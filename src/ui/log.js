export function log(msg) {
  const logDiv = document.getElementById("log");
  const entry = document.createElement("p");
  entry.textContent = msg;
  logDiv.appendChild(entry);
  logDiv.scrollTop = logDiv.scrollHeight;
}
