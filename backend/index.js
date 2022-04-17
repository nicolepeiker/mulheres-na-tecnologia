const express = require('express')
const app = express()

const recuperaDestaque = (req, res) => {
    const destaque = {
        titulo: "Mulheres na tecnologia",
        data: Date()
    }
    res.send(destaque)
}

app.get('/destaque', recuperaDestaque)

const port = 3000
app.listen(port, () => {
    console.log(`API FUNCIONANDO ${port}`)
})