

const dayList = [
  {
    day: 'Monday',
  },
  {
    day: 'Tuesday',
  },
  {
    day: 'Wednesday',
  },
  {
    day: 'Thursday'
  }
];

const dogWalk = function () { 
    let temp = Math.floor(Math.random() * 120);
    let timeWokeUp = Math.floor(Math.random() * 15);
   
    if (timeWokeUp >= 12 && temp >= 95) {
    return "It is too late and too hot to walk the dogs";
  } else if (timeWokeUp >= 12 && temp < 95) {
    return "It is too late to walk the dogs";
  } else if (timeWokeUp < 12 && temp >= 95) {
    return "It is too hot to walk the dogs";
  } else if (timeWokeUp < 12 && temp < 95) {
    return "It is still cool and early, you may walk your";
  }
};

const decision = function () {
  dayList.forEach(function () {
  });
};

decision();

const newParagraph = document.createElement('p')
newParagraph.textContent = "If it is before 12 P.M. and under 95 degrees it will say it's ok to walk the dogs"
document.querySelector('body').appendChild(newParagraph)

document.querySelector('button').addEventListener('click', function(e) {
    e.target.textContent = "clicked!"
})