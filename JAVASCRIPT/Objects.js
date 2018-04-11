/*Criar um objeto*/
let person = {
    name: 'Daniel',
    age: 19
  };
console.log(person);

//Apresentar apenas um atributo do OBJETO que foi criado
let person = {
    name: 'Daniel',
    age: 40
  };
  console.log(person.name);

//Mesma maneira de se fazer a mesma coisa que foi feita em cima 
let person = {
    name: 'Daniel',
    age: 40
  };
  console.log(person['name']);
  console.log(person['age']);

//Acrescentar valores ao OBJETO, mas dentro do próprio OBJETO
  let person = {
    name: 'Daniel',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM'
  };

//Definir o alarme dependente do dia da semana
let day;
let alarm;
let person = {
  name: 'Daniel',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};
day = 'Wednesday';

if (day === 'Saturday' || day ==='Sunday') {
    alarm = 'weekendAlarm';
} else {
    alarm = 'weekAlarm';
}

console.log(person['name']);
console.log(person['age']);
console.log(person[alarm]);
//Neste caso, como alarme não pertence ao objeto person, quando usamos chavetas não precisamos de usar pelicas

//Adicionar e imprimir valores de um vetor
let person = {
    name: 'Tyron',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM'
  };
  
  person.hobbies = ['Basketball', 'Coaching'];
  console.log(person.hobbies);
  
  console.log(person['name']);
  console.log(person['age']);
  
  let day = 'Tuesday';
  let alarm;
  
  if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
  } else {
    alarm = 'weekAlarm';
  }
  
  console.log(person[alarm]);

  //Criação de métodos dentro de um objeto

  let person = {
    name: 'Tyron',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    sayHello: () => { 
    return 'Hello, there!'; 
  }
  };
  
  person.hobbies = ['Play volleyball'];
  console.log(person.hobbies);
  
  console.log(person['name']);
  console.log(person['age']);
  
  let day = 'Tuesday';
  let alarm;
  
  if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
  } else {
    alarm = 'weekAlarm';
  }
  
  console.log(person[alarm]);
  console.log(person.sayHello());

//Usar o this.name, significa que aquela variável
let person = {
    name: 'Daniel',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    
    sayHello: function() {
      return `Hello, my name is ${this.name}`;
    },
    
    sayGoodbye() {
      return 'Goodbye!';
    }
    
  };
  
  console.log(person.sayHello());
  
  person.hobbies = ['Basketball', 'Coaching'];
  person.hobbies = ['Basketball'];
  console.log(person.hobbies);
  
  
  console.log(person['name']);
  console.log(person['age']);
  
  let day = 'Tuesday';
  let alarm;
  
  if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
  } else {
    alarm = 'weekAlarm';
  }
  
  console.log(person[alarm]);

  //Criar um objeto do tipo amigo e fazer com que friend "herde" um método de person
  let person = {
    name: 'Tyron',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    
    sayHello: function() {
      return `Hello, my name is ${this.name}`;
    },
    
    sayGoodbye() {
      return 'Goodbye!';
    }
  };
  
  
  let friend = {
    name: 'Lebron'
  };
  
  friend.sayHello = person.sayHello;
  
  console.log(friend.sayHello());
  console.log(person.sayHello());
  
  person.hobbies = ['Basketball', 'Coaching'];
  person.hobbies = ['Basketball'];
  console.log(person.hobbies);
  
  
  console.log(person['name']);
  console.log(person['age']);
  
  let day = 'Tuesday';
  let alarm;
  
  if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
  } else {
    alarm = 'weekAlarm';
  }
  
  console.log(person[alarm]);

  //Fazer a verificação se um número é de um certo tipo e uso de um setter para mudar a idade de person
  let person = {
    _name: 'Lu Xun',
    _age: 137,
    
      set age (newAge) {
      if (typeof newAge === 'number') {
          this._age = newAge;
      } else {
          return 'Invalid input';
      }
    }
  };

  //Maneira de mudar a idade acedendo ao setter por fora do método
  let person = {
    _name: 'Lu Xun',
    _age: 137,
    
      set age (newAge) {
      if (typeof newAge === 'number') {
          this._age = newAge;
      } else {
          return 'Invalid input';
      }
    }
  };
  
  person.age = 'Thirty-nine';
  person.age = 39;

  //Receber parâmetros de um get e imprimir 
  let person = {
    _name: 'Lu Xun',
    _age: 137,
    
      set age (newAge) {
      if (typeof newAge === 'number') {
          this._age = newAge;
      } else {
          return 'Invalid input';
      }
    },
    get age () {
      console.log(`${_name} is ${_age} years old.`);
      return this._age;
    }
  };
  
  person.age = 'Thirty-nine';
  person.age = 39;
  console.log(person._age);
  