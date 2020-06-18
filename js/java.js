function display (number) {
    document.getElementById("result").value = document.getElementById("result").value+number;
}

function calc () {
    var num = document.getElementById("result").value;
    if(num) {
        document.getElementById("result").value = eval(num);
    }
    
}

function clean () {
    document.getElementById("result").value = "";
}
