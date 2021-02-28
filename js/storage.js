
/**
 *  Estructura de Objeto de Lista:
 *  
 *  {
 *     {
 *        "<cuid>": "Escribe algo...",
 *        "completado": "false"
 *     },
 *     {
 *        "<cuid>": "Escribe algo...",
 *        "completado": "true"
 *     }
 *  }
 */

var listas= [];
var keys;
var uid;
var texto;
var completado;

function cargarListas(){
    // Si no hay un almacenamiento para listas, crearlo.
    if(JSON.parse(localStorage.getItem('lista')) === null){
        localStorage.setItem('lista', JSON.stringify( listas ));
    }

    // Si ya fueron almacenadas listas, cargar las listas
    if(getObjectLength(JSON.parse(localStorage.getItem('lista'))) > 0){
        listas= JSON.parse(localStorage.getItem('lista'));
        document.querySelector('.content').innerHTML= "";
        // crear las estructuras con los datos almacenados.
        for(const lista of listas){
            keys= Object.keys(lista);
            uid= keys[0];
            texto= lista[keys[0]];
            completado= lista[keys[1]];

            document.querySelector('.content').appendChild(newListStructureWD(uid,texto,completado));
        }
    }else{
        /**
         * Como esta función se ejecuta antes que el todoFooter(), lo que hago es vaciar el 
         * contenido en ".content" para que en todoFooter() se ejecute la función messageEmptyContent() 
         * e imprima el mensaje.
         */
        document.querySelector('.content').innerHTML= ``;
    }
}

function actualizarLista(){

    var lista= [];
    var uid;
    var texto;
    var completado;

    for(const input of document.querySelectorAll('.input-to-do')){
        uid= input.name;
        texto= input.value;
        completado= input.disabled;

        lista.push({
            [uid]: texto,
            complete: completado
        });
    }

    localStorage.setItem('lista', JSON.stringify(lista));
}