import { explore } from "../core/explore.js";
import { log } from "./log.js";

export function initMenu() {
  const menuDiv = document.getElementById("menu");
  menuDiv.innerHTML = `
    <button id="exploreBtn">Explore</button>
    <button id="monstersBtn">My Monsters</button>
  `;

  document.getElementById("exploreBtn").onclick = explore;
  document.getElementById("monstersBtn").onclick = () => {
    log("Your monsters: " + window.game.player.monsters.map(m => m.name).join(", ") || "None");
  };
}
