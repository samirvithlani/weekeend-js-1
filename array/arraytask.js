var employees =[
    {
        id:101,
        name:"raj",
        isMarrie:true,
        child:0,
        salary:145000,
        gender:"Male"
    },
    {
        id:102,
        name:"rajvi",
        isMarrie:false,
        child:0,
        salary:10000,
        gender:"FeMale"
    },
    {
        id:103,
        name:"raj",
        isMarrie:true,
        child:0,
        salary:250000,
        gender:"Male"
    }
]

var emp1 = employees.filter((emp)=>{
    return emp.isMarrie == true && emp.child>0 && emp.salary>2000000;
})
var emp2 = employees.filter((emp)=>{

    return emp.gender ==="FeMale" &&emp.isMarrie ==false
})
var emp3 = employees.filter((emp)=>{
    return emp.isMarrie == true && emp.child<=0 && emp.gender=="Male";
})
console.log(emp3);
console.log(emp2);
console.log(emp1);