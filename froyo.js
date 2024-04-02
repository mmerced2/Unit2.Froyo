const userFroyoChoices = prompt(
  "Please enter the froyo flavor you would like (separate using commas):"
);

// Split the string of numbers into an array of strings.
const FroyoArray = userFroyoChoices.split(",");

//console.log(FroyoArray);

function getCount() {
  const myFroyo = {};

  for (let i = 0; i < FroyoArray.length; i++) {
    let currentItem = FroyoArray[i];
    if (currentItem in myFroyo) {
      myFroyo[currentItem] += 1;
    } else {
      myFroyo[currentItem] = 1;
    }
  }
  return myFroyo;
}
console.table(getCount())
