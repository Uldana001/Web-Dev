if(browser == 'edge') {
  alert("youve got the edge!");
} else if (browser == 'chrome'
 || browser == 'firefox'
 || browser == 'safari'
 || browser == 'opera') {
  alert( 'okay we support these browsers too' );
} else {
  alert( 'we hope that this page looks ok' );
}

//--------------------------------

let a = +prompt('a?', '');
switch (a) {
  case 0:
    alert( 0 );
    break;
  case 1:
    alert( 1 );
    break;
  case 2:
  case 3:
    alert( '2,3' );
    break;
}