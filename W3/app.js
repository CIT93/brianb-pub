const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
}

showOnPage('<b>---Am I able to walk my dogs today?---</b>')


showOnPage('<b>Is there time left before noon?</b>')

let timeToWalkDog = function (timeWokeUp, twelvePm) {
    let remainingTime = (twelvePm - timeWokeUp)
   walkingPrompt = ''

    if(remainingTime >= 1) {
        walkingPrompt = 'is plenty of time left, you can still walk dogs'
    } else if (remainingTime <1) {
        walkingPrompt = 'isnt enough time, you cannot walk dog'
    }
   
    return `you have ${remainingTime} hours left before noon. There ${walkingPrompt}`
} 

let result = timeToWalkDog(8,12)

showOnPage(result)

showOnPage('<b>Is it too hot outide?</b>')

let whatIsTheTemp = function (ninteyFiveDegrees, currentTemp) {
    let tooHot = (ninteyFiveDegrees - currentTemp)
   tempPrompt = ''

   if (tooHot < 95) {
    tempPrompt = 'It is cool enough to walk dogs'
   } else if (tooHot > 95) {
    tempPrompt = 'It is too hot, you cannot walk dogs'
   }

   return `It is ${tooHot} degrees under 95, ${tempPrompt}`
}

let answer = whatIsTheTemp(95,80)

showOnPage(answer)