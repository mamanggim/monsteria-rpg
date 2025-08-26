// [ID-CORE-BATTLE-V1]
import { logEvent } from "../ui/log.js";
import { showBattleUI } from "../ui/battleUI.js";

export function startBattle(player, wildMonster) {
  const playerMonster = player.monsters[0]; // ambil monster pertama
  logEvent(`${playerMonster.name} VS ${wildMonster.name}!`);

  showBattleUI(player, playerMonster, wildMonster);
}
