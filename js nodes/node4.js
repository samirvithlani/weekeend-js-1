// const elm = document.getElementById('div1');
// const h1 = document.createElement("h1")
// h1.innerHTML = "this is new tag from js"
// elm.appendChild(h1)

const elm = document.getElementById('div1');
const p1 = document.getElementById('p1')

const h1 = document.createElement("h1")
h1.innerHTML = "this is new tag from js"
h1.style.color = "red"
elm.insertBefore(h1,p1)

