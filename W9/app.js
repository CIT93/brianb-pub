const name = document.getElementById('name')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {

  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(',')
  }
})

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

//global variable linking dayInfo to the array & defining dayOff as true
let dayInfo = [];
let dayOff = true;
// calls function from function app
let dogWalk = getDogWalk



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