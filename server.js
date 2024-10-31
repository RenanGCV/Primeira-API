const express = require('express')
let app = express();
const { engine } = require ('express-handlebars');

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.engine('handlebars', engine({}))
app.set('view engine', 'handlebars')

const usuarios = [
    
]

//Requisita os usuarios do banco de dados
app.get('/', (req, res) => {
    res.json(usuarios)
})

//Pega os usuarios e escreve eles no console  
app.get('/usuarios', (req, res) => {
    res.render('usuarios')
    console.log(req.body)
})

//Le o input de dados de usuarios e retorna o texto de sucesso
app.post('/usuarios', (req, res) => {
    res.send("Nome: " + req.body.nome + "\nEmail: " + req.body.email)
    usuarios.push(req.body)
    
})

app.delete('/usuarios', (req, res) => {
    usuarios.pop(req.body)
    res.json({status: 'Usuario deletado com sucesso!'})
})

//Diz qual a porta o servidor vai rodar
app.listen(8080, () => {
    console.log('Rodando no endereço http://localhost:8080')
})