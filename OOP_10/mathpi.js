const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);//will give writable,enumerable,configurable prop
// Math.PI=5
// console.log(Math.PI) //won't change
const chai={
    name:'ginger tea',
    price:300,
    isAvailable:true,
    orderTea:function(){
        console.log("no chai bro");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: false, //enumerable means repetetion
    
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for(let[key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`)
    }
}

