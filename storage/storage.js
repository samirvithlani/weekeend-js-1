function storeData (){

    var name ="samir"
    localStorage.setItem("name",name)
    localStorage.setItem("id",101)

    var user = {
        name:"ram",
        id:102
    }

    struser = JSON.stringify(user)
    localStorage.setItem("user",struser)
    alert("data stored")

}

function retrieveData(){


    var name = localStorage.getItem("name")
    var id = localStorage.getItem("id")
    var user = localStorage.getItem("user")
    var objUser = JSON.parse(user)
    console.log(name)
    console.log(id)
    console.log(user)
    console.log(objUser)
    console.log(objUser.name)

}

function removeData(){
    localStorage.removeItem("id")
    alert("id removed")
}

function clearData(){
    localStorage.clear()
    alert("all data removed")
}