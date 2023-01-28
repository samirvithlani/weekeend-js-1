//3 if else ,,switch case ,loop
//if ,,, else
///choice -->case -->

var no1 = 100
var no2 = 100

if(no1>no2){
    console.log("no1 is greater")
}
else if(no1==no2){
    console.log("both are equal")
}
else{
    console.log("no2 is greater")
}

var salary = 12000

if(salary>10000){
    console.log("you are eligible for veh loan")
    if(salary>=50000){
        console.log("you are eligible for home loan")
    }
    else{
        console.log("you are not eligible for home loan")
    }
}

else{
    console.log("you are not eligible for any loan")
    if(salary>=5000){
        console.log("you are eligible for personal loan...")
    }
    else{
        console.log("you are not eligible for anything!!!")
    }
}


