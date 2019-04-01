var counter = document.getElementById('display-counter'),
    btnRun = document.getElementById('run'),
    btnSave = document.getElementById('save'),
    btnReset = document.getElementById('reset'),
    controls = document.getElementById('controls');

var mm,
    ss,
    ms,
    timer;

btnRun.onclick = function () {
    var runCondition = btnRun.getAttribute('data-btn-condition');

    switch (runCondition) {
        case 'Запустить':
            mm = 0;
            ss = 0;
            ms = 0;

            count();
            btnRun.setAttribute('data-btn-condition', 'Пауза');
            btnRun.textContent = btnRun.getAttribute('data-btn-condition');
            controls.style.display = 'table-row';
            break;
        case 'Пауза':
            clearInterval(timer);
            btnRun.setAttribute('data-btn-condition', 'Возобновить');
            btnRun.textContent = btnRun.getAttribute('data-btn-condition');
            break;
        case 'Возобновить':
            count();
            btnRun.setAttribute('data-btn-condition', 'Пауза');
            btnRun.textContent = btnRun.getAttribute('data-btn-condition');
            break;
    }
};

btnReset.onclick = function () {
    btnRun.removeAttribute('disabled');
    clearInterval(timer);
    btnRun.setAttribute('data-btn-condition', 'Запустить');
    btnRun.textContent = btnRun.getAttribute('data-btn-condition');
    counter.textContent = '00 : 00 : 00';
    controls.style.display = 'none';

    mm = 0;
    ss = 0;
    ms = 0;

    var saves = document.getElementsByClassName('savedResult');
    while (saves[0]) {
        saves[0].remove();
    }
};

btnSave.onclick = function () {
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    cell.style.cssText = 'background: #fff; text-align: center';
    cell.setAttribute('colspan', '2');
    cell.textContent = counter.textContent;
    row.appendChild(cell);
    row.classList.add('savedResult');
    this.parentElement.parentElement.parentElement.appendChild(row);
};

window.onunload = saveCounter;
window.onload = startAfterReload;

function count() {
    timer = setInterval(function () {
        if (mm === 60) {
            btnRun.setAttribute('disabled', '');
            clearInterval(timer);
        }

        var outputStr = ('00' + mm).slice(-2) + ' : ' + ('00' + ss).slice(-2) + ' : ' + ('00' + ms).slice(-3, this.length - 1);
        counter.textContent = outputStr;

        ms+=10;

        if (ms === 1000) {
            ss++;
            ms = 0;
        }

        if (ss === 60) {
            mm++;
            ss = 0;
        }
    }, 10);
}

function  saveCounter() {
    if (counter.textContent !== '00 : 00 : 00') {

        var currentValue = {};
        currentValue.mm = mm;
        currentValue.ss = ss;
        currentValue.ms = ms;

        localStorage.setItem('current', JSON.stringify(currentValue));
    }
}

function startAfterReload() {
    if (localStorage.getItem('current')) {
        var currentValue = JSON.parse(localStorage.getItem('current'));

        mm = currentValue.mm;
        ss = currentValue.ss;
        ms = currentValue.ms;

        btnRun.setAttribute('data-btn-condition', 'Пауза');
        btnRun.textContent = btnRun.getAttribute('data-btn-condition');
        controls.style.display = 'table-row';
        count();

        localStorage.clear();
    } else {
        counter.textContent = '00 : 00 : 00';
    }
}
