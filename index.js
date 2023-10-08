import express, { response } from "express";
const app = express()

app.get("/", (request, response)=> {
    console.log(request)
    return response.status(200).send("welcome to Spadikam")
})

app.listen(3000, ()=> {
    console.log("App started")
});