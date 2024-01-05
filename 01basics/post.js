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