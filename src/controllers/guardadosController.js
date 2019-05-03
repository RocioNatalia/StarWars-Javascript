function guardadosC () {
	var listaLocal = JSON.parse(localStorage.getItem('PersonajesGuardados'));

for (let index = 0; index < listaLocal.length; index++) {
	const element = listaLocal[index];
	var nombre = element.nombre;
	var genero = element.genero;
	var ojos = element.ojos;
	var altura = element.altura;
	var peso = element.peso;
	var id = element.id;

	var nodoLiGuardados = $(`<tr id="${id}">
                                    <td id="nombre_${id}">${nombre}</td>
                                    <td id="genero_${id}">${genero}</td>
                                    <td id="ojos_${id}">${ojos}</td>
                                    <td id="altura_${id}">${altura}</td>
                                    <td id="peso_${id}">${peso}</td>
                                    <td><button type="button" class="btn btn-danger btn_eliminar" id="btn_${id}">Eliminar</button></td>
                            </tr>`);

	$('#tableBodyGuardados').append(nodoLiGuardados);
}

$('.btn_eliminar').click(function() {
	var trEliminar = $(this).parent().parent();
	var itemEliminar = $(this).parent().parent().prop('id');
	var listaactualizadaLS = JSON.parse(localStorage.getItem('PersonajesGuardados'));

	var listaNueva = listaactualizadaLS.filter(function(item) {
		return item.id != itemEliminar;
	});
	localStorage.setItem('PersonajesGuardados', JSON.stringify(listaNueva));

	trEliminar.fadeOut(500, function() {
		$(this).remove();
	});
});


}

export default guardadosC

