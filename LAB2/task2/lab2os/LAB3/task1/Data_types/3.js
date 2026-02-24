//---------------
let fruits = ["Apples", "Pear", "Orange"];

// adding new value
let shoppingCart = fruits;
shoppingCart.push("banana");

// what in the fruits?
alert( fruits.length ); // 4

//---------------------
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[1] = "Classics";
styles.shift();
styles.unshift("Rap", "Reggae");
alert(styles);

//--------------------------

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // a,b,function(){...}

//---------------------------
function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("enter a number", 0);
  
      // Прекращаем ввод?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
}
  
alert( sumInput() );

//---------------------

function getMaxSubSum(arr) {
    let maxSum = 0; // 0 if there are no elements
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
}
  
alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100