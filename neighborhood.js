 

const button = document.querySelector('button')
const li = document.querySelectorAll('li')

// console.log(li)

const randomPlace = event => {
    event.preventDefault();

    let i = Math.floor(Math.random() * 3)

    alert(li[i].firstChild.textContent);
}

button.addEventListener('click', randomPlace)