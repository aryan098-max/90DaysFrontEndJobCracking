function x(){

    for(var i=1; i<=5; i++){
        
        // function definition
        // It will not execute it will only create closure with each value of i
        function close(x){
            setTimeout(()=>{
                console.log(x)
            }, x*1000);
        }
        
        // function call
        // each i is a separate copy being passed down to close
        close(i);
    }
}

x();