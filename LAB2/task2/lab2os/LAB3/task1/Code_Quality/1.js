function pow(x, n) { //function that calculates x raised to the power n
  let result = 1; //start with 1 because multiplying by 1 doesnt change the value
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result; // return the final result
}
let x = prompt("x?", ""); //ask the user for the base number
let n = prompt("n?", "");


if (n <= 0) {
  alert(`power ${n} is not supported,
    please enter an integer number greater than zero`); //show error message if power is not supported
} else {
  alert( pow(x, n) ); //show the result of x raised to the power n
}