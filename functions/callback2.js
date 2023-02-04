const sum = (a,b)=>{
    return a+b;
}
const sub = (a,b)=>{
    return a-b;
}

const calc= (a,b,cb)=>{

        var x = cb(a,b);
        console.log(x);

}
calc(12,22,sub)