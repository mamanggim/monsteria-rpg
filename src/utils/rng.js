export function rng(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomMonster() {
  const monsters = window.game.monsters;
  return { ...monsters[Math.floor(Math.random() * monsters.length)] };
}
