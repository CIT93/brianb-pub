const showOnPage = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};

showOnPage("<b>---Am I able to walk my dogs today?---</b>");

const dayList = [
  {
    day: Thursday,
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

const walkTheDogs = {
  timeToWalkDog: function () {
    walkingPrompt = "";

    if (remainingTime >= 1) {
      walkingPrompt = "is plenty of time left, you can still walk dogs";
    } else if (remainingTime < 1) {
      walkingPrompt = "isnt enough time, you cannot walk dog";
    }

    return `you have ${remainingTime} hours left before noon. There ${walkingPrompt}`;
  },
  whatIsTheTemp: function (tooHot) {
    tempPrompt = "";

    if (tooHot < 95) {
      tempPrompt = "It is cool enough to walk dogs";
    } else if (tooHot > 95) {
      tempPrompt = "It is too hot, you cannot walk dogs";
    }

    return `It is ${tooHot} degrees, ${tempPrompt}`;
  },
};