$(document).ready(function () {
    $('select').material_select();
});

function validaForm() {

    var valueCod = document.getElementById('cod').value;
    var valueName = document.getElementById('name').value;
    var valueType = document.getElementById('type').value;
    var valueAmount = document.getElementById('amount').value;
    var valuePrice = document.getElementById('price').value;

    if (valueCod.match(/^[0-9]{1,5}$/) === null) {

        document.getElementById("errorCode").style.display = "initial";

        return false;
    } else {

        document.getElementById("errorCode").style.display = "none";
    }

    if (valueName.match(/^[a-zA-Z ]{4,50}$/) === null) {

        document.getElementById("errorName").style.display = "initial";

        return false;
    } else {

        document.getElementById("errorName").style.display = "none";
    }

    if (valueType.match(/^[a-zA-Z ]{4,20}$/) === null) {

        document.getElementById("errorType").style.display = "initial";

        return false;
    } else {

        document.getElementById("errorType").style.display = "none";
    }

    if (valueAmount.match(/^[0-9]{1,}$/) === null) {

        document.getElementById("errorAmount").style.display = "initial";

        return false;
    } else {

        document.getElementById("errorAmount").style.display = "none";
    }

    if (valuePrice.match(/^[0-9]{1,5}\,[0-9]{1,2}$/) === null) {

        document.getElementById("errorPrice").style.display = "initial";

        return false;
    } else {

        document.getElementById("errorPrice").style.display = "none";
    }

    return true;
}

function tryToSubmit() {

    var validate = validaForm();

    if (validate) {

        var register = {
            cod: $('#cod').val(),
            name: $('#name').val(),
            type: $('#type').val(),
            amount: $('#amount').val(),
            price: $('#price').val(),
            option: $('#option').val()
        }

        $.ajax({
            type: 'POST',
            url: 'http://localhost/marketplace/backend/register.php',
            data: register,
            success: function (data) {

                alert('Os dados foram inseridos com successo!');

                window.location.reload();
            },
            fail: function (data) {

                alert('Erro ao tentar cadastrar!');
            }
        });
    }
}

