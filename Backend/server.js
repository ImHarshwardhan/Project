const express = require("express");
const app = express();
const cors = require("cors")
const port = process.env.PORT || 8000;
const dbConnect = require("./utils/dbConnect")
const createSchema = require("./utils/createSchema")
dbConnect;
createSchema;

app.use(cors())

app.get("/message",(req, res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})