function storeCookie(){

    var name = "samir"
    var id =101
    document.cookie = "name="+name
    document.cookie = "id="+id
    alert("cookie stored")

}


function retrieveCookie(){

    console.log(document.cookie)
    var cookieData = document.cookie.split(";")
    console.log(cookieData)
    console.log(cookieData[0])
    var name = cookieData[0].split("=")[1]
    var id = cookieData[1].split("=")[1]
    console.log(name)
    console.log(id)

}