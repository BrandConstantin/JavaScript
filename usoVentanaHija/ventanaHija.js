function mostrarFecha(dia){	
 	var cadena = "";

  switch (dia){
    case 1: cadena = "Cumpleaños de Laura (cumple 22)";
      break;
    case 18: cadena = "Pasar ITV al camión (cita 12:00)";
      break;
    case 27: cadena = "Aniversario boda oro abuelos";
      break;
    case 28: cadena ="Cumpleaños de María (cumple 20)";
      break;
    case 9: cadena = "Cita con el abogado ( 10:45)";
      break;
    case 30: cadena ="Examen de java";
      break;
    case 31: cadena ="Cumpleaños de abuela (cumple 88)";
      break; 
  }

  if(cadena != ""){
    opener.window.document.write("<cita style='color:red'>");
    opener.window.document.write("La cita para el día " + dia + " es :    ");
    opener.window.document.write(cadena);
    opener.window.document.write("<br>");
    opener.window.document.write("</cita>");
  }  
} 