db.productos.insertMany([
  {
    nombre: "IPhone 12",
    foto: "img/apple-iphone-12.jpg",
    detalles:
      "Sumérgete en la innovación con el iPhone 11: rendimiento potente y cámara avanzada, tecnología excepcional y diseño sofisticado.",
    precio: 240.3,
    stock: "4",
    marca: "Apple",
    categoria: "celulares",
    envio: true,
  },
  {
    nombre: "Auriculares Sony",
    foto: "img/auriculares-sony.jpg",
    detalles:
      " Sumérgete en un sonido envolvente y cristalino con los auriculares Sony: tecnología innovadora para una experiencia auditiva inigualable",
    precio: 985,
    stock: 4,
    marca: "Sleek Cotton Chips",
    categoria: "Refined",
    envio: true,
  },
  {
    nombre: "Camara Canon",
    detalles:
      "Captura momentos con precisión y calidad excepcional usando la cámara Canon: tecnología avanzada para fotografías inigualables.!",
    foto: "img/camara-canon.jpg",
    precio: 678,
    stock: 7,
    marca: "Rustic Soft Tuna",
    categoria: "Generic",
    envio: true,
  },
  {
    nombre: "Samsung",
    detalles:
      "Diseño innovador, pantalla brillante, cámara potente y rendimiento excepcional",
    foto: "img/celular-samsung.jpg",
    precio: 1200,
    stock: 4,
    marca: "Samsung",
    categoria: "celulares",
    envio: true,
  },
  {
    nombre: "Chromecast",
    precio: 332.22,
    stock: 4,
    marca: "Google",
    categoria: "Electronica",
    detalles:
      "Transmite contenido instantáneamente a tu TV con Chromecast: entretenimiento en alta calidad y facilidad.",
    foto: "img/chromecast-google.jpg",
    envio: true,
  },
  {
    nombre: "DJI Mavic 2 pro",
    precio: 333.22,
    stock: 2,
    marca: "DJI",
    categoria: "Drones",
    detalles:
      " Explora horizontes con el dron Mavic 2 pro: vuelo suave y captura aérea de alta calidad.",
    foto: "img/dji-mavic-2-pro.jpg",
    envio: false,
  },
  {
    nombre: "Producto x",
    precio: "45454",
    stock: "9",
    marca: "Sorny",
    categoria: "celular",
    detalles: "Nuevo celular",
    foto: "img/apple-iphone-11-pro-max.jpg",
    envio: true,
  },
  {
    nombre: "as",
    precio: "3333",
    stock: "6",
    marca: "samsung",
    categoria: "electronica",
    detalles: "nuevo cel",
    foto: "img/apple-iphone-11-pro-max.jpg",
    envio: true,
  },
]);

// Ruta back: https://ramiro-rivero-etapa-3.onrender.com/api/productos