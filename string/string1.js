//index index always starts with 0
//Assic value
//unicode value
//A = 65,Z 65 + 25 = 90
//a = 97,z = 97 + 25 = 122
//sapce = 32
//A 65
//a 97
//97 - 65 = 32
var sname = "ravi raj";
// console.log(sname[0]);
// console.log(sname[1]);
// console.log(sname[2]);
// console.log(sname[3]);
//length is not a function


for(let i=0;i<sname.length;i++){
    console.log(sname[i]);
    console.log(sname.charCodeAt(i));
}

var len = sname.length
console.log(len);