
    var firstNum;
    var secondNum;
    var operator;

function clearDisplay() {
    var display = document.getElementById("display");
    display.value = "0"; 
}

function inputNum(number) {
    var display = document.getElementById("display");
    if (display.value == "0") {
        display.value = "";
    }
    display.value += number;
}

function setOperation(oper) {
    var display = document.getElementById("display");
    firstNum = parseFloat(display.value);
    operator = oper;
   clearDisplay();
}
    
function calculate() {
    var result;
    var display = document.getElementById("display");
    secondNum = parseFloat(display.value);

    switch(operator){
        case "*" :
        result = firstNum * secondNum; 
        break;

        case "/" : 
        result = firstNum / secondNum; 
        break;

        case "+" : 
        result = firstNum + secondNum; 
        break;

        case "-" : 
        result = firstNum - secondNum; 
        break;
        
        case "**" :
        result = firstNum ** secondNum;
        break;
    }
    display.value = result.toFixed(8).replace(/\.?0+$/, '');
}

function insertDecimal() {
    var display = document.getElementById("display");
    if (isNaN(display.value)){
        display.value = "0.";
    } else {
        if (display.value.indexOf('.') === -1) {
            display.value += '.';
        }
    }
}

function backspace() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function sin() {
    var display = document.getElementById("display");
    display.value= Math.sin(Math.PI * display.value / 180).toFixed(6);
}

function cos() {
    var display = document.getElementById("display");
    display.value= Math.cos(Math.PI * display.value / 180).toFixed(6);
}

function reciprocal() {
    var display = document.getElementById("display");
    var num = parseFloat(display.value);
    display.value = (1 / num).toFixed(8).replace(/\.?0+$/, "");
}

function log() {
    var display = document.getElementById("display");
    display.value = Math.log10(display.value);
}

function ln() {
    var display = document.getElementById("display");
    display.value = Math.log(display.value);
}

function square(base) {
    let result = 1;
    base = document.getElementById("display").value;
    for (let count = 0; count < 2; count++) {
        result *= base;
    }
    display.value = result;   
}

function sqrt() {
    var display = document.getElementById("display");
    display.value = Math.sqrt(display.value).toFixed(8).replace(/\.?0+$/, "");
}

function factorialize(num) {
    var display = document.getElementById("display");
    num = parseInt(display.value);

    function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
display.value = factorial(num);
}

function cube(base) {
    let result = 1;
    base = parseFloat(document.getElementById("display").value);
    for (let count = 0; count < 3; count++) {
        result *= base;
    }
    display.value = result;   
}


function plusMin() {
    var display = document.getElementById("display");
    var n = display.value;
    n = n * -1;
    display.value = n;
}
/*function addExpon() {
    
}*/