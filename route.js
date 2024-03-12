const express = require('express')
const validarSenha = require('./function.js')

const app = express()

app.use(express.json())
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/validar-senha', (req, res) => {
    const senha = req.body.senha;
    const resultado = validarSenha(senha)
    
    if ((!resultado.valido)) {
        const resposta = {
            senha: senha,
            erro: resultado.erro
        }
        res.status(400).send(resposta);
        return;
    }

    res.send(`A senha "${senha}" é válida!`);
});


app.listen(PORT, () => {
    console.log('Servidor rodando na porta 3000');
});
