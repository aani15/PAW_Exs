//Criando e chamando funções 
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

function myNightSky () {
  return 'Night Sky: ' + satellite + ', '
  + stars + ', ' + galaxy;
};
console.log(myNightSky());

//Exemplo para ver como o let assume uma grande variabilidade de "nomes"
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

function myNightSky () {
  stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', '
  + stars + ', ' + galaxy;
};
console.log(myNightSky());
console.log(stars);

//Dar prints quando chamamos a função de fora e temos um "console.log" lá dentro
const visibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    console.log(lightWaves);
  };
  
  visibleLightWaves();

//Exemplo para ver a versatilidade que temos quando usamos o comando let numa variável  
  const visibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
      if (region === 'The Arctic') {
        let lightWaves = 'Northern Lights';
        console.log(lightWaves);  
      }
    console.log(lightWaves);
  };
  
  visibleLightWaves();

//Mais um exemplo 
const starCount = () => {
    let i = 5;
    console.log(i);
    for (let i = 0; i < 12; i++) {
      console.log(i);
    }
  };
  
  starCount();
  //console.log(i); este comando quando executado fora da função dá erro, uma vez que quando saímos da função 
  //o let "põe" a variável a null
  