const crust ={
    "thin": 100,
    "thick": 200,
    "stuffed": 300,
}
const size ={
    "small": 100,
    "medium": 200,
    "large": 300,
}
const sauce ={
    "tomato": 0,
    "bbq": 100,
    "spicy": 200,
}

var orderData ={}
const order = (event)=>{
    event.preventDefault();
    var size = document.getElementById("size").value;
    console.log(size);
    var crust = document.getElementById("crust").value;
    console.log(crust);
    var suauce = document.getElementById("sauses").value;
    console.log(suauce);
    var qty = document.getElementById("qty").value;
    console.log(qty);
    var km = document.getElementById("km").value;
    console.log(km);

     orderData = {
        size: size,
        crust: crust,
        sauce: suauce,
        qty: qty,
        km:km
    }
    bill(orderData);

}
var total = 0;
const bill =(orderData)=>{

    console.log(orderData);
    
    if(orderData.size =="small"){

        total = total + size.small;
    }
    else if(orderData.size =="medium"){
        total = total + size.medium;
    }
    else if(orderData.size =="large"){
        total = total + size.large;
    }
    if(orderData.crust =="thin"){
        total = total + crust.thin;
    }
    else if(orderData.crust =="thick"){
        total = total + crust.thick;
    }
    else if(orderData.crust =="stuffed"){
        total = total + crust.stuffed;
    }
    if(orderData.sauce =="tomato"){
        total = total + sauce.tomato;
    }
    else if(orderData.sauce =="bbq"){
        total = total + sauce.bbq;
    }
    else if(orderData.sauce =="spicy"){
        total = total + sauce.spicy;
    }
    if(orderData.km<5){
        total = total + 0;
    }
    else if(orderData.km>5 && orderData.km<10){
        total = total + 100;
    }
    else if(orderData.km>10 && orderData.km<15){
        total = total + 200;
    }
    //for quantity
    total = total * orderData.qty;
    console.log(total);
    console.log(orderData)

    var orderdString = JSON.stringify(orderData);
    console.log(orderdString);
    document.getElementById("bill").innerHTML = orderdString;
}


const placeOrder =()=>{

    var flag = confirm("Are you sure you want to place this order?");
    if(flag==true){
        alert("Your order has been placed successfully"+total);


            document.getElementById("psize").innerHTML = orderData.size;
            document.getElementById("pcrust").innerHTML = orderData.crust;
            document.getElementById("psause").innerHTML = orderData.sauce;
            document.getElementById("pqty").innerHTML = orderData.qty;
            document.getElementById("pkm").innerHTML = orderData.km;
            document.getElementById("ptotal").innerHTML = total;
        



    }
    else{
        alert("Your order has been cancelled");
    }
}




