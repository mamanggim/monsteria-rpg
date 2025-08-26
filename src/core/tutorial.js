// [ID-CORE-TUTORIAL-V1]
import { logEvent } from "../ui/log.js";
import { startExplore } from "./explore.js";

export function startTutorial(player) {
  logEvent("Selamat datang di Monsteria RPG!");
  logEvent("Kamu adalah seorang penjelajah dunia monster.");

  if (!player.monsters || player.monsters.length === 0) {
    logEvent("Kamu diberi monster pertama: Slime!");
    player.monsters = [{ id: "MON001", name: "Slime", level: 1, hp: 30, atk: 5 }];
  }

  logEvent("Ayo mulai menjelajah!");
  startExplore(player);
}
