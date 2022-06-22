class api {

    productos = [];
    
 //  agregar
    add(producto) {
         this.productos.push(producto);
      }
 
 // 
 
     getId() {
         return this.productos.length > 0 ? this.productos[this.productos.length - 1].id + 1 : 1;
     }
 
 // se ve producto 
     getById(id) {
         const producto = this.productos.find(producto => producto.id === id);
         if (!producto) {
             throw new Error('Producto no encontrado');
         }
         return producto;
     }
 
 // retorna todo 

     getAll() {
         return this.productos;
     }
 // actualiza 

     update(id, producto) {
         const index = this.productos.findIndex(producto => producto.id === id);
 
         if(!index){
             throw new Error('Producto no encontrado');
         }
             this.productos[index] = producto
             this.productos[index].id = id;
     }
 
 // borra
     delete(id) {
         if(!this.getById(id)){
             throw new Error('Producto no encontrado');
         }
         this.productos.splice(this.productos.findIndex(producto => producto.id === id),1);
     }
 
 }
 module.exports = api;