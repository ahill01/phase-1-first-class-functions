function receivesAFunction(callback){
callback();
}

function returnsANamedFunction(){
    function namedFunction(){
        return 1+1;
    }    
    return namedFunction;
}

function returnsAnAnonymousFunction(){
   return function(color){
        console.log(color)
    };
}