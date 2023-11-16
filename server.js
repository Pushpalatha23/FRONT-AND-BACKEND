const express = require("express");
const mysql = require('mysql2')
const cors = require('cors')


const app = express()
app.use(cors())
const db = mysql.createConnection({
host:'localhost',
user:"root",
password:"Latha@123",
database:"test"
})

app.get('/',(req,res)=>{
    return res.json("Backend server");

})
app.get('/tests',(req,res)=>{
    const sql = "Select*from examination";
    db.query(sql,(err,data)=>{
        if(err)return res.json(err);
        return res.json(data);
    })
})
app.listen(8098,()=>{
    console.log("Listening")
})
