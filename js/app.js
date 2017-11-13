// cuando esta totalmente cargado
window.onload = function() {
  //
  var tds = Array.prototype.slice.call(document.getElementsByTagName('td'));
  var symbol = 'x';

  // es como recorrer con for 
  tds.forEach(function(td, index) {
    td.addEventListener('click', function click() {// console.log('diste click en cuadrado: '+ index);
      td.removeEventListener('click', click);
      
      td.innerHTML = symbol;
      if (symbol === 'x') {
        symbol = 'o';
      } else {
        symbol = 'x';
      }

    });
  });



};