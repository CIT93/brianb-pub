const showOnPage = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};

showOnPage("<b>---Am I able to walk my dogs today?---</b>");

const dayList = [
  {
    day: Thurday,
    timeWokeUp: 7,
    temp: 85
  },
  {
    day: Friday,
    timeWokeUp: 8,
    temp: 88
  },
  {
    day: Saturday,
    timeWokeUp: 12,
    temp: 95
  }
];

const timeToWalkDog = function (dayList) {
    timeToWalkDog = "";

    if (dayList.timeWokeUp < 12) {
      timeToWalkDog = "There is plenty of time left, you can still walk dogs";
    } else if (remainingTime > 12) {
      timeToWalkDog = "There isnt enough time, you cannot walk dog";
    }

    return dayList.timeWokeUp
}

dayList.forEach (function (item) {
  const order = item + 1
  showOnPage(`${order}. ${todo}`)
})

let canIWalk = timeToWalkDog();
showOnPage(`${canIWalk}`);