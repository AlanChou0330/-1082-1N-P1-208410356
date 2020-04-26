const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

let choseMaxLife = 100;
let currentMonsterHealth = choseMaxLife;
let currentPlayerHealth = choseMaxLife;

adjustHealthBars(choseMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentMonsterHealth -= playerDamage;
}

attackBtn.addEventListener('click', attackHandler);
