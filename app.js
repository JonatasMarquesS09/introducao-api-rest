import express from 'express'
import usuariosRoutes from './routes/usuarios.js'
import fornecedoresRoutes from './routes/fornecedores.js'
import produtosRoutes from './routes/produtos.js'

const app = express()

app.use(express.json())
app.use("/usuarios", usuariosRoutes)
app.use("/fornecedores", fornecedoresRoutes)
app.use("/produtos", produtosRoutes)

const port = 3000

app.get('/', (req, res) => {
  res.send("Bem vindo a minha API")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
