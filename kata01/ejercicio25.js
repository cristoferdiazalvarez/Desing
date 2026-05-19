const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

function salesAverage(param) {
    let totalSum = 0;
    for (const product of param) {
    totalSum += product.sellCount;
  }
  let average = totalSum / param.length;
  return average;
}

console.log("El promedio de ventas por producto es:", salesAverage(products));