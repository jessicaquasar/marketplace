<?php

    $host = "localhost";
    $user = "root";
    $senha = "";
    $banco = "marketplace";

    $conn = mysqli_connect($host, $user, $senha, $banco) or die("Erro de conexão!" . mysqli_connect_error());

    $sql = "SELECT * FROM mercadorias";

    $result = mysqli_query($conn, $sql) or die("Erro de seleção do bd" . mysqli_connect_error());

    $json = "[";

    while($linha = mysqli_fetch_assoc($result)){

        $json .= "{";

            $json .= "'cod': " . $linha['cod'] . ",";
            $json .= "'name': '" . $linha['name'] . "',";
            $json .= "'type': '" . $linha['type'] . "',";
            $json .= "'amount': " . $linha['amount'] . ",";
            $json .= "'price': " . $linha['price'] . ",";
            $json .= "'optionMarket': " . $linha['optionMarket']; 

        $json .= "},";
    }

    $json .= "]";

    echo $json;

    mysqli_close($conn);
?>