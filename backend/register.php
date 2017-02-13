<?php

    $cod = $_POST['cod'];
    $name = $_POST['name'];
    $type = $_POST['type'];
    $amount = $_POST['amount'];
    $price = $_POST['price'];

    $cod = "";
    if(isset($_POST['cod']))
        $cod = $_POST['cod'];

    $name = "";
    if(isset($_POST['name']))
        $name = $_POST['name'];

    $type = "";
    if(isset($_POST['type']))
        $type = $_POST['type'];

    $amount = "";
    if(isset($_POST['amount']))
        $amount = $_POST['amount'];

    $price = "";
    if(isset($_POST['price']))
        $price = $_POST['price'];

    $option = $_POST['option'];

    $host = "localhost";
    $user = "root";
    $senha = "";
    $banco = "marketplace";

    $conn = mysqli_connect($host, $user, $senha) or die("Erro de conexão" . mysqli_connect_error());

    $sql = "INSERT INTO " . $banco . ".mercadorias values (
        '" . $cod . "',
        '" . $name . "',
        '" . $type . "',
        '" . $amount . "',
        '" . $price . "',
        '" . $option . "')";

        if(mysqli_query($conn, $sql))

            echo ' os dados foram inseridos com sucesso!';
        else
            echo ' não foi possível inserir os dados na tabela!';

    mysqli_close($conn);
?>