function  openT(){
    window.open("http://www.baidu.com");
}

function closeT(){
    setInterval(() => {
        window.close();    
    }, 1000);
    
}
function moveBack(){
    window.history.back();
}
function moveForward(){
    window.history.forward();
}

function getCurrentGeoLocation(){

    navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    },(error)=>{
        console.log(error);
    });
}