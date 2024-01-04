# Dom projects

## Project-1
## source code :
```JavaScript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button){
  button.addEventListener('click',function (e){
    if(e.target.id === 'grey'){
      body.style.background = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.background = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.background = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.background = e.target.id
    }
  })
})
```


## project-2
## source code :

```javascript
const form = document.querySelector('form')
const result = document.querySelector('#results')

form.addEventListener('submit',function (e){
  e.preventDefault()

  //by declaring height and weight in event listener scope you can get present input value not empty

  let height = parseInt(document.querySelector('#height').value)
  let weight = parseInt(document.querySelector('#weight').value)
  
  // validation phase

  if(height<0 || height == '' || isNaN(height)){
    result.innerHTML = 'check the height input provided !!!'
  }
  else if(weight<0 || weight == '' || isNaN(weight)){
    result.innerHTML = 'check the weight input provided !!!'
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = bmi
  }
})
```


## project-3
## source code :

```javascript
const clock = document.querySelector('#clock')

setInterval(function (){
  const date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
},1000)
```

## Project-4 :-
## Guess the number :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../styles.css">
</head>
<body style="background-color:#212121; color:#fff;">
  <nav>
    <a href="/" aria-current="page">Home</a>
    <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
      >Youtube channel</a
    >
  </nav>
    
    <div id="wrapper">
      <h1>Number guessing game</h1>
    <p>Try and guess a random number between 1 and 100.</p>
    <p>You have 10 attempts to guess the right number.</p>
    </br>
        <form class="form">
            <label2 for="guessField" id="guess">Guess a number</label>
            <input type="text" id="guessField" class="guessField">
            <input type="submit" id="subt" value="Submit guess" class="guessSubmit">
        </form>

        <div class="resultParas">
            <p >Previous Guesses: <span class="guesses"></span></p>
            <p >Guesses Remaining: <span class="lastResult">10</span></p>
            <p class="lowOrHi"></p>
        </div>
    </div>
    <script src="chaiaurcode.js"></script>
</body>
</html>
```

## CSS :
```css
html {
  font-family: sans-serif;
}

body {
  width: 300px;
  max-width: 750px;
  min-width: 480px;
  margin: 0 auto;
  background-color: #212121;
}

.lastResult {
  color: white;
  padding: 7px;
}

.guesses {
  color: white;
  padding: 7px;
}

button {
  background-color: #141414;
  color: #fff;
  width: 250px;
  height: 50px;
  border-radius: 25px;
  font-size: 30px;
  border-style: none;
  margin-top: 30px;
  /* margin-left: 50px; */
}

#subt {
  background-color: #161616;
  color: #ffffff;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  border-style: none;
  margin-top: 50px;
  /* margin-left: 75px; */
}

#guessField {
  color: #000;
  width: 250px;
  height: 50px;
  font-size: 30px;
  border-style: none;
  margin-top: 25px;

  /* margin-left: 50px; */
  border: 5px solid #6c6d6d;
  text-align: center;
}

#guess {
  font-size: 55px;
  /* margin-left: 90px; */
  margin-top: 120px;
  color: #fff;
}

.guesses {
  background-color: #7a7a7a;
}

#wrapper {
  box-sizing: border-box;
  text-align: center;
  width: 450px;
  height: 600px;
  background-color: #474747;
  color: #fff;
  font-size: 25px;
}

h1 {
  background-color: #161616;

  color: #fff;
  text-align: center;
}

p {
  font-size: 16px;
  text-align: center;
}

.repeatGame{
  background-color: #fff;
  color: #000;
  border-radius: 10px;
  width: fit-content;
  padding: 5px 20px;
  font-size: 20px;
  margin: auto;
  cursor: pointer;
  font-weight: 800;
}
```
## Java-Script :
```js
const number = parseInt(Math.random()*100+1)

let userInput = document.querySelector('.guessField')
let submit = document.querySelector('.guessSubmit')

let previous = document.querySelector('.guesses')
let remainig = document.querySelector('.lastResult')
let lowOrHi = document.querySelector('.lowOrHi')
let resultParas = document.querySelector('.resultParas')

let repeatGame = document.createElement('div')

let guesses = []
let count = 1
let playGame = true


if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    let guess = parseInt(userInput.value)
    validate(guess)
  })
}

function validate(guess){
  if(guess<1){
    alert('Please enter value greater than 0')
  }else if(guess>100){
    alert('Please enter value less than 100')
  }else if(isNaN(guess)){
    alert('Please enter a valid number')
  }else{
    cleaner(guess)
    if(count === 11){
      displayMessage(`Your's Turns Completed and Random number is ${number}`)
      endGame()
    }
    else{
      guesses.push = guess
      count++
      check(guess)
    }
  }
}

function check(guess){
  if(guess < number){
    displayMessage('Number is Low')
  }else if(guess > number){
    displayMessage('Number is High')
  }else if(guess === number){
    displayMessage('Congrats !!, You Guessed Correctly')
    endGame()
  }
}

function cleaner(guess){
  userInput.value = ''
  previous.innerHTML += `${guess}, `
  remainig.innerHTML = `${10 - count}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h3>${message}</h2>`
}

function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  previous.innerHTML = ''
  remainig.innerHTML = ''
  repeatGame.innerHTML = 'Start-Again'
  repeatGame.className = 'repeatGame'
  resultParas.appendChild(repeatGame)
  playGame = false
  newGame()
}

function newGame(){
  repeatGame.addEventListener('click',function(){
    userInput.removeAttribute('disabled')
    guesses = []
    count = 1
    lowOrHi.innerHTML = ''
    remainig.innerHTML = `${11 - count}`
    resultParas.removeChild(repeatGame)
    playGame = true
  })
}

```
