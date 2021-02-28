
window.onload= function(){
    /**
     * Función para cargar contenido en el <span>
     */
    todoHeader();

    /**
     * Función para agregar evento al contenido del to-do
     */
    todoContent();

    /**
     * Función para darle altura maxima al contenido en móbiles
     */
    if(window.innerWidth < 401){
        contentMaxHeight();
    }

    /**
     * Función para cargar las listas
     */
    cargarListas();

    /**
     * Función para agregar eventos al footer del to-do
     */
    todoFooter();
};

function newListClick(callback){
    document.getElementsByClassName('new-list')[0].addEventListener('click', function(event){
        callback(event);
    });
}

/*function saveAllClick(callback){
    document.getElementsByClassName('save-all')[0].addEventListener('click', function(event){
        callback(event);
    });
}*/

function allInputOnEnter(callback){
    for(const input of document.querySelectorAll('.input-to-do')){
        input.addEventListener('keypress', function(event){
            // Cuando se presione enter en un input
            if(event.keyCode == 13){
                callback(event);
            }
        });
    }
}

var time= 1350;
var timeOut;

function onFinishKey(){
    // Mostrar como guardando
    document.querySelector('.saving.button').classList.add('is-loading');
    document.querySelector('.saving.button > .check-circle-saving').style.display= 'none';

    clearTimeout(timeOut);
    timeOut= setTimeout(function(){
        // Guardar todo
        saveTodo();
        // Mostrar como guardado
        document.querySelector('.saving.button').classList.remove('is-loading');
        document.querySelector('.saving.button > .check-circle-saving').style.display= 'block';
    }, time);
}

function deleteList(event){
    event.parentElement.parentElement.remove();
    saveTodo();
}

function contentMaxHeight(){
    document.querySelector('.card-content').style.maxHeight= (window.innerHeight - 330) + 'px';
}

function getObjectLength(object){
    return Object.keys(object).length;
}

function parseBoolean(str){
    return ( str === "" || str === "0" || str.length < 1 || str === "false") ? false : true;
}