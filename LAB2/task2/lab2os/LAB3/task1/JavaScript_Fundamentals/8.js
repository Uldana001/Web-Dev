//1---------------------------------
if ("0") {
    alert( 'Hello' );
  } //true because "" not empty
  

//2----------------------------------
let compamy = prompt('What is the "official" name of JavaScript','') ;

if(company == 'ECMAScript' ){
    alert('Right');
} else {
    alert("You don't know? ECMAScript!");
}

//3------------------------------------

let number=prompt('Enter the number','');

if(number > 0){
    alert(1);
} else if( number < 0){
    alert(-1);
} else {
    alert(0);
}

//4---------------------------------------
let result;

if (a + b < 4) {
  result = 'below';
} else {
  result = 'over';
}

result = (a + b < 4) ? 'small' : 'many' ;

//5-------------------------------------------
let message;

if (login == 'employee') {
  message = 'hello';
} else if (login == 'director') {
  message = 'greeting';
} else if (login == '') {
  message = 'no login';
} else {
  message = '';
}


let message1 = (login == 'employee') ? 'hello' :
    (login == 'director') ? 'greeting' :
    (login == '') ? 'no login': 
    '';