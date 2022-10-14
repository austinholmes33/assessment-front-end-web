console.log("hello world");


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
// form.addEventListener('mouseover', compliment)
// the above event listener was causing the alert to occur when mousing over the middle of the page as well, 
// so I opted to use onmouseover in the html file itself, which solved the issue. 