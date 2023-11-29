$(function () {
    $("#pedidoForm").on("submit", function (e) {
        let fname = $("#fname").val();
        let lname = $("#lname").val();
        if (fname == "" || lname == "") {
            if (fname == "") {
                $("#labelName").css("color", "red");
            }
            if (lname == "") {
                $("#labelLast").css("color", "red");
            }
            if (fname != "") {
                $("#labelName").css("color", "black");
            }
            if (lname != "") {
                $("#labelLast").css("color", "black");
            }
            e.preventDefault();
        } else {
            $("#labelName").css("color", "black");
            $("#labelLast").css("color", "black");
            e.submit();
        }
    })

    $("#size").on('change', function () {
        console.log(this.value);
        // Aqui va la llamada AJAX con JQuery
        $.ajax({
            url: 'http://localhost:5000/checksize',
            dataType: "html",
            type: 'POST',
            data: "size=" + this.value,
            success: function (data) {
                $("#resultado_tamano").text(data);
            }
        });
        // Llamada v2 (tambien funciona)
        // valor = { size: this.value }
        // $.post('http://localhost:5000/checksize', valor).then(resp => {
        //     $("#resultado_tamano").text(resp);
        // })
    });
});