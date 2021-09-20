const products = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/51H06jjz45L._AC_UX569_.jpg",
    category: "mujer",
    name: "Pantalon Mujer Levis",
    description: "Vaqueros ajustados Signature by Levi Strauss & Co.",
    price: 1200,
    stock: 5,
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/61ifPh2yf-L._AC_UY550_.jpg",
    category: "mujer",
    name: "ZESICA - Vestido para mujer",
    description: "Vestido para mujer, diseño floral bohemio, cuello en V, manga corta",
    price: 2500,
    stock: 5,
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/61Im0OyYa8L._AC_UX569_.jpg",
    category: "hombre",
    name: "Camiseta de manga corta para hombre",
    description: "Masters Tournament Augusta National Golf - Camiseta de manga corta para hombre",
    price: 1500,
    stock: 5,
  },
];


 export const getItems = new Promise((res, rej) => {
    let response = "200";
    if (response === "200") {
      setTimeout(() => {
        res(products);
      }, 5000);
    } else {
      rej("404");
    }
  });

  export const getItem = new Promise((res, rej) => {
    const test = products.find(prod => prod.id === 2)
    let response = "200";
    if (response === "200") {
      setTimeout(() => {
        res(test);
      }, 2000);
    } else {
      rej("404");
    }
  });
