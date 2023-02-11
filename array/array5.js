var users = ["tom","jerry","mike","jim"];


//filter
//predicate----> the function that returns true or false
var filta=[];
for(let i=0;i<users.length;i++){

    if(users[i].startsWith("j")){
        filta.push(users[i])
    }

}
console.log(filta)





var filteredAr = users.filter((u)=>{

    ///true
    return u.startsWith("j")
})

console.log(filteredAr)




var marks = [10,20,36,85,69,46,86]

var filterdmarks =[]
for(let i=0;i<marks.length;i++){

    if(marks[i] %2 ==0 && marks[i] > 40){
        filterdmarks.push(marks[i])
    }
}




console.log(filterdmarks)
 var filterdmarks1 = marks.filter((m)=>{
     return m %2 ==0 && m > 40
})

console.log(filterdmarks1)
// var filterdmarks1 = marks.filter((m)=>{
//     return m %2 ==0 && m > 40
// }).forEach((m)=>{
//     console.log(m)
// })

// var filterdmarks1 = marks.filter((m)=>{
//     return m %2 ==0 && m > 40
// })
// filterdmarks1.forEach((m)=>{
//     console.log(m)
// })




