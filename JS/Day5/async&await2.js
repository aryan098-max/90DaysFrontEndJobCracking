function userInfo(userId){

    return new Promise((resolve, reject)=>{
        resolve(userId);
    })
}

function createOrder(cart){
    return new Promise((resolve, reject)=>{
        resolve(cart);
    })
}

function proceedToPayment(message){
    
    return new Promise((resolve,reject)=>{
        resolve(message);
    })
}

function showSummary(...args){
    
    return new Promise((resolve, reject)=>{
        resolve(args);
    })
}

async function checkoutProcess() {
try {
    const userId = 1;
    const cart = ["pant", "tshirt"];

    // 1. Get User Info
    const user = await userInfo(userId);
    console.log(user);

    // 2. Create Order
    const order = await createOrder(cart);
    console.log(order);

    // 3. Proceed to Payment
    const paymentStatus = await proceedToPayment("A payment has been completed!");
    console.log(paymentStatus);

    // 4. Show Summary
    const summary = await showSummary(userId, cart);
    console.log(...summary);

    console.log("All the process has been completed");
    
} catch (error) {
    // If ANY of the promises above reject, code jumps here immediately
    console.error("Process failed:", error);
}
}

checkoutProcess();
