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

const getData = async()=>{

    var users1=[]
    const res = await fetch("https://reqres.in/api/users?page=2")
    const data = await res.json()
    users1 = data.data

    const body = document.getElementById("data")
    users1.forEach((user)=>{
    const tr = document.createElement("tr")
    
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    td1.innerHTML = user.first_name
    td2.innerHTML = user.email
    tr.appendChild(td1)
    tr.appendChild(td2)
    body.appendChild(tr)
})


}
getData()


