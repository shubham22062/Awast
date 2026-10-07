import express, { response } from "express"


const app = express();

app.get("/", (req,res)=>{
    console.log("welcome")
    
}) 

app.listen(8000, ()=>{
    console.log("this is server is running on the port 8000")
})