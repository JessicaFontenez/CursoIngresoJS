function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var acumulador;
	var numeroMayor;
	var numeroMenor;
	numeroMenor=0;
	
	var respuesta='si';

	while(respuesta!='no'&& respuesta==isNaN || respuesta=="si")
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		if (numero>0) {
						numeroMayor=numero;
					}
					else{
						numeroMenor=numero;
					}
					while(numero>numeroMayor){
												numeroMayor=numero;
											}	
											while(numero<numeroMenor){
												numeroMenor=numero;
											}

		contador++;
		respuesta=prompt("¿Desea seguir ingresando numeros?")
	
	}

	document.getElementById('minimo').value=numeroMenor;
	document.getElementById('maximo').value=numeroMayor;




}//FIN DE LA FUNCIÓN