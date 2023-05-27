async function readData (){

    const res = await fetch('./data.json')
    const data = await res.json()
    console.log(data)
}
readData()