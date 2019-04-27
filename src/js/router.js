import crossroads from 'crossroads'
import homeController from '../controllers/homeController' 

crossroads.addRoute('#/home' , function (){
    $('#root').load('./partials/home.html', homeController)
})

//cargar contenido dinamico que levante el html

//para que funcione correctamente crossroads

$(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
})

crossroads.parse(window.location.hash)