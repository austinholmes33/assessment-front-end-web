console.log('hello')

const color = document.querySelector("#color");
const place = document.querySelector("#place");
const ritual = document.querySelector("#ritual");

function favColor (event) {
    event.preventDefault();
    alert("Black")
}

function favPlace (event) {
    event.preventDefault();
    alert("Home")
}

function favRitual (event) {
    event.preventDefault();
    alert("Morning coffee")
}

color.addEventListener('click', favColor);
place.addEventListener('click', favPlace);
ritual.addEventListener('click', favRitual);