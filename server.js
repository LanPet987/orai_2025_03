const express = require("express")
const app = express()
const cors = require("cors")
const mysql = require("mysql")



app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user:"root",
    host:"127.0.0.1",
    port:3306,
    password:"",
    database:"felveteli"
})

app.get("/",(req,res)=>{
    res.send("Működik a szerver")
})

app.get("/v",(req,res)=>{
    const sql = "SELECT * FROM diakok"
    db.query(sql, (err,result)=>{
        if (err) return res.json(err)
        return res.json(result)
    })
})

app.listen(3000,()=>{
    console.log("A szerver a 3000 porton fut")
})