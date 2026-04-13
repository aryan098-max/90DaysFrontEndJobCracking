/*
    1. try and catch block in js are used for error handling. It is especially useful for handling
       runtime error and async code with async & await.

       The advantage of using try and catch block is that it makes our code clean

    2. We also have another block known as finally, which runs no matter what

*/


try{

    const a = 20;
    a = 30;

} catch(err){

    console.log(err.message)

} finally{
    console.log("Runs no matter there is an error or not")
}