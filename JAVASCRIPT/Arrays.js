//Inicialização de um array e a sua impressão
let bucketList = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];

console.log(bucketList);

//Criando array do início e chamando com console.log
let newYearsResolutions = ['Ola',' eu sou','o Daniel'];

console.log(newYearsResolutions);

//Igualando variável a um elemento do array
let newYearsResolutions = ['Carro','Comida','Computador novo'];
let listItem = newYearsResolutions[0];

console.log(newYearsResolutions);
console.log(listItem);
console.log(newYearsResolutions[2]);

//Descobrindo o tamanho de um array
let newYearsResolutions = ['Carro','Learn a new language','Computador novo'];
let listItem = newYearsResolutions[0];

console.log(newYearsResolutions);
console.log(listItem);
console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);
console.log(newYearsResolutions.length);

//Adicionando e apagando elementos de um array
let newYearsResolutions = ['Carro','Learn a new language','Computador novo'];
let listItem = newYearsResolutions[0];

console.log(newYearsResolutions);
console.log(listItem);
console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);
console.log(newYearsResolutions.length);
newYearsResolutions.push('Fazer o curso e ter um bom trabalho','Um computador novo');
console.log(newYearsResolutions);
newYearsResolutions.pop(newYearsResolutions[4]);

//Usar o método .slice()
let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4)); //tira do 1º até ao 3º elemento do array
console.log(groceryList);

//Adicionar, repor array com diferentes valores
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments.push('Mayo');

condiments = ['Sriracha'];

console.log(condiments);

utensils.pop();

utensils = ['Spork'];