import express from "express"

const app = express();


app.get("/", (req,res)=>{
    console.log("this is my clothing brand")
})


app.listen(8000);
