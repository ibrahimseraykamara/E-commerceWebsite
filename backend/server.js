const express = require("express")

const app = express()

//const port = 2023

app.get("/", (req, res) => {
    res.send("hello")
})



app.listen(2023 ,() => {
    console.log("server is running at port 2023")
})
