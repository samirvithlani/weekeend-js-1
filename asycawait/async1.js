function sendData(){


    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            reslove("Success");
        },3000)
    })

}

async function getData (){

    
    var x = await sendData()
    console.log("....get data",x);
    printData(x);
    

}
function printData(x){

    console.log("....print data",x);

}
getData();


