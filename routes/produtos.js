import express from 'express'

const router = express.Router()
const produtos = [
    {id: 1, nome: "Geladeira Electrolux", preco: "5.699,05"},
    {id: 2, nome: "Copo Stanley", preco: "289,00"},
    {id: 3, nome: "Chinela Havaina", preco: "84,99"},
    {id: 4, nome: "Misto com Catupiry", preco: "3,00"}
]

router.get("/mostraProdutos", (req, res) => {
    res.status(200).json(produtos)
})

router.post("/adicionarProduto", (req, res) => {
    const { nome, preco } = req.body
    const id = produtos.length + 1

    produtos.push({
        id: id,
        nome: nome,
        preco: preco
    })

    res.status(201).json(produtos)
})

router.put("/atualizarProdutos/:id", (req, res) => {
    const { id } = req.params
    const { novoNome, novoPreco } = req.body
    const indice = produtos.findIndex((produtos) => {
        return produtos.id == id
})
    
if(indice === -1) {
    return res.status(404).json(
        {mensagem: "Usuário não encontrado!"})
}

produtos[indice].nome = novoNome
produtos[indice].preco = novoPreco
  
res.send(produtos)
})

router.delete("/removerProduto/:id", (req, res) => {
    const { id } = req.params
    const indice = produtos.findIndex((produtos) => {
        return produtos.id == id
})

if(indice === -1) {
    return res.status(404).json(
        {mensagem: "Usuário não encontrado!"})
}

produtos.splice(indice, 1)

res.send(produtos)
})

router.get("/buscarProduto/:id", (req, res) => {
    const { id } = req.params
    const indice = produtos.findIndex((produtos) => {
        return produtos.id == id
    })

    if(indice === -1) {
        return res.status(404).json(
            {mensagem: "Usuário não encontrado!"}
        )
    }

    res.status(200).json(produtos[indice])
})


export default router