import { initMenu } from "./ui/menu.js";
import { log } from "./ui/log.js";
import { initHUD, updateHUD } from "./ui/hud.js";
import { explore } from "./core/explore.js";
import { startBattle } from "./core/battle.js";
import { loadPlayer } from "./utils/storage.js";
import monsters from "./config/monsters.json" assert { type: "json" };

const player = loadPlayer();

window.game = {
  player,
  monsters,
  explore,
  startBattle,
  log,
  updateHUD,
};

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initHUD();
  log("Welcome to Monsteria RPG (Dummy v1.0)!");
});
