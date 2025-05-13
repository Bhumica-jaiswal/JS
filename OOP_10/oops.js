const user={
    username:"BHUMICA JAISWAL",
    logincount:14,
    signedIn:true,
    //method
    getUserDetails: function(){
        console.log("got user details from DB");
        console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails);
// console.log(this); //gives an object

function User(username,logincount,loggedin){
    this.username=username;
    this.logincount=logincount;
    this.loggedin=loggedin;
    this.greeting=function(){
        console.log(`welcome ${this.username}`)
    }
    return this;
}

const userone=new User("bhumica",34,true);
console.log(userone);
userone.greeting(); //will print welcome bhumica
const usertwo = new User("Totooo",70,false);
console.log(userone.constructor)
