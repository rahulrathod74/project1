const express=require("express");
const users=require("./MOCK_DATA.json")
const app=express();
app.get("/api/user",(req,res)=>{
    res.send(users)   
})
app.get('/user',(req,res)=>{
    const html=`
    <ul>
    ${users.map(user=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html)
})
app.get("/api/user/:id",(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    return res.json(user)
})

app.post("/api/user",(req,res)=>{
    //create new user
    return res.json({status:"pendding"})
})
app.patch("/api/user/:id",(req,res)=>{
    //todo edit the user id
    return res.json({status:"pendding"})
})
app.delete("/api/user/:id",(req,res)=>{
    //todo Delete the user with id
    return res.json({status:"pendding"})
})
app.listen(8080,()=>{
    console.log("server is start");
    
})