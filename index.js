const express = require("express")
const {Pool} = require('pg')
require('dotenv').config()

const app = express()

app.use(express.json())
app.get('/', (req, res)=> console.log("ola mundo"))

app.listen(3000, ()=> console.log("server rodando"))