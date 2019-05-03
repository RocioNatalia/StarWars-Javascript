import traducir from '../js/utils/traductor'

function personajesController () {

cargaMasContenido('https://swapi.co/api/people/?page=1&format=json');

var arrayPersonajesGuardados = [];

if (!localStorage.getItem('PersonajesGuardados')) {
	localStorage.setItem('PersonajesGuardados', JSON.stringify(arrayPersonajesGuardados));
} else {
	arrayPersonajesGuardados = JSON.parse(localStorage.getItem('PersonajesGuardados'));
}



function cargaMasContenido(url) {
	var request = $.ajax({
		url: url,
		method: 'GET'
	});

	request.done(function devolverUrlNext(datos) {
		var personajesResults = datos.results;
		var nextUrl = datos.next;
		var listLocalStorage = JSON.parse(localStorage.getItem('PersonajesGuardados'));

		for (var i = 0; i < personajesResults.length; i++) {
			

			var nombrePersonaje = personajesResults[i].name;
			var generoPersonaje = personajesResults[i].gender;
			var ojosPersonaje = personajesResults[i].eye_color;
			var alturaPersonaje = personajesResults[i].height;
			var pesoPersonaje = personajesResults[i].mass;
			var idDeCarga = Math.floor(Math.random() * 10000);

			
			switch (generoPersonaje) {
				case 'male':
				var generoTraducidos = traducir(generoPersonaje, /male/g, "hombre")
				break;
				case 'female':
				var generoTraducidos = traducir(generoPersonaje, /female/g, "mujer")
				break;
				case 'hermaphrodite':
				var generoTraducidos = traducir(generoPersonaje, /hermaphrodite/g, "hermafrodita")
				break;
				default: 
				generoTraducidos = generoPersonaje
				break
			}
			
			switch (ojosPersonaje) {
				case 'blue':
				var ojosTraducidos = traducir(ojosPersonaje, /blue/g, "azul")
				break;
				case 'yellow':
				var ojosTraducidos = traducir(ojosPersonaje, /yellow/g, "amarillo")
				break;
				case 'red':
				var ojosTraducidos = traducir(ojosPersonaje, /red/g, "rojo")
				break;
				case 'black':
				var ojosTraducidos = traducir(ojosPersonaje, /black/g, "negro")
				break;
				case 'brown':
				var ojosTraducidos = traducir(ojosPersonaje, /brown/g, "marrón")
				break;
				case 'hazel':
				var ojosTraducidos = traducir(ojosPersonaje, /hazel/g, "avellana")
				break;
				case 'blue-gray':
				var ojosTraducidos = traducir(ojosPersonaje, /blue-gray/g, "gris azulado")
				break;
				case 'orange':
				var ojosTraducidos = traducir(ojosPersonaje, /orange/g, "naranja")
				break;
				case 'pink':
				var ojosTraducidos = traducir(ojosPersonaje, /pink/g, "rosa")
				break;
				default: 
				ojosTraducidos = ojosPersonaje 
				break
		
			}



			var nodoLi = $(`<tr id="${idDeCarga}">
                                    <td id="nombre_${idDeCarga}">${nombrePersonaje}</td>
                                    <td id="genero_${idDeCarga}">${generoTraducidos}</td>
                                    <td id="ojos_${idDeCarga}">${ojosTraducidos}</td>
                                    <td id="altura_${idDeCarga}">${alturaPersonaje} cm</td>
                                    <td id="peso_${idDeCarga}">${pesoPersonaje} kg</td>
                                    <td><button type="button" class="btn btn-danger btn_guardar" id="btn_${idDeCarga}">Guardar</button></td>
                            </tr>`);

			$('#tableBodyPersonajes').append(nodoLi);

			

		}

		

		console.log($('#tableBodyPersonajes').text())


		$('.btn_guardar').click(function() {
			var idtr = $(this).parent().parent().prop('id');

			var objetoPersonaje = new Personaje(
				$(`#nombre_${idtr}`).text(),
				$(`#genero_${idtr}`).text(),
				$(`#ojos_${idtr}`).text(),
				$(`#altura_${idtr}`).text(),
				$(`#peso_${idtr}`).text(),
				idtr
			);

			var nombreBusca = $(`#nombre_${idtr}`).text();
			var arrayBuscados = listLocalStorage.filter((item) => item.nombre == nombreBusca);

			if (arrayBuscados.length == 0) {
				arrayPersonajesGuardados.push(objetoPersonaje);
				localStorage.setItem('PersonajesGuardados', JSON.stringify(arrayPersonajesGuardados));
			} else {
				alert('Este personaje ya fue guardado');
			}

			var tr = $(this).parent().parent();
			tr.fadeOut(500, function() {
				tr.remove();
			});
		});

		if (typeof nextUrl == 'string') {
			$('#cargarBtn').one('click', function() {
				cargaMasContenido(nextUrl);
			});
		} else {
			$('#cargarBtn').fadeOut(300);
		}
	});

	request.fail(function(error) {
		console.log('Error: ', error);
	});
}

function Personaje(nombre, genero, ojos, altura, peso, id) {
	this.nombre = nombre;
	this.genero = genero;
	this.ojos = ojos;
	this.altura = altura;
	this.peso = peso;
	this.id = id;
}



}

export default personajesController
