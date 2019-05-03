// router.js maneja las rutas que uno ingresa en el navegador

import crossroads from 'crossroads'
import homeAnimacion from '../controllers/homeController'
import personajesController from '../controllers/personajesController'
import guardadosController from '../controllers/guardadosController'
import contactoController from '../controllers/contactoController'


crossroads.addRoute("/", function() {
    $("#root").load("./partials/home.html", homeAnimacion)
})

crossroads.addRoute("#/home", function() {
    $("#root").load("./partials/home.html", homeAnimacion)
})

crossroads.addRoute("#/personajes", function() {
    $("#root").load("./partials/personajes.html", personajesController)
})

crossroads.addRoute("#/guardados", function() {
    $("#root").load("./partials/guardados.html", guardadosController)
})

crossroads.addRoute("#/contacto", function() {
    $("#root").load("./partials/contacto.html", contactoController)
})


// Para que funcione correctamente crossroads
$(window).on("hashchange", function () {
    crossroads.parse(window.location.hash)
})

crossroads.parse(window.location.hash)