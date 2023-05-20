
var users =[
    {
        name: "John",
        email: "jhon@gmail.com"
    },{
        name: "Peter",
        email: "peter@gmail.com"
    },{
        name: "Mark",
        email: "mark@gmail.com"
    }
]
const data = document.getElementById("data")

users.forEach((user)=>{
    const newTag = document.createElement("h1")
    const newTag2 = document.createElement("h2")
    newTag.innerHTML = user.name,
    newTag2.innerHTML = user.email
    data.appendChild(newTag)
    data.appendChild(newTag2)
})