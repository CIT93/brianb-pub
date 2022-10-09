//gets data from saved storage
const getSavedDogWalk = function () {
	const dailyJSON = localStorage.getItem('dogWalk');
	if (dailyJSON !== null) {
		return JSON.parse(dailyJSON);
	} else {
		return [];
	}
};
//saves to local storage
const saveDaily = function (dogWalk) {
	localStorage.setItem('dogWalk', JSON.stringify(dogWalk));
};

//function factoring in the temp and time woke up from the array of objects
const getDogWalk = function (dayList) {
    if (dayList.awake >= 12 && dayList.temp >= 95) {
      return "It is too late and too hot to walk the dogs";
    } else if (dayList.awake >= 12 && dayList.temp < 95) {
      return "It is too late to walk the dogs";
    } else if (dayList.awake < 12 && dayList.temp >= 95) {
      return "It is too hot to walk the dogs";
    } else if (dayList.awake < 12 && dayList.temp < 95) {
      return "It is still cool and early, you may walk your dogs";
    }
  };

  //function rendering output to DOM and my attempt to plug in a function to the checkbox that overrides other function
const renderDayList = function () {
    if (dayOff === false) {
      document.querySelector("#dayInfo").innerHTML =
        "You have work today, you cannot walk the dogs";
    } else {
      dayList.forEach(function (dayList) {
        dayInfo.push(dogWalk(dayList));
      });
    }
    return dayInfo;
  };