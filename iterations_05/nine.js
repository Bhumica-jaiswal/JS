const mynums= [1,2,3]

// const toto = mynums.reduce(function (acc , currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc+currval;
// },0)

const toto = mynums.reduce((acc,currval) => acc+currval,0)
console.log(toto);

const shopCart = [
    {
        itemname: "js course",
        price:2999
    },
    {
        itemname: "python course",
        price:1999
    },
    {
        itemname: "webdev course",
        price:5999
    },
    {
        itemname: "mobiledev course",
        price:6999
    }
]

const total = shopCart.reduce((acc,item)=> acc + item.price,0)
console.log(total)