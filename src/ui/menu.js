// src/ui/menu.js
import { startExplore } from "../core/explore.js";
import { logEvent } from "./log.js";

export function initMenu() {
  const menu = document.getElementById("menu");
  menu.innerHTML = `
    <button id="btnExplore">Explore</button>
    <button id="btnInventory">Inventory</button>
    <button id="btnQuit">Quit</button>
  `;

  document.getElementById("btnExplore").addEventListener("click", () => {
    logEvent("You venture into the wilds...");
    startExplore();
  });

  document.getElementById("btnInventory").addEventListener("click", () => {
    logEvent("Inventory opened (dummy).");
  });

  document.getElementById("btnQuit").addEventListener("click", () => {
    logEvent("You quit the game (dummy).");
  });
}
