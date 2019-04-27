function homeController() {
    var parrafo = $('<p class ="text-center"> Ingresaste al Home! </p>')

    $('#root').fadeOut(2000, function () {

        $(this).html(parrafo)
        $(this).fadeIn(2000)
    })
}
export default homeController  
//si es una funcion si o si se usa default 
// export{homeController} esto noo funcionaaaa