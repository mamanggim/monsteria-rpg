// src/core/explore.js
import { getRandomMonster } from "../data/monsters.js";
import { addItemToInventory } from "../utils/storage.js";
import { startBattle } from "./battle.js";

let tutorialStep = 0; // tracking tutorial

export function startTutorial(player) {
  if (!player.isNew) return;

  tutorialStep = 1;
  return {
    type: "tutorial",
    message: "Selamat datang di dunia Monsteria! Mari kita mulai petualanganmu.",
    next: () => tutorialExploreStep(player),
  };
}

function tutorialExploreStep(player) {
  if (tutorialStep === 1) {
    tutorialStep++;
    return {
      type: "tutorial",
      message: "Klik tombol 'Explore' untuk menjelajahi dunia.",
    };
  }

  if (tutorialStep === 2) {
    tutorialStep++;
    // Paksa monster pertama agar tutorial pasti muncul battle
    const monster = {
      name: "Slime Hijau",
      hp: 20,
      attack: 3,
      defense: 1,
      speed: 1,
      rarity: "common",
    };
    return {
      type: "monster",
      message: `Kamu bertemu monster pertamamu: ${monster.name}!`,
      monster: monster,
      action: () => startBattle(player, monster, { tutorial: true }),
    };
  }

  if (tutorialStep === 3) {
    tutorialStep++;
    return {
      type: "tutorial",
      message: "Gunakan tombol 'Capture' saat HP monster rendah untuk menangkapnya!",
    };
  }

  if (tutorialStep === 4) {
    tutorialStep++;
    return {
      type: "tutorial",
      message: "Bagus! Kamu sudah punya monster pertama. Sekarang buka menu Inventory.",
    };
  }

  if (tutorialStep === 5) {
    tutorialStep = 0;
    player.isNew = false; // matikan tutorial
    return {
      type: "tutorial",
      message: "Tutorial selesai! Selamat bermain di dunia Monsteria.",
    };
  }
}

// Normal exploration (non-tutorial)
export function explore(player) {
  if (player.isNew) {
    return startTutorial(player);
  }

  const roll = Math.random();

  if (roll < 0.5) {
    const monster = getRandomMonster();
    return {
      type: "monster",
      message: `Kamu bertemu monster liar: ${monster.name}!`,
      monster: monster,
      action: () => startBattle(player, monster),
    };
  } else if (roll < 0.8) {
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
    return {
      type: "nothing",
      message: "Kamu berkelana jauh... tapi tidak menemukan apa-apa.",
    };
  }
}
