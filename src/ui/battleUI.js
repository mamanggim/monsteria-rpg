// [ID-UI-BATTLE-V1]
import { logEvent } from "./log.js";

export function showBattleUI(player, playerMonster, wildMonster) {
  const container = document.getElementById("game-container");

  container.innerHTML = `
    <h2>Battle</h2>
    <p>${playerMonster.name} (HP: ${playerMonster.hp}) vs ${wildMonster.name} (HP: ${wildMonster.hp})</p>
    <button id="btnAttack">Attack</button>
    <button id="btnCapture">Capture</button>
    <button id="btnRun">Run</button>
  `;

  document.getElementById("btnAttack").onclick = () => {
    wildMonster.hp -= playerMonster.atk;
    logEvent(`${playerMonster.name} menyerang! ${wildMonster.name} sisa HP ${wildMonster.hp}`);
    if (wildMonster.hp <= 0) {
      logEvent(`${wildMonster.name} kalah!`);
      container.innerHTML += `<p>Pertarungan selesai!</p>`;
    }
  };

  document.getElementById("btnCapture").onclick = () => {
    const success = Math.random() < 0.5;
    if (success) {
      logEvent(`Kamu berhasil menangkap ${wildMonster.name}!`);
      player.monsters.push(wildMonster);
    } else {
      logEvent("Gagal menangkap!");
    }
  };

  document.getElementById("btnRun").onclick = () => {
    logEvent("Kamu kabur dari pertarungan.");
    container.innerHTML += `<p>Kamu kembali ke menu.</p>`;
  };
}
