const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

function showCamisetas(param) {
  
for (let i = 0; i < param.length; i++) {
    
    
    if (param[i].includes('Camiseta')) {
      
    console.log(param[i]);
    }
  }
}



