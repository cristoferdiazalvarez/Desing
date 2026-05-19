const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

function makeMenuVegan(menu, fruitList) {

    let fruitIndex = 0;
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].isVegan === false) {
            menu[i].name = fruitList[fruitIndex];
           menu[i].isVegan = true;
            fruitIndex++;
    }
  }
  return menu;
}

console.log(makeMenuVegan(foodSchedule, fruits));