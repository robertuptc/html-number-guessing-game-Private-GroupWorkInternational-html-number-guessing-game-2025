function randomNum() {
    return Math.floor(Math.random() * (3 - 1) + 1)
};

const form = document.querySelector('form');
let div = document.getElementById('user-feedback')
let p = document.createElement('p')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let userNumber = e.target.elements[0].value
    if (Number(userNumber) == test) {
        p.innerHTML = 'You have WON!!!'
        div.appendChild(p)
    } else if (Number(userNumber) < test) {
        p.innerHTML = 'Guess Higher'
        div.appendChild(p)
    } else {
        p.innerHTML = 'Guess Lower'
        div.appendChild(p)

    }
});
let test= randomNum()
console.log('randomNum',test)