var table = document.getElementsByTagName('tbody')[0];

table.onclick = function (event) {
    var elem = event.target;

    if (elem.className === 'rows-generator') {
        var newRow = document.createElement('tr');
        newRow.innerHTML = '<td></td><td></td><td></td>';

        table.insertBefore(newRow, table.firstElementChild)
    } else  {
        var content = elem.innerHTML;
        elem.innerHTML = '<input type="text">';
        elem.firstElementChild.value = content;
        elem.firstElementChild.focus();

        elem.firstElementChild.addEventListener('blur', function () {
            var inputVal = elem.firstElementChild.value;
            elem.innerHTML = inputVal;
        })
    }
};
