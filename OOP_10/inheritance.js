class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
console.log(`USERNAME IS ${this.username}`);
    }
}

class student extends user{
    constructor(username,password){
        super(username); //this gets the access of username directly from the class user
        this.password=password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const bhumi = new student("bhumi","pitty")
bhumi.logMe();
bhumi.addCourse();

const deo= new user("deo")
deo.logMe();
// deo.addCourse(); //will give an error
console.log(deo instanceof user)