function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        let expression = document.getElementById("display").value;
        document.getElementById("display").value = math.evaluate(expression);
    } catch {
        document.getElementById("display").value = "Error";
    }
}
