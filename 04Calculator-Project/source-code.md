# source-code :-

## HTML :-
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
        <div class="frame">
            <div class="display">
                <input type="text" id="area">
            </div>
            <div class="input">
                <div class="box opt">*</div>
                <div class="box opt">/</div>
                <div class="box opt">-</div>
                <div class="box opt">+</div>
                <div class="box number">9</div>
                <div class="box number">8</div>
                <div class="box number">7</div>
                <div class="box number">6</div>
                <div class="box number">5</div>
                <div class="box number">4</div>
                <div class="box number">3</div>
                <div class="box number">2</div>
                <div class="box number">1</div>
                <div class="box number">0</div>
                <div class="box number">.</div>
                <div class="box sign">=</div>
                <div class="box clear">c</div>
                </div>
            </div>
        </div>
    </main>

    <script src="app.js"></script>
</body>
</html>
```

## CSS :-
```css
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    height: 100%;
    width: 100%;
    background-color: #d6ccc2;
    color: aliceblue;
}


main{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.frame{
    width: 300px;
    height: 500px;
    background-color: #414141;
    border-radius: 20px;
    overflow: hidden;
}

.display{
    height: 140px;
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}

#area{
    width: 100%;
    height: 70px;
    background: #000;
    border: 0;
    outline: none;
    font-size: 40px;
    color: aliceblue;
    text-align: right;
}


.input{
    width: 100%;
    height: 350px;
    display: grid;
    padding: 10px;
    grid-template-columns: repeat(4,1fr);
    justify-items: center;
    align-items: center;
    padding: 15px;
    margin-top: 20px;
}

.box{
    height: 50px;
    width: 50px;
    background-color: aqua;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bolder;
    font-family: monospace;
    cursor: pointer;
}


.opt{
    background-color: orange;

}
.number{
    background-color: #d6ccc2;
    color: #000;
}

.sign{
    background-color: green;
}

.clear{
    background-color: red;
}
```

## Js :-
```js
const display = document.querySelector('#area')
const inputs = document.querySelectorAll('.box')
const equal = document.querySelector('.sign')
const clear = document.querySelector('.clear')


inputs.forEach(function(box){
    box.addEventListener('click',function(e){
        if(e.target.className == 'box opt' || e.target.className == 'box number'){
            display.value += e.target.innerHTML
        }
        // display.value += e.target.dataset.num
    })
    equal.addEventListener('click',function(){
        if(display.value != ''){
            display.value = eval(display.value)
        }
        else{
            display.value = ''
        }
    })
    clear.addEventListener('click',function(){
        display.value= ''
    })
})
```
## Output :-

![Screenshot (36)](https://github.com/Sohan029/JS-HINDI/assets/121715317/1e203efe-006a-4ed8-8954-8d8ce545fbfc)



