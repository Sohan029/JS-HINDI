# Git-API-Project
## Source Code

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="color.css">
</head>
<body>
  <div class="box">
    
  </div>
</body>
<script>
  const box = document.querySelector('.box')

  let xhr = new XMLHttpRequest()
  xhr.onreadystatechange = ()=> {
    console.log(xhr.readyState);
  }
  xhr.open('GET','https://api.github.com/users/hiteshchoudhary')
  xhr.send()

  let follower,pic

  setTimeout(()=>{
    let data = JSON.parse(xhr.responseText)
    follower=data.followers
    pic = data.avatar_url
    
    
    const img = document.createElement('img')
    const count = document.createElement('div')
    img.src = pic
    count.innerHTML=`<h1>Followers : ${follower}</h1>`
    
    box.appendChild(img)
    box.appendChild(count)
    
  },1000)

</script>
</html>
```

### CSS
```css
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body{
    height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    color: aliceblue;
}

.box{
    height: 250px;
    width: 350px;
    background-color: rgb(84, 36, 160);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}



.box img{
    height: 100px;
    width: 100px;
    border: 2px solid white;
    object-fit: cover;
    object-position: center;
    border-radius: 20px;
    
}
```