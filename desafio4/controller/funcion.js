const { response, request } = require('express');
const fs = require('fs');
const products = './products/productos.txt';
const api =require('./api');

//muestro todo render al hb de productosAll 
const productosAll = async(req = request, res = response) => {
    res.render('productoForm');
}

//muestro todo render al hb de productosAll actualizado
const productosPost = async(req = request, res = response) => {
    const { title, price, thumbnail } = req.body;
    const data = JSON.parse(fs.readFileSync(products,'utf-8'));
    const dataNew = {
        id : parseInt(data[data.length - 1].id) + 1,
        title,
        price : parseFloat(price),
        thumbnail
    }
    data.push(dataNew);
    fs.writeFileSync(db, JSON.stringify(data) ,'utf-8');
    res.render('productoForm');
}

//muestro todo render al hb de la lists 
const productosGet = async(req = request, res = response) => {
    const productosList  = JSON.parse(fs.readFileSync(products, 'utf-8'));
    res.render('productoList', {
        productosList
    });
}
module.exports = {
    productosAll,
    productosPost,
    productosGet
}