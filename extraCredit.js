const restaurantBtn = document.querySelector("#random-restaurant")
const pizza = document.querySelector("#pizza")
const lonny = document.querySelector("#lonny")
const stageCoach = document.querySelector("#stage-coach")
// const allRestaurants = pizza + lonny + stageCoach

function randomize (event) {
    let myArr = [pizza, lonny, stageCoach] 
    let random = myArr[Math.floor(Math.random() * myArr.length)]
    alert(random)
}

restaurantBtn.addEventListener('click', randomize)
// I feel like I nearly got the randomize button. Mainly, I couldn't find out how to make the output of the randomized return
// match the links contained within the assigned id