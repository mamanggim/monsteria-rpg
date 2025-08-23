// src/utils/storage.js

// Ambil data player dari localStorage
export function getPlayer() {
  const data = localStorage.getItem("player");
  if (data) return JSON.parse(data);

  // default player baru
  return {
    name: "Adventurer",
    isNew: true,
    monsters: [],
    inventory: [],
    wallet: { teria: 0, crystal: 0 }
  };
}

// Simpan player
export function savePlayer(player) {
  localStorage.setItem("player", JSON.stringify(player));
}

// Tambahkan monster ke koleksi
export function addMonsterToCollection(player, monster) {
  player.monsters.push(monster);
  savePlayer(player);
}

// Tambahkan item ke inventory
export function addItemToInventory(player, item) {
  player.inventory.push(item);
  savePlayer(player);
}
