const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

function totalSales(param) {
    let totalSum = 0;
    for (const product of param) {
        totalSum += product.sellCount;
  }
  return totalSum;
}

console.log("El total de ventas es:", totalSales(products));