//--------------
ucFirst("dana") == "Dana";

let newStr = str[0].toUpperCase() + str.slice(1);

//2-------------

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
  
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );

//-------------------

function truncate(str, maxlen){
    return (str.lenght > maxlen) ?
    str.slice(0, maxlen - 1) + "..." : str;
}

//-------------------
function extractCurrencyValue(str) {
    return +str.slice(1);
}