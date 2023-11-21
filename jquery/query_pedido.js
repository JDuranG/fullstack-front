$(function(){
    $("#pedidoForm").on("submit", function(e){
        let fname = $("#fname").val();
        let lname = $("#lname").val();
        if (fname == "" || lname == "") {
            if (fname == "") {
                $("#labelName").css("color","red");
            }
            if (lname == "") {
                $("#labelLast").css("color","red");
            }
            if(fname != ""){
                $("#labelName").css("color","black");
            }
            if (lname != "") {
                $("#labelLast").css("color","black");
            }
            e.preventDefault();
        } else {
            $("#labelName").css("color","black");
            $("#labelLast").css("color","black");
            e.submit();
        }
    })
});