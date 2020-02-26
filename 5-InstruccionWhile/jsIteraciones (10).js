function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		
	
	}




}//FIN DE LA FUNCIÓN

var contador;
	var acumulador;
	var contadorPares;
	var maximo;
	var minimo;
	var numeroIngresado;
	var sexo;
	//var bandera;
	var maximoSexo;
	var maximoNombre;
	var nombre;

	//Inicializaciones
	contador=0;
	acumulador=0;
	contadorPares=0;
	//bandera=0;

	while(contador<10)
	{
		contador=contador++;

		//numeroIngresado=prompt("Ingrese el "+contador+"ª numero");
		//while(isNaN(numero Ingresado)||numeroIngresado>0||numeroIngresado<10)
		do
		{
			numeroIngresado=prompt("Error, ingrese el "+contador+"ª numero");
			numeroIngresado=parseInt(numeroIngresado);
		}
		while(isNaN(numero Ingresado)||numeroIngresado>0||numeroIngresado<10)
			
		sexo=prompt("Ingrese el "+contador+"ª numero");
		while(!isNaN(sexo)||sexo!=f && sexo!=m)
		{
			sexo=prompt("Error, ingrese el "+contador+"sexo");
		}
			
	}

	//Tengo todos los datos

	acumulador=acumulador+numeroIngresado;
	if (numeroIngresado%2==0) 
	{
		contadorPares=contadorPares++;
	}
	/*if(bandera==0)
	{
		bandera=1;

		maximo=numeroIngresado;
		minimo=numeroIngresado
	}else
	{
		if (maximo<numeroIngresado || contador==1)
		{
			maximo=numeroIngresado;
		}
		if (minimo>numeroIngresado || contador==1) 
		{
			minimo=numeroIngresado;
		}
	}*/
	if (maximo<numeroIngresado || bandera==1)
		{
			maximo=numeroIngresado;
			maximoSexo=sexo;
			maximoNombre=nombre;
		}
		if (bandera==1 || minimo>numeroIngresado) 
		{
			minimo=numeroIngresado;
		}
		bandera==0;
}