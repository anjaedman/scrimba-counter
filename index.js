
let textTotal = document.getElementById("total")
// let totalEl = document.getElementById("total-el")
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");
// grab the count-el element, store it in a countEl variable
let count = 0
let countTotal = []
let showTotal;

function increment() {
    count += 1
    // set countEl's innerText to the count
    countEl.textContent = count
}

function save() {
    let countString = count + " - "
    saveEl.textContent += countString
    countEl.textContent = 0
    countTotal.push(count)
    showTotal = countTotal.reduce((partialSum, a) => partialSum + a, 0)
    textTotal.textContent = "Total: " + showTotal
    count = 0
}









// let welcomeEl = document.getElementById("welcome-el")
// let name = "Anja Clavebring"
// let greeting = "Welcome back! "
// welcomeEl.innerText = greeting + name
// console.log(welcomeEl.innerText)

// welcomeEl.innerText +=  "😘💕💕💕"

// let name = "Anja Clavebring"
// let greeting = "Hi, my name is "
// let myGreeting =  greeting + name
// console.log(myGreeting)



// let points = 4
// let bonusPoints = "10"
// let totalPoints = 4 + bonusPoints
// console.log(totalPoints)

// console.log(4 + 5)  //9
// console.log("2" + "4") //24
// console.log("5" + 1) //51
// console.log(100 + "100") //100100

// let username = "per"

// let message = "You have tree new notifications"
// console.log(message + ", " + username + "!")

// let messageToUser = message + ", " + username + "!"
//  console.log(messageToUser)


// function countdown() {

//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)

// }

// // Setting up the the race 🏎 🏎 🏎

// countdown()

// // GO! 🏁
// // Players are running the race 🏎 💨
// // Race is finished! 🍾

// // Get ready for a new race 🏎 🏎 🏎

// countdown()



// let lapsCompleted = 0

// // Create a function that increments the lapsCompleted variable with one
// // Run it three times

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

// let lapsCompleted = 0

// function incrementLap() {
// lapsCompleted = lapsCompleted + 1 * 3
// console.log(lapsCompleted)
// }

// incrementLap()
// console.log(lapsCompleted)

//hans rätta


// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// // Create a function that logs out the sum of all the lap times

// function lap() {
//     console.log(lap1 + lap2 + lap3)
// }

// lap()


// function anja() {

// console.log(42)
// }

// anja()


//bonusPoints + 1

// let bonusPoints  50

// bonusPoints = bonusPoints + 50
// bonusPoints = bonusPoints + 50
// bonusPoints = bonusPoints -75
// bonusPoints = bonusPoints + 45

// console.log(bonusPoints)



// let firstBatch = 5
// let secondBatch = 7
// let bonusPoints = firstBatch + secondBatch;
// console.log(bonusPoints);

// let myAge = 54;
// let humanDogRatio =  7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);



