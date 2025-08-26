// [ID-APP-V1]
import { renderHUD } from "./ui/hud.js";
import { startTutorial } from "./core/tutorial.js";

window.onload = () => {
  const player = { name: "Player1", monsters: [] };

  renderHUD(player);
  startTutorial(player);
};
