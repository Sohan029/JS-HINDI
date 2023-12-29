# 5-JS DOM Projects :

## source code:

## HTML :
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
    rel="stylesheet"
/>
    <link rel="stylesheet" href="bulb.css">
</head>
<body>
    <div class="box">
        <img src="https://images.unsplash.com/photo-1603424588650-3f7145da47f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfEJuLURqcmNCcndvfHxlbnwwfHx8fHw%3D" alt="">
        <h2>Rider</h2>
        <h1 class="text-change">Stranger</h1>
        <div class="click">
            <!-- <button class="remove">Remove</button> -->
            <button class="add">Add</button>
        </div>
        <i class="ri-heart-3-fill"></i>
    </div>
    <div class="cursor"></div>


    <script src="test.js"></script>
</body>
</html>
```
## CSS :
```CSS
body{
    display: flex;
    justify-content: center;
    background-color: cornflowerblue;

}


.box{
    height: 400px;
    width:250px;
    margin-top: 100px;
    border-radius: 10px;
    background-color: rgb(208, 152, 240);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px;
    
}

.box i{
    font-size: 60px;
    color: rgb(249, 82, 82);
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(0);
    transition: transform ease 0.5s;
}


.box img{
    height: 55%;
    width: 75%;
    object-fit: cover;
    /* margin-top: 20px; */
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
}

.box h2{
    font-weight: 800;
    font-style: normal;
    /* font-family: 'Courier New', Courier, monospace; */
    color: red;
}

.box h1{
    font-weight: bold;
    font-style: normal;
    /* font-family:  Courier, monospace; */
    color: red;
}

.click{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}


.add{
    padding: 5px 25px;
    font-size: large;
    font-weight: 800;
    font-style: normal;
    font-family: 'Courier New', Courier, monospace;
    background-color: cornflowerblue;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.remove{
    padding: 5px 10px;
    font-size: large;
    font-weight: 800;
    font-style: normal;
    font-family: 'Courier New', Courier, monospace;
    background-color: #dadada;
    border: white;
    border-radius: 5px;
    cursor: pointer;
}

.cursor{
    height: 20px;
    width: 20px;
    background-color: #fff;
    border-radius: 100%;
    position: absolute;
    transition: all linear 0.1s;
    mix-blend-mode: color-dodge;
}
```

## JavaScript :
```Javascript
const add = document.querySelector('.add')
const change = document.querySelector('.text-change')
const heart = document.querySelector('.ri-heart-3-fill')
const box = document.querySelector('.box')
const body = document.querySelector('body')
const cursor = document.querySelector('.cursor')

let flag =0;
let big = 1;

body.addEventListener('mousemove',function(act){
        cursor.style.left = act.x + 'px';
        cursor.style.top = act.y + 'px';
})


box.addEventListener('dblclick',function(){
        heart.style.transform = 'translate(-50%,-50%) scale(2)';
        heart.style.opacity = 0.8;

        setTimeout(function(){
                heart.style.opacity = 0;
                heart.style.transform = 'translate(-50%,-50%) scale(0)';
        },1000)
})

add.addEventListener('click',function (){
        if(flag == 0){
                change.innerHTML = 'Friends'
                change.style.color = 'green'
                add.innerHTML = 'Remove'
                add.style.color = 'Red'
                add.style.background = '#dadada'

                flag=1;
        }
        else{
                change.innerHTML = 'Stranger'
                change.style.color = 'Red'
                add.innerHTML = 'Add'
                add.style.color = 'green'
                add.style.background = 'cornflowerblue'
                flag=0; 
        }
})


```