const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  const items = [
    {
      titulo: 'D',
      mensagem: 'esenvolver aplicações/serviços de forma facil.'
    },
    {
      titulo: 'E',
      mensagem: 'JS usa JavaScript para renderizar HTML.'
    },
    {
      titulo: 'M',
      mensagem: 'uito facil de se usar.'
    },
    {
      titulo: 'A',
      mensagem: 'morzinho de linguagem.'
    },
    {
      titulo: 'I',
      mensagem: 'nstall EJS.'
    },
    {
      titulo: 'S',
      mensagem: 'intaxe Simples.'
    }
  ]
  
    const subtitulo = 'O EJS é uma linguagem de modelagem para criação de paginas HTML'

  res.render('pages/index', { 
    frases: items,
    subtitulo: subtitulo,
  })

})

app.get('/sobre', function (req, res) {
  res.render('pages/about')
})

app.listen(8080)
console.log('rodando')
