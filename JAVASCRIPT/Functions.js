//Apenas para ver como funciona uma função
let calculatorIsOn = false;

const pressPowerButton = () => {
  if (calculatorIsOn) {
    console.log('Calculator turning off.');
    calculatorIsOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorIsOn = true;
  }
};

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.

//Criar e chamar uma função com "arrow"
const takeOrder = () => {
    console.log('Order Pizza');
  };
  takeOrder();

//Avanço do exercício anterior 
const takeOrder = (topping) => {
    topping = 'mushrooms';
    console.log('Order: pizza topped with ' + topping);
  };
  takeOrder('mushrooms');

//Mais um avanço 
const takeOrder = (topping, crustType) => {
    topping = 'bacon';
    crustType = 'thin crust'
    console.log('Order:' + crustType + 'pizza topped with ' + topping);
  };
  takeOrder('bacon', 'thin crust');

//Fase final do "projeto" da pizzaria
let orderCount = 0;
const takeOrder = (topping, crustType) => {
  topping = 'bacon';
  crustType = 'thin crust'
  console.log('Order:' + crustType + 'pizza topped with ' + topping);
  orderCount++;
};

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = (orderCount) => {
  return getSubTotal(orderCount)*0.06;
};

const getTotal = () => {
  return getSubTotal(orderCount) + getTax(orderCount);
};

takeOrder('bacon', 'thin crust');
takeOrder('bacon', 'thin crust');
takeOrder('bacon', 'thin crust');
console.log(getSubTotal(orderCount));
console.log(getTotal());

//Criar funções sem "arrow" usando o comando "function nome_funcao () {};"
function isGreaterThan (numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        return true;
    } else {
        return false;
    }
  };
  
  console.log(isGreaterThan(5, 1));

//Funções com "concise body" (Esta comentado porque estava a dar erro)
/*const volumeOfSphere = diameter => 
  return (1/6) * Math.PI * diameter * diameter * diameter;


console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');*/
