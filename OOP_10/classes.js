class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const rudra= new user("rudra","rudra@gmail.com","456");
console.log(rudra.encryptPassword())
console.log(rudra.changeUsername());

//behind the scene
function user(username,email,password){
     this.username = username;
    this.email = email;
    this.password = password
}
user.prototype.encryptPassword=function(){
      return `${this.password}abc`
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const toto= new user("toto","toto@gmail.com","bcg");
console.log(toto.encryptPassword())
console.log(toto.changeUsername());
