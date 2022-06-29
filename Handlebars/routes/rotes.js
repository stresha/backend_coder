const { Router } = require('express');

const router = Router();

const { productosAll, productosPost } = require('../controller/funcion');

//todos los prod 
router.get( '/', productosAll ); 

//Guarda un item
router.post( '/', productosPost ); 

const { productosGet } = require('../controller/funcion');

// base
router.get( '/', productosGet );

module.exports = router;