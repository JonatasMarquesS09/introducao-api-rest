import express from 'express'

const router = express.Router();

// Banco de Dados fake (em memoria)
const usuarios = [
    {id: 1, nome: "João", email: "joao@email.com"},
    {id: 2, nome: "Ana", email: "ana@email.com"}
  ]
  

router.get('/usuario', (req, res) => {
    res.status(200).json(usuarios)
  })

router.post("/criarUsuario", (req, res) => {
  const { nome, email } = req.body;
  const id = usuarios.length + 1

  usuarios.push({
    id: id, 
    nome: nome, 
    email: email
  })
  
  res.status(201).send(usuarios)
})

router.put("/usuario/:id", (req, res) => {
    const { id } = req.params
    const {novoNome, novoEmail} = req.body

    const indice = usuarios.findIndex((usuario) => {
      return usuario.id == id
    })

    if(indice === -1) {
      return res.status(404).json(
        {mensagem: "Usuário não encontrado!"})
    }

    usuarios[indice].nome = novoNome
    usuarios[indice].email = novoEmail

    res.send(usuarios)
})

router.delete("/usuario/:id", (req, res) => {
  const { id } = req.params
  const indice = usuarios.findIndex((usuarios) => {
    return usuarios.id == id
  })
  
if(indice === -1) {
  return res.status(404).json(
    {mensagem: "Usuário não encontrado!"})
}

  usuarios.splice(indice, 1)

  res.send(usuarios)
})

export default router