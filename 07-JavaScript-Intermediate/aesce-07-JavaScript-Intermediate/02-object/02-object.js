/* eslint-disable node/no-unsupported-features/es-syntax */
/* eslint-disable no-restricted-syntax */
// Soal 1
const person = {
  name: 'Ashadi Putra',
  age: 100,
  favDrinks: [
    'coffee',
    'tap water',
    'tea',
  ],
  greeting: ($str) => `Hello, ${$str}`,
};

/// EDIT HERE
/// STOP

console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
console.log(person.greeting('John Watson'));

// Soal 2
function getObjectValue($obj, $path) {
  const path = $path.split('.');
  const value = $obj[path[0]][path[1]][path[2]];
  if (value !== undefined) return value;
  return null;
}

const milkBasedCoffee = {
  name: 'latte',
  ingredients: {
    espresso: {
      origin: 'lampung',
      roastProfile: 'medium to dark',
      ratio: 1,
    },
    milk: {
      brand: 'susu murni',
      isVegan: false,
      ratio: 5,
    },
  },
};

const espresso = getObjectValue(milkBasedCoffee, 'ingredients.espresso.origin');
const coffeeBrand = getObjectValue(milkBasedCoffee, 'ingredients.espresso.brand');
const isMilkVegan = getObjectValue(milkBasedCoffee, 'ingredients.milk.isVegan');

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan);

// Soal 3
// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
  {
    btc: { buy: 10, sell: 9 },
    eth: { buy: 8, sell: 7.5 },
    doge: { buy: 7, sell: 6.5 },
    day: 1,
  },
  {
    btc: { buy: 9, sell: 5 },
    eth: { buy: 7, sell: 4 },
    doge: { buy: 6, sell: 3 },
    day: 2,
  },
  {
    btc: { buy: 5, sell: 10 },
    eth: { buy: 4, sell: 6 },
    doge: { buy: 3, sell: 4 },
    day: 3,
  },
];

const calculateIncome = (arr) => {
  /// EDIT DOWN HERE
  const total = {};

  for (const item of arr) {
    for (const coin in item) {
      if (coin !== 'day') {
        if (total[coin] === undefined) total[coin] = 0;
        total[coin] += (item[coin].sell - item[coin].buy);
      }
    }
  }

  return total;
};

console.log(calculateIncome(items));
