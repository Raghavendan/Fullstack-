function handleClick(event) {
    if (document.getElementById(event.target.id).innerHTML === "clr") {
        document.getElementById("inputBox").value = "";
    } else {
        document.getElementById("inputBox").value += document.getElementById(event.target.id).innerHTML;
    }
}

function equalTo() {
    if (/^[a-zA-Z0-9]+$/.test(document.getElementById("inputBox").value)) {

        const str = document.getElementById("inputBox").value;
        const alphabets = str.match(/[a-zA-Z]+/g) ? str.match(/[a-zA-Z]+/g).join("") : "";
        const numbers = str.match(/\d+/g) ? str.match(/\d+/g).join("") : "";

        document.getElementById("inputBox").value = eval("Math." + alphabets.toLowerCase() + "(" + numbers + ")");

    } else {
        document.getElementById("inputBox").value = eval(document.getElementById("inputBox").value);
    }

}

function backSpace() {
    document.getElementById("inputBox").value = document.getElementById("inputBox").value.slice(0, -1);
}  
