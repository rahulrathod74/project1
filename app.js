function getData(){
    fetch("https://brassy-humble-quilt.glitch.me").then((res)=> res.json())
    .then((data)=>{
        console.log("data", data)
    }).catch((err)=>{
        console.log("err", err)
    })
}

getData()

baseUrl = "localhost:8080"