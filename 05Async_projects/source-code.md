# Source Code :
## Continious Color-Changer :

## html:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
  </head>
  <body style="background-color: #212121; color: #fff">
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>

    <h1>Start should change the Background color every second</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <script src="color.js"></script>
  </body>
</html>

```
## JavaScript :
```js
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const body = document.querySelector('body');

// Random Color Generator Function

function randomColor() {
  const range = '0123456789ABCDEF';
  let color = '#';

  for (i = 0; i < 6; i++) {
    color += range[Math.floor(Math.random() * 16)];
  }
  return color;
}

let val;

start.addEventListener('click', function () {
  if(!val){
    val = setInterval(function () {
      body.style.backgroundColor = randomColor();
    }, 1000);
  }
});

stop.addEventListener('click', function () {
  clearInterval(val);
  val = null;
});

let sohan = null
console.log(sohan);
sohan = 2
console.log(sohan);



// I think the 'Stop' button not 'seemingly' working at 29:10 is not because of indexId value being changed from null to the reference of setInterval()
//  but because of that prior to clicking the 'Stop' button, the 'Start' button was clicked multiple times hence multiple setInterval() methods are running
// simultaneously. The indexId has the reference of only the last setInterval() and the references of the previously started intervals have been lost. 
// Clicking on 'Stop' clears that process but the other prior started setIntervals continue to run hence it appears that 'Stop' did not work at all. 
// The check if(!intervalId) ensures that if an interval is already executing, another interval should not start. Great series overall! Enjoyed watching
//  and doing the projects myself alongside
```

## KeyBoard Events :
## HTML :
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Event KeyCodes</title>
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <style>
      table,
      th,
      td {
        border: 1px solid #e7e7e7;
      }
      .project {
        background-color: #1c1c1c;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100vh;
      }

      .color {
        color: aliceblue;
        display: flex;
        flex-direction: row;
      }
    </style>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="project">
      <div id="insert">
        <div class="key">Press the key and watch magic</div>
      </div>
    </div>

    <script src="./color.js"></script>
  </body>
</html>

```

## JavaScript :
```js
const insert = document.getElementById('insert')


document.body.addEventListener('keydown',function(e){
  insert.innerHTML=`
  <div class="color">
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key == ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table></div>
`
})
```