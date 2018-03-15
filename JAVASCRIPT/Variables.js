//Declarar variáveis
const location = 'New York City';
let latitude = 40.7;
let inNorthernHemisphere = true;

//Dar print nas variáveis
console.log(location);
console.log(latitude);
console.log(inNorthernHemisphere);

const entree = 'Enchiladas';
const price = 12;
console.log(entree);
console.log(price);
entree = 'Tacos'; //Quando se tenta renomear o que está dentro da variável dá erro

//Outra maneira de se criar variáveis
let myName = 'Daniel';
let myName = 'Culáudio';

//Criar variáveis UNDEFINED
let myName2;
console.log(myName2); //O resultado é 'undefined'

let molecule = 16;
let particle = 18;
let assay = 3;

// Adicionar valor a molecule
molecule+=16;
// Multiplicar ao valor de particle
particle*=6.02;
// Incrementar assay em 1
assay++;

//Dar print de variáveis presentes numa frase, como em java normal
let myFavouriteAnimal = 'Cao';
console.log('My favourite animal: ' + myFavouriteAnimal);

//Outra forma de dar print de variáveis em frases
let myName = 'Daniel';
let myCity = 'Gondomar';
console.log(`My name is ${myName}. My favourite city ${myCity}.`);