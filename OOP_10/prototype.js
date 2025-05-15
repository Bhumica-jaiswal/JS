let myname="BHUMICA   "
let mychannel = "Dev&Fash  "
// console.log(myname.trim().length);
let mygems=['mum','dad','sis'] //array
let mygemspower={     //object
    mum:'good food',
    dad:'hardwork',
    di:'supportive',
    getMumPower: function(){
        console.log(`mumma's power is ${this.mum}`);
            }
}
Object.prototype.bhumica=function(){
    console.log(`bhumica is present in all objects`);
    
}

Array.prototype.heybhumica=function(){
    console.log("Hey hello ");
    
}
// mygemspower.bhumica();
// mygems.bhumica();
// mygems.heybhumica();
// mygemspower.heybhumica(); giving an error bcz the powers of array wont go towards the object <<overall its true tht array is an object (objects powers can be given to array but reverse no wayyy)

//inheritance
const user={
    name:"toto",
    email:"meta@google.com"
}
const teacher={
    makevideo:true
}
const teachingsupport={
    isavailable:false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingsupport
}
teacher.__proto__= user
//modern syntax
Object.setPrototypeOf(teachingsupport,teacher) //teachingsupport will inherit from teacher
//use of true length
let anotherusername="bub   "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`);
}

anotherusername.trueLength();
"bhumicaaa     ".trueLength();