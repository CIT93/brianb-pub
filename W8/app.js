//array of objects

const dayList = [
  {
    day: "Thursday",
    temp: 90,
    awake: 11,
  },
  {
    day: "Friday",
    temp: 99,
    awake: 12,
  },
  {
    day: "Saturday",
    temp: 80,
    awake: 10,
  },
];

//function factoring in the temp and time woke up from the array of objects
let dogWalk = function (obj) {
  if (obj.awake >= 12 && obj.temp >= 95) {
    return "It is too late and too hot to walk the dogs";
  } else if (obj.awake >= 12 && obj.temp < 95) {
    return "It is too late to walk the dogs";
  } else if (obj.awake < 12 && obj.temp >= 95) {
    return "It is too hot to walk the dogs";
  } else if (obj.awake < 12 && obj.temp < 95) {
    return "It is still cool and early, you may walk your dogs";
  }
};

//global variable linking dayInfo to the array & defining dayOff as true
let dayInfo = [];
let dayOff = false;

//function rendering output to DOM and my attempt to plug in a function the checkbox that overrides other function
renderDayList = function () {
  if (dayOff === false) {
    document.querySelector("#dayInfo").innerHTML =
      "You have work today, you cannot walk the dogs";
  } else {
    dayList.forEach(function (obj) {
      dayInfo.push(dogWalk(obj));
    });
  }
  return dayInfo;
};

//event listener that shows the submit button has been clicked
document.querySelector("button").addEventListener("click", function (e) {
  document.getElementById("dayInfo").innerHTML = renderDayList();
  e.target.textContent = "Results are being displayed";
});

//event listener that monitors whether the checkbox was checked or not
document.querySelector("#checkbox").addEventListener("change", function (e) {
  dayOff = e.target.checked;
});

//event listener that allows the remove results button to remove results
document.querySelector("#remove-all").addEventListener("click", function () {
  document.querySelectorAll("#dayInfo").forEach(function (result) {
    result.remove();
  });
});