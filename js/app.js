var container = document.querySelector('.tictactoe');
var startButton = document.getElementById('startButton');
startButton.addEventListener('click', start);
container.addEventListener('click',onCellClick);

function onCellClick(event) {
    var target = event.target;
    var dataset = target.dataset;
    // console.log(dataset);
    // console.log('target',target);
    if (dataset && dataset.row) {
        console.log('pos', dataset.row, dataset.column)
    }
}

function ticTacToe() {
    this.matrix = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]
}

function start() {
    console.log('start');
}
// on load
start();