const elm = document.getElementById('div1');
const para = document.getElementById('p1')

const node = document.createTextNode("this is new node from js")
para.appendChild(node)
elm.appendChild(para)

const newTag = document.createElement("h1")
newTag.innerHTML = "this is new tag from js"
elm.appendChild(newTag)


// const element2  = document.getElementById("div2")
// const newTag2 = document.createElement("h2")
// newTag2.innerHTML = "this is new tag from js"
// newTag2.style.color = "red"
// element2.appendChild(newTag2)

const element2  = document.getElementById("div2")
const newTag2 = document.createElement("h2")
newTag2.innerHTML = "this is new tag from js"
newTag2.style.color = "red"
const end = document.getElementById("end")
element2.insertBefore(newTag2,end)










