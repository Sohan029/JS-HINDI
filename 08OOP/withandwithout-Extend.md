# With And Without extend Keyword for inheritance :-

## 1) With Class key-word
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

class Admin extends User{
    logout(){
        return `${this.username} is log-outed!!`
    }
}

const obj1 = new User('sohan','abc@gmail.com')
const obj2 = new Admin('mohan','mohan@gmail.com')

console.log(obj2);
console.log(obj2.username);
console.log(obj2.login());
console.log(obj2.logout());
```

## 2) Behind the wood or without class and extend key-words :

```js
function User(username,email){
    this.username= username
    this.email = email
}

User.prototype.login = function(){
    return `${this.username} is logined!!`
}

function Admin(name,email,role){
    // Call function used for calling user-class
    // for adding properties to child and this key is admin's context
    User.call(this,name,email)
    this.role=role
}

// Adding parent methods to child class :-

Admin.prototype = Object.create(User.prototype)


Admin.prototype.logout = function(){
    return `${this.username} is log-outed!!`
}

const obj1 = new User('rohan','123@gmail.com')
const obj2 = new Admin('sohan','sohan@com','admin')

console.log(obj2.username);
console.log(obj2.email);
console.log(obj2.login());
console.log(obj2.role);
// console.log(obj1.role);
```