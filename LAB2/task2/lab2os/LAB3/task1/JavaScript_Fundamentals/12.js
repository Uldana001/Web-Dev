//--------------------------------

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('did parents allow?');
    }
}

function checkAge(age){
    return(age>18) ? true :confirm('did parents allow?');
}

function cheackAge(age){
    return(age > 18) || confirm('did parents allow?');
}

//3------------------------------------

function min(num1, num2){
    if(num1 > num2) {
        return num2;
    } else {
        return num1;
    }
}

//4---------------------------


function pow(n,b){
    let result = n;

    for( let i=1; i < b; i++){
        result*=n;
    }

    return result;
}

if(b < 1 ){
    alert(`${b} not right`);
} else {
    alert(pow(n,b));
}