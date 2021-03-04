function judgeVegetable(vegetables, metric) {

  let highscore = 0;
  let winner = "";

  vegetables.forEach(function (veg) {
    if (veg[metric] > highscore) {
      highscore = veg[metric];
      winner = veg.submitter;
    }
  });

  return winner;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));