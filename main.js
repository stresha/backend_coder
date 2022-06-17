
const Contenedor = require('./contenedor');

const dato1 =    {
    "title": "Velador Gato",
    "price": 2000,
    "id": 1,
    "thumbnail": "https://i.postimg.cc/1XjWByBJ/lampara-cat4.jpg"

  }
 const dato2 =    {
    "title": "Velador Gato Amarillo",
    "price": 2500,
    "id": 2,
    "thumbnail": "https://i.postimg.cc/gkhrmNhT/lampara-cat.jpg"
}
  
  const dato3 =   {
    "title": "Lampara Sal",
    "price": 1500,
    "id": 3,
    "thumbnail": "https://i.postimg.cc/W4N4mVHB/lamapra-sal2.jpg"
  }

  const dato4 = {
    "title": "Lampara Reno",
    "price": 1000,
    "id": 4,
    "thumbnail": "https://i.postimg.cc/15RPYBHF/map.jpg"
  }
  const dato5 = {
    "title": "Lampara cat 3d",
    "price": 1000,
    "id": 5,
    "thumbnail": "https://i.postimg.cc/Dy5f2HZ5/lampara-cat7.jpg"
  } 


  async function main (){

    const contenedor = new Contenedor('./productos.txt');
    console.log('productos: ')
    

    //muestro
    let objs = await contenedor.getAll();
    console.table(objs)
    console.log('------');
    console.log('Se guarda producto');
    

    //guardo cada productos(son 5)
    console.log("GUARDO PRODUCTO 1")
    let idp1 = await contenedor.save(dato1)
    console.log(`id ${idp1}`)
    console.log('------');

    console.log("GUARDO PRODUCTO 2")
    let idp2 = await contenedor.save(dato2)
    console.log(`id ${idp2}`)
    console.log('------');
  
    console.log("GUARDO PRODUCTO 3")
    let idp3 = await contenedor.save(dato3);
    console.log(`id ${idp3}`)
    console.log('------');

    console.log("GUARDO PRODUCTO 4")
    let idp4 = await contenedor.save(dato4);
    console.log(`id ${idp4}`)
    console.log('------');

    console.log("GUARDO PRODUCTO 5")
    let idp5 = await contenedor.save(dato5);
    console.log(`id ${idp5}`)
    console.log('------');
  

    //muestro
    console.log("Mostrando Productos")
     objs =  await contenedor.getAll();
     console.table(objs)
     console.log('------');
  
    //busco por id
    console.log("BUSCANDO POR ID")
    const res = await contenedor.getById(idp1);   
    console.table(res);
    console.log('------');




    //borro por id
    console.log("ELIMINANDO POR ID")
      objs =  await contenedor.deleteById(2);
      console.log('------');



    //borro todo 
    console.log("ELIMINANDO TODO")
    objs =  await contenedor.deleteAll();
    console.log('------');



  }

  main ()