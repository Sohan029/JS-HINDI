# Differnce Between JSON.parse() And .json() :-

## source code :-
### Java-Script :-
### Summary:-
#### 
In JavaScript, JSON.parse() is a method that parses a JSON string and converts it into a JavaScript object, while the .json() method is typically used in the context of handling responses from the Fetch API to extract JSON data directly.
```js
const promise = new Promise(function(resolve,reject){
    resolve(fetch('https://jsonplaceholder.typicode.com/users')) //It will take some time to bring the information from site
}).then(function(data){
    console.log(typeof data); //json response type
    return data.json()        //It will take some time to convert data from fetch response type to json type
})
.then(function(data){
    console.log(typeof data); // json object type (After fetch)
    console.log(data); // for this example the data is available as Array of Objects [{},{},{}]
    data.forEach(element => {
        console.log(element.username);
});
})
```
