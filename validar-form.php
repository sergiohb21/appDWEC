<?php
    if(isset($_POST["submit"])){
        
        if(empty($nombre)){
            echo "<p class='error'> * Agrega tu nombre </p>";
        }else{
            if(strlen($nombre) > 15){
            echo "<p class='error'> * El nombre debe tener menos de 15 carcateres </p>";
            }
        }
        
        if(empty($edad)){
            echo "<p class='error'> * Agrega tu edad </p>";
        }else{
            if(!is_numeric($edad)){
                echo "<p class='error'> * Edad incorrecta</p>";

            }else{
                if($edad < 18){
                    echo "<p class='error'> * Debes ser mayor de edad</p>";
                }
            }
        }

        if(empty($correo)){
            echo "<p class='error'> * Agrega tu correo </p>";

        }else{
            if(!filter_var($correo,FILTER_VALIDATE_EMAIL)){
                echo "<p class='error'> * El correo es incorrecto </p>";
            }
        }
    }
?>