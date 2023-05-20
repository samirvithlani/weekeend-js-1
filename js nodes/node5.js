const root = document.getElementById("root")

const newButton = document.createElement("button")
newButton.innerHTML = "click me"
newButton.style.color = "red"
newButton.href = "https://www.google.com"
newButton.onclick = ()=>{
    alert("hello")
}
root.appendChild(newButton)