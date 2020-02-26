function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta=="si")
		{	
			numero=prompt("Ingrese un numero");
			numero=parseInt(numero);
			acumulador=acumulador+numero;
			acumulador=parseInt(acumulador);
			contador++;
			respuesta=prompt("¿Desea seguir ingresando numeros?");
		}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN