// [ID-UI-HUD-V1]
export function renderHUD(player) {
  const hud = document.getElementById("hud");
  hud.innerHTML = `
    <p>Player: ${player.name}</p>
    <p>Monster pertama: ${player.monsters?.[0]?.name || "Belum ada"}</p>
  `;
}
