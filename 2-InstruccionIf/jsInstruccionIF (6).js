function mostrar()
{
//tomo la edad  
	var edad

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if (edad<=17 && edad>=13) 
		{
			alert("Adolescente");
		}
		else
			{
				if (edad<=13) {
					alert("Niño");
				}else
					{
						alert("Mayor de edad");
					}

			}
	




}//FIN DE LA FUNCIÓN