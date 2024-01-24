# With and without Class Keyword :-

## 1) With Class Key-word or syntactic-sugar-coat :-
```js
class User{
    constructor(username,email){
        this.username= username
        this.email=email
    }
    login(){
        return `${this.username} is logined!!`
    }
}

const obj1 = new User('sohan','abc@gmail.com')
console.log(obj1.username);
console.log(obj1.login());
```
## 2) Behind the wood or without class key-word :-
```js
function User(username,email){
    this.username= username
    this.email
}

User.prototype.login = function(){
    return `${this.username} is logined!!`
}

const obj1 = new User('rohan','123@gmail.com')
console.log(obj1.username);
console.log(obj1.login());

```