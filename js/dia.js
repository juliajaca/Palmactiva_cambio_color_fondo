const COLORES = ['red','purple','indigo', 'deepskyblue', 'aqua','green','lime', 'khaki','fuchsia','mintcream','brown','gray','chocolate','dodgerblue','pink','palevioletred','blue','cyan','teal','lightsalmon','sand','yellow','orange','firebrick','darkslategray','darkolivegreen', 'chartreuse','ivory','gold', 'crimson', 'tomato'];

function cambioColor(){
    var fechaHora = new Date();
    var dia = fechaHora.getDate();
    // dia = 1;
    var pagina = document.getElementsByTagName('body')[0];
    var colordeHoy = COLORES[dia-1] ;
    pagina.innerHTML = `Hoy es día ${dia}, y el color de fondo es ${colordeHoy}.`;
    pagina.style.backgroundColor = colordeHoy;

    //recursiva de llamada de funcion para que cambie de color del fondo a las 12 de la noche
    setTimeout('cambioColor()', 1000);
}

window.onload = function(){
    //para ejecutar
    cambioColor();

}