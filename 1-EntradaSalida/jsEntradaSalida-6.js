/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var sumar

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);
	console.log(parseInt(primerNumero));

	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);
	console.log(parseInt(segundoNumero));

	sumar=primerNumero+segundoNumero

	console.log(sumar)
	alert(sumar)

}





