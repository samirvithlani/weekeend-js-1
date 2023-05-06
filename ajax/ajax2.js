function ajaxCall ()
{

    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://reqres.in/api/users?delay=3",true);
    xhr.send();
    if(xhr.LOADING == 3){
        document.getElementById("loading").innerHTML = "Loading...";
    }

    xhr.onprogress = function(){
        console.log("processing request");
        console.log(this.readyState);
    }
    xhr.onload = function(){
        console.log("request received");
        console.log(this.readyState);
        console.log(JSON.parse(this.response));
        console.log(JSON.parse(this.responseText));
        console.log(this.responseURL);
       // console.log(JSON.parse(this.responseType));
        console.log(this.responseXML);
    }
    xhr.onloadstart = function(){
        console.log("Server connection established");
        console.log(this.readyState);
    }
    xhr.onloadend = function(){
        console.log("request completed");
        console.log(this.readyState);
        document.getElementById("loading").innerHTML = "";
    }
    xhr.ontimeout = function(){
        console.log("request timed out");
        console.log(this.readyState);
    }
    xhr.onerror = function(){
        console.log("request failed");
        console.log(this.readyState);
    }
    console.log("loading......",xhr.LOADING);
    console.log("done......",xhr.DONE);
    console.log("processing......",xhr.HEADERS_RECEIVED);
    console.log("request received......",xhr.OPENED);
    console.log("request sent......",xhr.UNSENT);
    console.log(xhr.response)
    console.log(xhr.responseType)
    console.log(xhr.responseURL)
    console.log(xhr.responseText)


}
ajaxCall();