//defi: function is block of statements
// reusability --> bolier plate code.....
/// -----------------------------

//function type -> predefined functions user defined functions
//4 type
//with return type with arg
//with return type without arg
//without return type with arg
//without return type without arg  void,int

//without return type without arg
function sum(){
    console.log("sum function")
}
function add(a,b){

    let c = a + b;
    return c;
    //return a + b
}
sum()

var x = add(12,12)
console.log(x)

var add1 =()=>
{
        console.log("add1 function")
}
//var div = (a,b)=>a/b
var div = (a,b)=>{
    return a/b
}
var mul = (p)=>p*p
add1()

var ans = mul(15)
console.log(ans)
console.log(mul(12))





var y = div(12,2)
console.log(y)

