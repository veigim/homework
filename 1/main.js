
var color = prompt('color?');
var memory = prompt('memory?');
var price = 0;
var isCorrect = true;
if (color === null || memory ===null) {
    isCorrect = false;
    document.write('<h2>Пока</h2>');
} else {
    if ( color === 'silver'&& +memory === 128 ) {
        price = '25+500=525', document.write('<img src= img/silver.png>');
    } else if ( color === 'silver'&& +memory === 256 ) {
        price = '25+700=725', document.write('<img src= img/silver.png>');
    } else if ( color === 'silver' && +memory === 512 ) {
        price = '25+900=925', document.write('<img src= img/silver.png>');
    } else if (color === 'black'&& +memory===128) {
        price = '50+500=550', document.write('<img src= img/black.png>');
    }else if (color === 'black' && +memory===256) {
        price = '50+700=750', document.write('<img src= img/black.png>');
    }else if (color === 'black' && +memory===512) {
        price = '50+900=950', document.write('<img src= img/black.png>');
    } else if (color === 'red' && +memory ===128 ) {
        price = '100+500=600', document.write('<img src= img/red.png>');
    } else if (color === 'red' && +memory ===256 ) {
        price = '100+700=800', document.write('<img src= img/red.png>');
    } else if (color === 'red' && +memory ===512 ) {
        price = '100+900=1000', document.write('<img src= img/red.png>');
    } else {
        isCorrect = false;
        document.write('<img src= img/default.png>'+'такого цвета и/или памяти не существует');
    }
}


if (isCorrect) {
    document.write('<h1>Price: ' + price + '$</h1>');
}


// if (isCorrect) {
//     document.createElement
// document.write ("<img src= img/default.png>");  