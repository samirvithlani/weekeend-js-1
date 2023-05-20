var users =[
    {
        name: "John",
        email: "john@gmail.com"
    },
    {
        name: "Peter",
        email: "peter@gmail.com"
    },
]
const body = document.getElementById("data")
users.forEach((user)=>{
    const tr = document.createElement("tr")
    
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    td1.innerHTML = user.name
    td2.innerHTML = user.email
    tr.appendChild(td1)
    tr.appendChild(td2)
    body.appendChild(tr)
})
