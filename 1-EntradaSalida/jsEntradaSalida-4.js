/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	
	
	nombre=prompt("Please enter your name" , "Your name here");
	document.getElementById('elNombre').value=nombre;
	

}

