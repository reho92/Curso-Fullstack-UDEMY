<?php 
declare(strict_types=1); //esto hace respetar los tipos de variable y muestra los errores
include 'includes/header.php';

/*function sumar ($num1=0, $num2=0){ //estos son parametros por default
    echo $num1+$num2;
}
sumar(10);*/ 

function sumar(int $numero1 = 0, array $numero2 ) {
    echo $numero1 + $numero2;
}

sumar(10, []);


include 'includes/footer.php';