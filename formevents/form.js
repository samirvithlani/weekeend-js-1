const handleSubmit =(event)=>{
    event.preventDefault()
    let name = document.getElementById('txtName').value
    let email = document.getElementById('txtEmail').value
    let age = document.getElementById('txtAge').value

    document.getElementById('pName').innerHTML = name
    document.getElementById('pEmail').innerHTML = email
    document.getElementById('pAge').innerHTML = age

}

const checkName = () => {

    let name = document.getElementById('txtName').value
    if(name.length<=3){
        document.getElementById('pNameError').innerHTML = 'Name must be more than 3 characters'
    }

}
const valid = () => {


    let age = document.getElementById('txtAge').value
    if(age<18){
        document.getElementById('pAgeError').innerHTML = 'Age must be greater than 18'
    }
    else{
        document.getElementById('pAgeError').innerHTML = ''
    }


}