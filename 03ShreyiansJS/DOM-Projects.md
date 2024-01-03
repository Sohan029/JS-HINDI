# 5-JS DOM Projects :

## Source code for 1,2,3 Projects [Facebook Friend Request, Instagram like feature,  Custom cursor ] :

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

## Source code for 4th Project [Multiple image hovering animation ]:
## HTML :
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="main">
        <div class="box">
            <h1>Avengers</h1>
            <img src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        </div>
        <div class="box">
            <h1>Oppenhemeir</h1>
            <img src="data:image/jpeg;base64,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" alt="">
        </div>
        <div class="box">
            <h1>Salaar</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9MyjYCfLppIkyzrRVKOyPFij9c0-5Hr2JA&usqp=CAU" alt="">
        </div>
        <div class="box">
            <h1>Breaking Bad</h1>
            <img src="data:image/jpeg;base64,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" alt="">
        </div>
    </div>
    <script src="./mouse.js"></script>
</body>
</html>
```

## CSS :
```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;

}


html, body{
    height: 100%;
    width: 100%;
}

.main{
    height: 100%;
    width: 100%;
    background-color: #111;
    position: relative;
    /* Always parent element need to 'RELATIVE' */
}

.box{
    width: 100%;
    height: 120px;
    border-bottom: 2px solid white;
    background-color: transparent;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* position: relative; it will not work for other elements 
    below the first element, because the absolute image(child) takes the 
    reference as their respective '.box'(parent) */
}


.box h1{
    font-size: 60px;
    z-index: 10;
    mix-blend-mode: difference;
}

.box img{
    height: 100px;
    width: 100px;
    object-fit: cover;
    object-position: center;
    border-radius: 100%;
    border: 3px solid white;
    position: absolute;
    opacity: 0;
    /* transform: translate(-50%,-50%); */
}
```
## JavaScript :

```js
const box = document.querySelectorAll('.box')


box.forEach(function (index){
    
    index.addEventListener('mouseenter',function (){
        index.childNodes[3].style.opacity = 1;
        index.style.backgroundColor = 'red';
    });
    
    index.addEventListener('mouseleave',function (){
        index.childNodes[3].style.opacity = 0;
        index.style.backgroundColor = 'transparent';
    });

    index.addEventListener('mousemove',function (point){
        index.childNodes[3].style.left = point.x+'px';
        index.childNodes[3].style.top = point.y+'px';
    });
});
```
# Project-5 
## Instagram Post :-
### HTML :-
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="page">
        <div class="temp"></div>
        <div class="story-col">
           
        </div>
    </div>
    <script src="./post.js"></script>
</body>
</html>
```
### CSS :-
```css
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 255, 255, 0.678);
    display: flex;
    justify-content: center;
    align-items: center;
}

.page{
    height: 450px;
    width: 250px;
    background-color: aliceblue;
    border-radius: 20px;
    border: 3px solid black;
    position: relative;
    overflow: hidden;
}


.story-col{
    height: 100px;
    width: 100%;
    padding: 15px;
    border-bottom: 2px solid #dadada;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
}

.story-col::-webkit-scrollbar{
    display: none;
}

.story{
    height: 70px;
    width: 70px;
    border-radius: 50%;
    border: 4px solid rgb(205, 2, 2);
    display: inline-block;
    margin-right: 15px;
    overflow: hidden;
}

.story img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
}



.temp{
    height: 100%;
    width: 100%;
    background-size:cover ;
    background-position: center;
    position: absolute;
    display: none;
    border-radius: 10px;
    
}


/* .temp img{
    height: 90%;
    width: 90%;
    object-fit: cover;
    object-position: center;
    border: 5px solid white;
} */
```
### Java Script :-
```js
let arr = [
    {
        dp:'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww',
        posts:'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        dp:'https://media.istockphoto.com/id/1477512135/photo/group-of-friends-admiring-view-at-historic-site.jpg?s=612x612&w=0&k=20&c=LyLbPa_3Y_TjBdca-lQeReHNqR1WwxxIwi5XhxW_F7w=',
        posts:'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        dp:'https://images.unsplash.com/photo-1688644978479-028be9fa91e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTV8fHxlbnwwfHx8fHw%3D',
        posts:'https://plus.unsplash.com/premium_photo-1679314213957-909df10381ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        dp:'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        posts:'https://images.unsplash.com/photo-1546499474-fc5cb88c86ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHwzMzUzNTM5fHxlbnwwfHx8fHw%3D'  
    },
    {
        dp:'https://images.unsplash.com/photo-1610415462601-3a720ee9984f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
        posts:'https://images.unsplash.com/photo-1503919275948-1f118d8ecf0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwzMzUzNTM5fHxlbnwwfHx8fHw%3D'
    },
    {
        dp:'https://images.unsplash.com/photo-1516575334481-f85287c2c82d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
        posts:'https://images.unsplash.com/photo-1565301660306-29e08751cc53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D'

    }
]

let clutter=''

arr.forEach(function(obj,ind){
    clutter+= `<div class="story">
    <img id="${ind}" src="${obj.dp}" alt="">
   </div>`
})

let temp = document.querySelector('.temp')
let storyCol = document.querySelector('.story-col')
storyCol.innerHTML= clutter

storyCol.addEventListener('click',function(det){
    // arr.forEach(function(val,ind){
    //     if(det.target.id == ind){
    //         temp.style.display = 'flex'        
    //         // temp.innerHTML = `<img src='${arr[det.target.id].posts}'></img>`
    //         temp.style.backgroundImage = 'url(${arr[det.target.id].posts})'
    //     }
    // })
    temp.style.display = 'block'
    temp.style.backgroundImage = `url(${arr[det.target.id].posts})`

    setTimeout(function(){
        temp.style.display = 'none'
    },2000)
    
})
```
