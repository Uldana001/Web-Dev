function camelize(str) {
    return str
        .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
        .map(
            // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
            // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}
//------------------------------------------------------


function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}
  
let arr = [5, 3, 8, 1];
  
let filtered = filterRange(arr, 1, 4);
  
alert( filtered ); // 3,1 
  
alert( arr ); // 5,3,8,1 

//------------------------------------------------------


let arr1 = [5, 2, 1, -10, 8];

arr1.sort((a, b) => b - a);

alert( arr1 );

//------------------------------------------------------


function copySorted(arr2) {
    return arr2.slice().sort();
}
  
let arr2 = ["HTML", "JavaScript", "CSS"];
  
let sorted = copySorted(arr);
  
alert( sorted );
alert( arr2 );

//------------------------------------------------------


function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    }
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
}

//------------------------------------------------------


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names ); // Вася, Петя, Маша

//------------------------------------------------------


let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // Вася Пупкин

//-----------------------------------------------------

function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

//-----------------------------------------------------

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
  
let arr3 = [1, 2, 3];
shuffle(arr3);
alert(arr3);

//-----------------------------------------------------

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

alert( getAverageAge(arr) ); // 28

//------------------------------------------------------

function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
}
  
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];
  
alert( unique(strings) ); // кришна, харе, :-O

//-----------------------------------------------------

function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
}
