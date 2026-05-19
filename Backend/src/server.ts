import express from "express"

const app = express();

app.get("/", (req,res)=>{
    res.send("This is is your backend")
});

app.listen(4000,()=>{
    console.log("server is running")
})