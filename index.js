//code your solution here
const record = [
    {year: '2015', result: 'W'},
    {year: '2014', result: 'N/A'},
    {year: '2013', result: 'L'},
];
  
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win? win.year : undefined;
  }
  
  const yearOfWin = superbowlWin(record);
  if (yearOfWin) {
    console.log(`The Denver Broncos won the Superbowl in ${yearOfWin}`);
  } else {
    console.log("The Denver Broncos have never won the Superbowl");
  }