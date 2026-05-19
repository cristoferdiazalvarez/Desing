const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

function classifyProductsBySales(productsArray, goodArray, badArray) {
for (const product of productsArray) {
  if (product.sellCount >= 20) {
      goodArray.push(product);
    } else {
       badArray.push(product);
    }
  }
}

console.log("Productos Buenos (>= 20 ventas):", goodProducts);
console.log("Productos Malos (< 20 ventas):", badProducts);