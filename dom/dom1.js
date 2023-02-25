
function change1(){
    document.getElementById("text").innerHTML = "Hello World!";    
    document.getElementById("text").style.color = "red";    
}

function change2(){

    document.getElementById("yt").href ="https://www.google.com";
    document.getElementById("yt").innerHTML = "Google";
    
}

function change3(){

    document.getElementsByName('print')[0].style.backgroundColor = "red";
    document.getElementsByName('print')[1].style.backgroundColor = "red";

    document.getElementsByTagName('p')[0].style.color = "yellow";
    document.getElementsByTagName('p')[1].style.color = "yellow";
    document.getElementsByTagName('p')[2].style.color = "yellow";

    document.getElementsByClassName('header')[0].style.backgroundColor = "blue";

}

//document.getElementById("text").inner = "Hello World!";