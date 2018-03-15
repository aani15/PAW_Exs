//Escrever condições é igual à linguagem Java
let isSoccerFan = false;
if (isSoccerFan === true) {
    console.log('Goal!');
} else {
    console.log('No goal!');
}

//Mais condições "if/else"
let wordCount = 0;

if (wordCount === 0) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'Daniel';

if (favoritePhrase === 'Daniel') {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

//Causar uma negação num "if"
let favoritePhrase = 'Daniel';

if (!favoritePhrase === 'Daniel') {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

//Verificar se as condições são verdadeiras ou falsas
let moonPhase = 'full';

if (moonPhase === 'full') {
    console.log('Howl!');
} else {
    console.log('I swear I am not a werewolf');
}

let moonPhase = 'solar eclipse';

if (moonPhase === 'full') {
    console.log('Howl!');
} else if (moonPhase === 'mostly full') {
    console.log('Arms and legs are getting hairier');  
} else if (moonPhase === 'mostly new') {
    console.log('Back on two feet');
} else if (!moonPhase === 'full') {
    console.log('I swear I am not a werewolf');
} else {
  console.log('Invalid moon phase');
}

//Operações "switch case"
let moonPhase = 'full';

switch(moonPhase) {
      case'full':
      console.log('Howl!');
      break;
      case 'mostly full':
      console.log('Arms and legs are getting hairier');
      break;
      case 'mostly new':
      console.log('Back on two feet');
      break;
}

//Operadores terenários
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') :
  console.log('You will not need a key to open the door.');
/*As linhas de código acima apresentadas*/ 

let isCorrect = true;

isCorrect ? console.log('Correct!'):
  console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') :
  console.log("I don't love that!");
