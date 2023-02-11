var employees = ["parth","vishal","akshay","raj","prit","raj","Zara"]
var index = employees.indexOf("raj")
console.log(index)
var index1 = employees.lastIndexOf("raj")
console.log(index1)


function sortempbylen(a,b){

    return a.length - b.length;

}

//var soretdArray = employees.sort()
var soretdArray = employees.sort(sortempbylen)
console.log(soretdArray)

//m
function sortSal(a,b){

    return a - b;
}

var salaries = [100,25000,150,65,8502,963,45,1236]
var soretdArray1 = salaries.sort(sortSal)
console.log(soretdArray1)




