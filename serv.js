//express 

const express = require('express')

const app = express()



const fs = require("fs")

//todos 
const productosAll = (a, b ) => {
    fs.readFile('./productos.txt', 'utf-8', (error, data) => {
    if (error) throw error;
    const productos = JSON.parse(data);
    b.json({
        productos
    })
})
} 

//random
const random = (a , b ) => {
    fs.readFile('./productos.txt', 'utf-8', (error, data) => {
    if (error) throw error;
    const productos  = JSON.parse(data);
    const productosRandom = Math.floor(Math.random()*productos.length)
    b.json({
        product : productos[productosRandom]
        })
    })
}
//inicio 
const inicio = (a, b) => {
    fs.readFile('./home.txt', 'utf-8', (error, data)=>{
        if (error) throw error;
        const inicioPantalla = JSON.parse(data);
        b.json({
            inicioPantalla
        })
    })
}

//puerto
app.get('/', inicio )
app.get('/productos', productosAll )
app.get('/productosRandom', random )

const PORT = 8080

const server = app.listen(PORT, () => {
console.log(`servidor HTTP escuchando en el puerto http://localhost:${PORT}`)
})
 

server.on('error', (error)=> console.log(error));