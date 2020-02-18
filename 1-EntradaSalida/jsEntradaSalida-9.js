/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var aumento;
	var resultado;


	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);
	console.log(sueldo);

	aumento=(sueldo/100)*10;
	console.log(aumento);

	resultado=aumento+sueldo;
	document.getElementById('resultado').value=resultado;

	
}
