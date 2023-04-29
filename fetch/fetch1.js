function getUserData(){


    fetch("https://reqres.in/api/users?page=2").then((res)=>{
        res.json().then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
    }).catch((err)=>{
        console.log(err);
    })

}

const getData = async()=>{

    var res = await  fetch("https://reqres.in/api/users?page=2",{
        method:"GET",
    })
    var data = await res.json();
    console.log(data.data);
    Stringarray = data.data.map((ele)=>{
        return ele.first_name;
    })
    console.log(Stringarray);
    document.getElementById("data").innerHTML = Stringarray;
}
//getUserData();
//getData();

const postData = async(data)=>{
    
    alert("post data");
    // var data = {
    //     "name": "sachin",
    //     "job": "cricketer"
    // }
    var res = await fetch("https://reqres.in/api/users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)

    })
    var res1 = await res.json();
    return res1;
}
//postData();
// const submitData = async(e)=>{
    
//     e.preventDefault();
    
//     var name = document.getElementById("name").value;
//     var job = document.getElementById("job").value;
//     var data = {
//         "name": name,
//         "job": job
//     }
//     var finalres = await postData(data);
//     console.log(finalres);
// }
const submitData1 = async(e)=>{

    
    e.preventDefault();
    var name = document.getElementById("name").value;
    var job = document.getElementById("job").value;
    var data = {
        "name": name,
        "job": job
    }

    var finalres = await postData(data);
    console.log(finalres);
}

const getWeather =async()=>{


    const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=Ahmedabad&format=json&u=f'

    const res = await fetch(url,{
        method:"GET",
        headers: {
            
            'X-RapidAPI-Key': 'add your key here',
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
          },
          

    })
    const data = await res.json();
    console.log(data);

}
getWeather();