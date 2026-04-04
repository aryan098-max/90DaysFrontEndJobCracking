function userInfo(userId){
    
    // promise obj
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(userId);

        }, 1000)
    })
}

function createOrder(){

    return new Promise((resolve, reject)=>{
        resolve(cart);
    })

}

function proceedToPayment(message){

    return new Promise((resolve, reject)=>{
        resolve(message);
    })
}

function showSummary(...args){ // [userId, cart]

    return new Promise((resolve, reject)=>{
        resolve(args)
    })
}


const userId = 1;
const cart = ["pant", "tshirt"];
userInfo(userId)
.then((res)=>{
    console.log(res);
    return createOrder(cart);
})
.then((res)=>{
    console.log(res);
    return proceedToPayment("A payment has been completed!");
})
.then((res)=>{
    console.log(res);
    return showSummary(userId, cart);
})
.then((res)=>{
    console.log(...res);
    console.log("All the process has been completed");
})