//-------------
let i = 3;

while (i) {
  alert( i-- );
} // 3->2->1 

//--------------
let i1 = 0;
while (++i1 < 5) alert( i1 ); // 1-4 , we add and then compare

let i2 = 0;
while (i2++ < 5) alert( i2 ); // 1-5 we compare than add , 1-5

//-----------------
for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );

//0-4 for both situation 

//----------------------------

for(let i=2; i<=10; i++){
    if(i % 2 == 0){
        alert(i);
    }
}

//-----------------------------

for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}

let i4=0;
while(i4 < 3){
    alert( `number ${i4}!` );
    i4++;
} 
// ----------------------------------------

let number;

do{
    number = prompt('enter number greater than 100',0);
} while( number <=100 && number );

//----------------------------------------------

let num = 10;

prime:
for(i = 2; i <= num; i++){
    for(j = 2; j < i ; j++){
        if( i % j == 0) continue prime;
    }

    alert(i);
}