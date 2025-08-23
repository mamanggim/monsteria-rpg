import { getPlayer, savePlayer } from "./utils/storage.js";
import { explore } from "./core/explore.js";

const player = getPlayer();
renderUI(player);

// Ambil tombol Explore
document.getElementById("exploreBtn").addEventListener("click", () => {
  const result = explore(player);
  handleExploreResult(result, player);
  savePlayer(player);
});

function handleExploreResult(result, player) {
  const logDiv = document.getElementById("log");

  if (!result) {
    logDiv.innerText = "⚠️ Tidak ada event.";
    return;
  }

  logDiv.innerText = result.message;

  // Jika ada next (tutorial step)
  if (result.type === "tutorial" && result.next) {
    const btn = document.createElement("button");
    btn.innerText = "➡️ Next";
    btn.onclick = () => {
      const nextResult = result.next();
      handleExploreResult(nextResult, player);
      savePlayer(player);
    };
    logDiv.appendChild(document.createElement("br"));
    logDiv.appendChild(btn);
  }

  // Jika ada monster
  if (result.type === "monster" && result.action) {
    const btn = document.createElement("button");
    btn.innerText = "⚔️ Battle";
    btn.onclick = () => {
      result.action();
    };
    logDiv.appendChild(document.createElement("br"));
    logDiv.appendChild(btn);
  }
}

function renderUI(player) {
  document.getElementById("playerName").innerText = player.name;
  document.getElementById("wallet").innerText = 
    `Teria: ${player.wallet.teria} | Crystal: ${player.wallet.crystal}`;
}
