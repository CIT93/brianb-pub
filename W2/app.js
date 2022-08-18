const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
}


let dayOff = true

if (dayOff = true) {
    console.log('You can walk the dogs today')
} else if (dayOff = false) {
    console.log('You cant walk the dogs today. Go to work!')
}

let timeWokeUp = 8
let timeLeftToWalkDogs = (11 - timeWokeUp)
console.log (timeLeftToWalkDogs)

let sochiWalked = false
let charliewalked = false

if (sochiWalked && charliewalked) {
    let bothDogsWalked = 'Both dogs have been walked'
    console.log (bothDogsWalked)
} else if (sochiWalked || charliewalked) {
    let oneDogWalked = 'I still need to walk the other dog'
    console.log (oneDogWalked)
} else {
    let walkBothdogs = 'I need to walk both dogs!'
    console.log (walkBothdogs)
}

showOnPage ('---<b>My global variable data</b>---')
showOnPage('Is it my day off? ---> ' + dayOff)
showOnPage ('What time did I wake up ---> ' + timeWokeUp)
showOnPage ('Have I walked Sochi yet? ---> ' +sochiWalked)
showOnPage ('Have I walked Charlie yet? --> ' + charliewalked)
showOnPage ('--- <b>End of global variable data<b> ---')
  
showOnPage('Can I walk the dogs today? ---> ' + dayOff )
showOnPage('Time left to walk dogs before its too hot for them: ' + timeLeftToWalkDogs + ' hours')
showOnPage('Dog walking status: '  )