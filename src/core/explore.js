// src/core/explore.js
import { getRandomMonster } from "../data/monsters.js";
import { addItemToInventory } from "../utils/storage.js";
import { startBattle } from "./battle.js";

// Eksplorasi dunia
export function explore(player) {
  const roll = Math.random();

  if (roll < 0.5) {
    // 50% chance ketemu monster
    const monster = getRandomMonster();
    return {
      type: "monster",
      message: `Kamu bertemu monster liar: ${monster.name}!`,
      monster: monster,
      action: () => startBattle(player, monster),
    };
  } else if (roll < 0.8) {
    // 30% chance dapat item
    const item = {
      name: "Herba Liar",
      type: "material",
      rarity: "common",
    };
    addItemToInventory(player, item);
    return {
      type: "item",
      message: `Kamu menemukan item: ${item.name}.`,
      item: item,
    };
  } else {
    // 20% nothing
    return {
      type: "nothing",
      message: "Kamu berkelana jauh... tapi tidak menemukan apa-apa.",
    };
  }
}
