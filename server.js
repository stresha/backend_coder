const API =require('./api');
const express = require('express');
const app = express();
const {Router} = express;
const router = Router();



//puerto 
const PORT=8080;
app.listen(PORT, () => {console.log(`Servidor corriendo en el puerto http://localhost:8080/${PORT}`)});




//app
app.use(express.static(__dirname + 'public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/api/productos', router)
app.on("error", () => {console.log("error del servidor")})



let api= new API();



// retorna todo
router.get('/', (req, res) => {
      res.json(api.getAll());
   });
// retorna por id 
router.get('/:id', (req, res) => {
      res.json(api.getById(parseInt(req.params.id)));
   });
   // se ve y agrega
router.post('/', (req, res) => {
      const producto ={
         title: req.body.title, 
         price: req.body.price, 
         thumbnail: req.body.thumbnail};
      producto.id = api.getId();
      api.add(producto);
      res.json(api.getAll());
   });
   // se ve y actualiza
router.put('/:id', (req, res) => {
   const producto ={
      title: req.body.title, 
      price: req.body.price, 
      thumbnail: req.body.thumbnail};
      api.update(parseInt(req.params.id), producto);
      res.json(producto);
   });
   
   
   //borra 

   
router.delete('/:id', (req, res) => {
      api.delete(parseInt(req.params.id));
      res.json(api.getAll());
   }  );

