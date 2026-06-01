import express from "express"

const app = express();

app.get("/", (req,res)=>{
    res.send("This is is your backend")
});

app.get("/ai page",(req,res)=>{
    res.send("This is the main page")
})
app.listen(4000,()=>{
    console.log("server is running")
})