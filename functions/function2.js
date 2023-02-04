function test(){

    console.log("test");
}
function test2(){

    console.log("test2");
}
function driver(no1,cb){

    //if a is number
    //a++;
    console.log(no1);
    cb();

}
var age =20
if(age>=18){
    driver(150,test2);
}
else{
    driver(450,test);
}

