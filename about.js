console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

const mouseOnDuck = event => {
	event.preventDefault();
	alert("You're cool")
}


let form = document.querySelector('#contact');
let img = document.querySelector('img')

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', mouseOnDuck)