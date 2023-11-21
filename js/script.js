
const pedido = document.getElementById("pedidoForm");
pedido.addEventListener("submit", (e) => {
    validateForm(e);
});

function validateForm(e) {
    let fname = document.forms["pedidoForm"]["fname"].value;
    let lname = document.forms["pedidoForm"]["lname"].value;
    if (fname == "" || lname == "") {
        if (fname == "") {
            document.getElementById('labelName').style.color = 'red';
        }
        if (lname == "") {
            document.getElementById('labelLast').style.color = 'red';
        }
        if(fname != ""){
            document.getElementById('labelName').style.color = 'black';
        }
        if (lname != "") {
            document.getElementById('labelLast').style.color = 'black';
        }
        e.preventDefault();
    } else {
        document.getElementById('labelName').style.color = 'black';
        document.getElementById('labelLast').style.color = 'black';
        document.getElementById("pedidoForm").submit();
    }
}
