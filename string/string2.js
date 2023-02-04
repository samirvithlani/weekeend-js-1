//mutablity and immutablity
//mutablity - we can change the value with same reference
//immutablity - we can not change the value with same reference

var ename = "ajay"
// for(let i = 0;i<ename.length;i++){

//     ///ename[0] = 97 - 32 = 65
//     //ename[i] = ename[i]-32;
//     //ename.charCodeAt(i) = ename[i].charCodeAt(i)-32;
//     console.log(ename[i]);

// }
//console.log(ename);
//var x = ename.toUpperCase();
ename = ename.toUpperCase();
console.log(ename);
var sname = "PAVAN";
sname = sname.toLowerCase();
console.log(sname);

var data = "hi this is royal."
var flag = data.endsWith(" ")
console.log(flag);

var data1 = "bombi ng is not good"
var flag1 = data1.startsWith("bob")
console.log(flag1);
