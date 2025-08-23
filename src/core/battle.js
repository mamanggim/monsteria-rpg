// src/core/battle.js
import { addMonsterToCollection } from "../utils/storage.js";

export function startBattle(player, monster, options = {}) {
  let battleLog = [];
  let battleOver = false;

  let playerHP = 30; // sementara fix (nanti ambil dari data player)
  let monsterHP = monster.hp;

  battleLog.push(`⚔️ Battle dimulai! ${monster.name} muncul.`);

  function attack() {
    if (battleOver) return;

    // Player serang monster
    const dmgToMonster = Math.max(1, 5 - monster.defense); // dummy dmg
    monsterHP -= dmgToMonster;
    battleLog.push(`Kamu menyerang ${monster.name} dan memberikan ${dmgToMonster} damage!`);

    // Cek monster kalah
    if (monsterHP <= 0) {
      battleLog.push(`🎉 Kamu mengalahkan ${monster.name}!`);
      battleOver = true;
      return;
    }

    // Monster balas
    const dmgToPlayer = Math.max(1, monster.attack - 2);
    playerHP -= dmgToPlayer;
    battleLog.push(`${monster.name} menyerangmu sebesar ${dmgToPlayer} damage!`);

    if (playerHP <= 0) {
      battleLog.push(`💀 Kamu kalah melawan ${monster.name}...`);
      battleOver = true;
    }
  }

  function capture() {
    if (battleOver) return;
    if (monsterHP > monster.hp / 2) {
      battleLog.push(`⚠️ HP ${monster.name} masih terlalu tinggi untuk ditangkap!`);
      return;
    }

    const chance = Math.random();
    if (chance < 0.7) {
      addMonsterToCollection(player, monster);
      battleLog.push(`🎉 Kamu berhasil menangkap ${monster.name}!`);
      battleOver = true;
    } else {
      battleLog.push(`❌ Capture gagal! ${monster.name} masih bebas.`);
    }
  }

  function run() {
    if (battleOver) return;
    battleLog.push(`🏃 Kamu kabur dari ${monster.name}.`);
    battleOver = true;
  }

  return {
    log: battleLog,
    attack,
    capture,
    run,
    isOver: () => battleOver,
    playerHP: () => playerHP,
    monsterHP: () => monsterHP,
  };
}
