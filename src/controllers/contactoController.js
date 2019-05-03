function contactoC () {
    $('.dato').keyup(tieneContenidoValido) //entra solo una vez se usa .one('evento', funcion)

function tieneContenidoValido() {
    var campo = $(this)
    var id = campo.prop('id')

    switch (id) {
        case 'nombre':
        case 'comentarios':
            if (campo.val().length > 0) {
                campo.addClass('is-valid')
                campo.removeClass('is-invalid')
                $(`#mensajeError-${id}`).text('')
            }
            else {
                campo.addClass('is-invalid')
                campo.removeClass('is-valid')
                $(`#mensajeError-${id}`).text('El campo es requerido')
                $(`#mensajeError-${id}`).css('color', 'red')
            }
            break
        case 'mail':
            let patron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            let valorMail = campo.val()
            if (valorMail.search(patron) == 0) {
                campo.removeClass('is-invalid')
                campo.addClass('is-valid')
                $(`#mensajeError-${id}`).text('')
            } else {
                campo.removeClass('is-valid')
                campo.addClass('is-invalid')
                $(`#mensajeError-${id}`).text('Ingrese un mail válido')
                $(`#mensajeError-${id}`).css('color', 'red')
            }
            break
    }
    //cuando esten los 3 validados se habilita el boton
    if ($('.is-valid').length == 3) {
        $('#botonEnviar').prop('disabled', false)
        $('#botonEnviar').addClass('btn-primary');
        $('#botonEnviar').removeClass('btn-secondary');
    }
    else {
        $('#botonEnviar').prop('disabled', true)
        $('#botonEnviar').addClass('btn-secondary');
        $('#botonEnviar').removeClass('btn-primary');
    }
}

}

export default contactoC
 