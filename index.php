<?php
    if(isset($_POST["submit"])){
        $nombre = $_POST["nombre"];
        $edad   = $_POST["edad"];
        $correo = $_POST["correo"];

    }
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <form action="<?php echo htmlspecialchars($_REQUEST['PHP_SELF'])?>" method="post">
        <h1>Registro</h1>
        <label for="">Nombre:</label>
        <input type="text" name="nombre" value="<?php if(isset($nombre)) echo $nombre?>">
        <label for="">Edad:</label>
        <input type="text" name="edad" value="<?php if(isset($edad)) echo $edad?>">
        <label for="">Correo:</label>
        <input type="text" name="correo" value="<?php if (isset($correo)) echo $correo?>">
        <input type="submit" name="submit">
        <?php
            include("validar-form.php");
        ?>
    </form>
</body>
</html>
