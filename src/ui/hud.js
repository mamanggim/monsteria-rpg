export function initHUD() {
  updateHUD();
}

export function updateHUD() {
  const hud = document.getElementById("hud");
  const player = window.game.player;

  hud.innerHTML = `
    <p>Player: ${player.name} | LVL: ${player.level} | EXP: ${player.exp}</p>
    <p>Monsters: ${player.monsters.length}</p>
  `;
}
