// src/app.js
import { explore } from "./core/explore.js";

let player = {
  name: "Hero",
  wallet: 0,
  isNew: true,
  inventory: [],
  monsters: []
};

document.getElementById("playerName").innerText = player.name;
document.getElementById("wallet").innerText = player.wallet;

// Helper untuk tampilkan pesan
function logMessage(msg) {
  const logDiv = document.getElementById("log");
  logDiv.innerHTML += `<p>${msg}</p>`;
}

// Helper untuk output utama (event sekarang)
function showOutput(msg) {
  document.getElementById("output").innerHTML = `<p>${msg}</p>`;
}

// Event klik Explore
document.getElementById("exploreBtn").addEventListener("click", () => {
  const result = explore(player);

  if (!result) return;

  // Tampilkan pesan utama
  showOutput(result.message);

  // Tambahkan juga ke log
  logMessage(result.message);

  // Kalau ada action (misal battle tutorial)
  if (result.action) {
    result.action();
  }
});
