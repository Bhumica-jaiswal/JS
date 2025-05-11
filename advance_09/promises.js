const promiseOne= new promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task done.");
        resolve();
            },1000)
})
promiseOne.then(function(){
    console.log("promise consumed");
})

new promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2 done");
        resolve();
            },1000)
}).then(function(){
    console.log("async 2 resolved");
})

const promiseThree = new promise(function(resolve,reject){
    setInterval(function(){
        let error=true;
        if(!error){
            resolve({username:'bhumica' , password:'456'})
        }
        else{reject('ERROR:Something went wrong.')}
    },1000)
})

promiseFour
.then((user)=>{console.log(user);
    return user.username;
}).then((username)=>{console.log(username);
}).catch(function(error){
    console.log(error);
    }).finally(()=> console.log("the promise is either resolved or rejected"))
    
