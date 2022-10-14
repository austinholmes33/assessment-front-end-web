console.log("hello world");
// const cat = document.querySelector("#small-cat")


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been successfully submitted");
}

function compliment (event) {
	event.preventDefault()
	alert("You look well today!")
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
form.addEventListener('mouseover', compliment)