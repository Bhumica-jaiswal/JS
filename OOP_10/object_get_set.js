//in the object how to use getter setter
const user={
    _email:"bhumi@b.com",
    _password:"abcd",
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value;
    }
}
const tea=Object.create(user);
console.log(tea.email)