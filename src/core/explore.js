// [ID-CORE-EXPLORE-V1]
import { logEvent } from "../ui/log.js";
import { startBattle } from "./battle.js";

export function startExplore(player) {
  logEvent("Kamu menjelajah hutan...");

  // Encounter simple monster random
  const wildMonster = {
    id: "MON002",
    name: "Wild Rat",
    level: 1,
    hp: 20,
    atk: 4,
  };

  logEvent(`Kamu bertemu ${wildMonster.name}!`);
  startBattle(player, wildMonster);
}
