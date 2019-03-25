var xSize = document.getElementById('x-size'),
    ySize = document.getElementById('y-size'),
    btn = document.getElementsByTagName('button')[0];

function enableButton() {
    if (xSize.value && ySize.value) {
        btn.removeAttribute('disabled');
    }
}

function checkBlurInputs() {
    if (!xSize.value || !ySize.value) {
        btn.disabled = 'true';
    }
}

function createChessBoard() {
    var xSizeVal = parseInt(xSize.value),
        ySizeVal = parseInt(ySize.value);

    if ((isNaN(xSizeVal) || isNaN(ySizeVal)) || (ySizeVal < 1 || ySizeVal > 10) || (xSizeVal < 1 || xSizeVal > 10)) {
        alert('Invalid data!');
        xSize.value = '';
        ySize.value = '';
        btn.disabled = 'true';
        return;
    }

    var board = document.createElement('table');

    for (var i = 0; i < +ySize.value; i++) {
        var row = document.createElement('tr');

        for (var j = 0; j < +xSize.value; j++) {
            var cell = document.createElement('td');

            row.appendChild(cell);
        }

        board.appendChild(row);
    }

    board.classList.add('chessBoard');
    document.getElementsByClassName('wrapper')[0].appendChild(board);
}

xSize.addEventListener('keyup', enableButton);
ySize.addEventListener('keyup', enableButton);
xSize.addEventListener('blur', checkBlurInputs);
ySize.addEventListener('blur', checkBlurInputs);
btn.addEventListener('click', createChessBoard);

document.getElementsByClassName('wrapper')[0].onclick = function (event) {
    var element = event.target;

    if (element.tagName === 'TD') {
        element.parentElement.parentElement.classList.toggle('alternateColoring');
    }
};

