// [ID-UI-LOG-V1]
export function logEvent(message) {
  const logBox = document.getElementById("log");
  const entry = document.createElement("p");
  entry.textContent = message;
  logBox.appendChild(entry);
  logBox.scrollTop = logBox.scrollHeight;
}
