$(document).ready(function () {

    $.ajax({
        type: 'GET',
        url: 'http://localhost/marketplace/backend/viewer.php',
        success: function (response) {

            var mercadorias = eval(response)

            var html = '';
            for (var i = 0; i < mercadorias.length; ++i) {

                var data = mercadorias[i];

                html += '<div class="collection-item">';

                if(data.optionMarket === 1)
                    html += '<span class="badge">' + 'Compra' + '</span>';
                else
                    html += '<span class="badge">' + 'Venda' + '</span>';
                
                html += '<div>' + 'Código: ' + data.cod + '</div>';
                html += '<div>' + 'Tipo de mercadoria: ' + data.type + '</div>';
                html += '<div>' + 'Nome do Produto: ' + data.name + '</div>';
                html += '<div>' + 'Preço: ' + data.price + '</div>';
                html += '<div>' + 'Quantidade: ' + data.amount + '</div>';

                html += '</div>';
            }

            $('.collection').append(html)
        },
        fail: function () {

            alert('Erro ao consultar!');
        }
    });
})