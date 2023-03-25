//asyncronousprogramming
///syncronousprogramming

//response...
//var x = "response" ///delay bt 10 sec

//var y =x;
//undefined

//promise stages
//pending
//fulfilled
//rejected


function advance(){

    return new Promise((res,rej)=>{
        setTimeout(()=>{
            //res("data provide...")
            rej("error occured...")
        },3000)
    })
}
// console.log(advance());
advance().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})





// function test(){

//     var promise = new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//            // resolve("data provide...")
//            reject("error occured...")
//         },3000)
//     })
//     //pending
//     console.log(promise);
//     //if promise is fulfilled it will return data in then
//     //if promise is rejected it will return error in catch
//     promise.then((data)=>{
//         console.log(data);
//     })
//     promise.catch((err)=>{
//         console.log(err);
//     })


// }

// test();
