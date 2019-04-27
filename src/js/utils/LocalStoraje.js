function devolverListaLocalStorage(key) {
    var listaDelLS = localStorage.getItem(key)

    if (listaDelLS) {
        var listaParseada = JSON.parse(listaLS)
        return listaParseada
    }
    return []
}

function cargarListaLocalStorage(key, lista) {
    localStorage.setItem(key, JSON.stringify(lista))
}

export { devolverListaLocalStorage, cargarListaLocalStorage } //hice visibles las funciones en otros modulos 