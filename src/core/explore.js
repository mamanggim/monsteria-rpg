import { log } from "../ui/log.js";
import { startBattle } from "./battle.js";
import { randomMonster } from "../utils/rng.js";

export function explore() {
  log("You explore the wild...");
  const monster = randomMonster();
  log(`A wild ${monster.name} appears!`);
  startBattle(monster);
}
