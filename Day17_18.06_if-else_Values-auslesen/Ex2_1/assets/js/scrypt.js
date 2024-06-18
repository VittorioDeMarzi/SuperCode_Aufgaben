const mikeGröße = 168;
const mikeAlter = 34;
const johnGröße = 170;
const johnAlter = 22;

function getScore(größe, alter) {
  return alter * 5 + größe;
}

const mikeScore = getScore(mikeGröße, mikeAlter);
const johnScore = getScore(johnGröße, johnAlter);

console.log(`John score: ${johnScore}`);
console.log(`Mike score: ${mikeScore}`);

if (mikeScore < johnScore) {
  console.log(`John gewinnt das Spiel mit ${johnScore} Punkten!`);
} else if (mikeScore == johnScore) {
  console.log(`Das Spiel endet mit einem Unentschieden von ${johnScore} Punkten!`);
} else {
  console.log(`Mike gewinnt das Spiel mit ${mikeScore} Punkten!`);
}

