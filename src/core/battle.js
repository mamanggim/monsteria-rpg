import { log } from "../ui/log.js";
import { updateHUD } from "../ui/hud.js";
import { rng } from "../utils/rng.js";

export function startBattle(monster) {
  const player = window.game.player;
  const enemy = { ...monster };

  log(`⚔️ Battle started against ${enemy.name}!`);

  const battleDiv = document.getElementById("battle");
  battleDiv.innerHTML = `
    <p>Enemy: ${enemy.name} (HP: ${enemy.hp})</p>
    <button id="attackBtn">Attack</button>
    <button id="captureBtn">Capture</button>
    <button id="runBtn">Run</button>
  `;

  document.getElementById("attackBtn").onclick = () => {
    const dmg = rng(5, 15);
    enemy.hp -= dmg;
    log(`You hit ${enemy.name} for ${dmg} damage!`);

    if (enemy.hp <= 0) {
      log(`You defeated ${enemy.name}!`);
      player.exp += 10;
      updateHUD();
      battleDiv.innerHTML = "";
    }
  };

  document.getElementById("captureBtn").onclick = () => {
    const chance = rng(1, 100);
    if (chance > 50) {
      log(`You captured ${enemy.name}!`);
      player.monsters.push(enemy);
      battleDiv.innerHTML = "";
    } else {
      log(`${enemy.name} resisted the capture!`);
    }
  };

  document.getElementById("runBtn").onclick = () => {
    log("You ran away!");
    battleDiv.innerHTML = "";
  };
}
