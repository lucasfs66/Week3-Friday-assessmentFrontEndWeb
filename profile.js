console.log('Hello')
const myFavColor = document.querySelector('#color')
const myFavPlace = document.querySelector('#place')
const myFavRitual = document.querySelector('#ritual')
const submit = document.querySelector('#button')
const text = document.querySelector('#text')

console.log(text)

const favColor = event => {
    event.preventDefault();

    alert('Blue');
}

const favPlace = event => {
    event.preventDefault();

    alert('In whatever place my family is')
}

const favRitual = event => {
    event.preventDefault();

    alert('I always organize the room that I am going to study, before study')
}

const tellMe = event => {
    event.preventDefault();

    alert('Nice to meet you');
}



myFavColor.addEventListener('click', favColor)
myFavPlace.addEventListener('click', favPlace)
myFavRitual.addEventListener('click', favRitual)
submit.addEventListener('click', tellMe)
