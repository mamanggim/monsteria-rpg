import { getPlayer, savePlayer } from "./utils/storage.js";
import { explore } from "./core/explore.js";

let player = getPlayer();
let currentBattle = null;

const output = document.getElementById("output");
const playerName = document.getElementById("player-name");
const wallet = document.getElementById("wallet");

const btnExplore = document.getElementById("btn-explore");
const btnAttack = document.getElementById("btn-attack");
const btnCapture = document.getElementById("btn-capture");
const btnRun = document.getElementById("btn-run");
const battleActions = document.getElementById("battle-actions");

function updateHUD() {
  playerName.textContent = player.name;
  wallet.textContent = `${player.wallet.teria} Teria | ${player.wallet.crystal} Crystal`;
}

function showMessage(msg) {
  output.innerHTML += `<p>${msg}</p>`;
  output.scrollTop = output.scrollHeight;
}

btnExplore.addEventListener("click", () => {
  const result = explore(player);

  if (result.type === "tutorial" || result.type === "item" || result.type === "nothing") {
    showMessage(result.message);
    if (result.next) {
      // lanjutkan step tutorial
      const nextStep = result.next();
      showMessage(nextStep.message);
      if (nextStep.type === "monster") {
        startBattle(nextStep.monster, nextStep.action);
      }
    }
  }

  if (result.type === "monster") {
    showMessage(result.message);
    startBattle(result.monster, result.action);
  }
});

function startBattle(monster, actionFn) {
  showMessage(`⚔️ Battle melawan ${monster.name} dimulai!`);
  currentBattle = actionFn();
  battleActions.style.display = "block";
}

btnAttack.addEventListener("click", () => {
  if (!currentBattle) return;
  currentBattle.attack();
  renderBattle();
});

btnCapture.addEventListener("click", () => {
  if (!currentBattle) return;
  currentBattle.capture();
  renderBattle();
});

btnRun.addEventListener("click", () => {
  if (!currentBattle) return;
  currentBattle.run();
  renderBattle();
});

function renderBattle() {
  output.innerHTML = "";
  currentBattle.log.forEach(msg => showMessage(msg));

  if (currentBattle.isOver()) {
    battleActions.style.display = "none";
    savePlayer(player);
  } else {
    showMessage(`❤️ Player HP: ${currentBattle.playerHP()} | 🐉 Monster HP: ${currentBattle.monsterHP()}`);
  }
}

updateHUD();
showMessage("Selamat datang di Monsteria!");
if (player.isNew) {
  const tut = explore(player); // trigger tutorial
  showMessage(tut.message);
  if (tut.next) {
    const step = tut.next();
    showMessage(step.message);
  }
}
