const express = require("express")
const {Pool} = require('pg')
require('dotenv').config()

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL
})

const app = express()

app.use(express.json())

app.get('/alunos', async (req, res) => {
    try {
        const {rows} = await pool.query("SELECT * FROM alunos");
        return res.status(200).send(rows);
    } catch (error) {
        console.error('Erro ao buscar alunos:', error);
        return res.status(500).send('Erro interno do servidor');
    }
});


app.listen(3000, ()=> console.log("server rodando"))