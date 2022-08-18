const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
}
showOnPage('Am I able to walk my dogs today?')

let dayOff = false
let timeWokeUp = 8
let drankMorningSmoothie = true
let morningYoga = true

showOnPage('<b>What time did i wake up?</b>')

if (timeWokeUp >= 12) {
showOnPage (timeWokeUp +', It is too late. It is too hot outside to walk dogs. I am unable to walk dogs this morning')
} else if (timeWokeUp <12) {
    showOnPage(timeWokeUp +', It is still early. It will not be too hot to walk dogs. I am able to walk dogs')
}

showOnPage('<b>Have I finished my morning exercise and drank my breakfast smoothie?</b>')

if (drankMorningSmoothie && morningYoga) {
    let bothTasksDone = 'Both taks are done, you are able to walk the dogs'
    showOnPage(bothTasksDone)
} else if (drankMorningSmoothie || morningYoga) {
    let oneTaskDone= 'One task is done, I am almost able to talk the dogs'
    showOnPage(oneTaskDone)
} else {
    let noTasksDone = 'No tasks are complete, I am unable to walk the dogs'
    showOnPage(noTasksDone)
}

showOnPage('<b>Is it my day off?</b>')

if (dayOff >= true) {
    showOnPage('Yes it is, you can walk the dogs today')
} else {
    showOnPage('No it isnt, you cant walk the dogs today. Go to work!')
}