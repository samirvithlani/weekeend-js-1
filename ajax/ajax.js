function getDataByAjax(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://reqres.in/api/users?delay=3",true);
    xhr.send();
    xhr.onreadystatechange = function(){
        console.log(this.readyState);
        if(this.readyState== 1){
            console.log("Server connection established");
        }
        if(this.readyState== 2){
            console.log("request received");
        }
        if(this.readyState== 3){
            console.log("processing request");
        }
        
        if(this.readyState== 4 && this.status==200){
            var data = JSON.parse(this.response);
            console.log(data);
        }
    }
    // xhr.onload= function(){
    //     var data = JSON.parse(this.response);
    //     console.log(data);
    // }

}
getDataByAjax();