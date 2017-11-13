// cuando esta totalmente cargado
window.onload = function() {
  //
  var tds = Array.prototype.slice.call(document.getElementsByTagName('td'));
  var symbol = 'x';
  var positions = [
    ['dl', 'h1', 'v1'],
    ['h1', 'v2'],
    ['dr', 'h1', 'v3'],

    ['h2', 'v1'],
    ['h2', 'v2', 'dl', 'dr'],
    ['h2', 'v3'],

    ['dr', 'h3', 'v1'],
    ['h3', 'v2'],
    ['dl', 'h3', 'v3'],
  ];
  var obj = {};
  var winner;

  // es como recorrer con for 
  tds.forEach(function(td, index) {
    td.addEventListener('click', function click() {// console.log('diste click en cuadrado: '+ index);
     
      td.removeEventListener('click', click);

      if (winner) {
        return;
      }
      
      td.innerHTML = symbol;

      positions[index].forEach(function (position) {
        if (obj[position + '-' + symbol]) {
          obj[position + '-' + symbol] += 1;
        }
        else {
          obj[position + '-' + symbol] = 1;
        }
      });

      Object.keys(obj).forEach(function (key, index) {
        var value = obj[key];
        if (value == 3) {
          winner = symbol;
        }
      });

      if (winner) {
        indicator.textContent = 'El ganador es: ' + winner;
      }
      else {
        indicator.textContent = 'Estan empatados';
      }

      if (symbol === 'x') {
        symbol = 'o';
      } else {
        symbol = 'x';
      }

    });
  });

  document.getElementById('restart').addEventListener('click', function (){
    window.location.reload();
  });
};