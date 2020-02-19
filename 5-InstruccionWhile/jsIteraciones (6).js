function mostrar()
{
	var numero;
	var contador;
	var acumulador
	acumulador;=0;
	contador=0;
	numero=prompt("Ingrese un número");
	numero=parseInt(numero);

	while(contador<5)
		{	
			acumulador=acumulador+numero;
			acumulador=parseInt(acumulador);
			contador++;
			numero=prompt("Ingrese otro numero");
			numero=parseInt(numero);
			
		}



	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN