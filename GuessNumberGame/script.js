const submit= document.querySelector('#subt')
const val = document.querySelector('#guessField')
const lastguess = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworHigh = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')

let random = parseInt(((Math.random()*100) +1))

let pregues=[]
let numguess=1
let playgame=true

if(playgame){
  submit.addEventListener('click',function(event){
    event.preventDefault()
    const guess = parseInt(val.value)
    validates(guess)
  })
}

function validates(guess){
    if(guess>0 && guess<101){
      pregues.push(guess)
        if(numguess>10) {
          displayguess(guess)
          displayMessage(`Game Over : The number was : ${random}`)
          endGame()
         }
        else {
          displayguess(guess)
          checkguess(guess)
        }
    }
    else{
      alert(`Enter a valid number between 0 to 101`)
    }
}

function checkguess(guess){
        if(guess===random){
          displayMessage(`You got the number : ${random}`)
          endGame()
        }else if(guess<random){
            displayMessage("The guess is lower than your guess")
        }else if(guess>random) {
          displayMessage("The guess is higher than your guess")
        }
}

function displayguess(guess){
        val.value='';
        lastguess.innerHTML+=`${guess}, `;
        numguess++;
        remaining.innerHTML=`${11-numguess}`;
}

function displayMessage(message){
        loworHigh.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    val.value='';
    val.setAttribute('disabled','')
    const p = document.createElement('button')
    // p.classList.add('button')
    p.id='newgame'
    p.textContent ='Start New game';
    startover.appendChild(p)
    playgame=false
    newGame()
}

function newGame(){
  const button = document.querySelector('#newgame')
  button.addEventListener('click',function(e){
    random = parseInt((Math.random()*100) +1)
    pregues=[]
    numguess=1
    lastguess.innerHTML=''
    remaining.innerHTML=`${11-numguess}`
    val.removeAttribute('disable')
    startover.removeChild(p)
    playgame=true
  })
}