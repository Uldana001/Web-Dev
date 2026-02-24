//--------------------------------------------
alert( null || 2 || undefined ); // 2 -> true
alert( alert(1) || 2 || alert(3) ); // 1 then 2 
alert( 1 && null && 2 ); // null -> false
alert( alert(1) && alert(2) ); // 1 then undefined
alert( null || 2 && 3 || 4 ); // 3($$-first, ||-second)

//-----------------------------------------------

if(age >=14 && age <= 90);

//------------------------------------------------

if( age < 14 || age > 90);
if(!(age >=14 && age <= 90));

//----------------------------------------------

if (-1 || 0) alert( 'first' ); // yes -1 -> true
if (-1 && 0) alert( 'second' ); // no , 0 - false
if (null || -1 && 1) alert( 'third' );// yes -1 && 1 = 1 

//--------------------------------------------------

let question = prompt('Whos there?','')

if(question === '' || question === null){
    alert('canceled');
    
} else if(question === 'admin'){

    let login = prompt('password?','');

    if (login === 'Themaster'){
        alert('Welcome!');
    } else if (login === '' || login === null){
        alert('Canceled');
    } else {
        alert('Wrong password');
    }

} else {
    prompt('i dont know you');
}