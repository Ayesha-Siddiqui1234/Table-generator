function table() {
    let initial = document.getElementById('initial').value;
    let final = document.getElementById('final').value;

    let result = " ";
    let tabledigit = +prompt(`Enter the digit whose table you want to print`);
    for (var i = initial; i <= final; i++) {
        var t = tabledigit * i;
        result += (`${tabledigit} * ${i} = ${t}<br>`);
        document.getElementById('displayContent').innerHTML = result;
    }
}