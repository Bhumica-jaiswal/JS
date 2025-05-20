//in the classs , how to use getter-setter
class user{
    constructor(email,password){
        this.email=email
        this.password=password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value;
    }
    get password(){
        return `${this._password}bhumica`
    }
     set password(value){
        this._password = value
    }
}

const bhumi=new user("bhumi@b.com","abc")
console.log(bhumi.email);