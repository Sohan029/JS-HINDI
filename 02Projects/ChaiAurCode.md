# Dom projects

[click here](https://cautious-funicular-446qp6pr4xrfjqpg.github.dev/)

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
