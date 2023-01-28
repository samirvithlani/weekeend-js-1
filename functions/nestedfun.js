function test(a){

    console.log("outer function",a);
    function inner(){

        var x=100
        console.log("inner function",a);
    }
    console.log("outer function",x);
    inner();
}


function test2(){
    
    console.log("outer function");

    //innner1();
    return function innner1(){
            
            console.log("inner function");
    }
}

function sum(a,b){

    console.log("outer function",a,b);
    return function addition(x){

        console.log("inner function",x);
        
    }
    

}

// //inner(); // error
// // test(12)
// var x1 = test2();
// x1();
// var val = sum()
// //console.log(val);
// val()


sum(10,20)(150)





