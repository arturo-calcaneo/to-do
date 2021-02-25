
window.onload= function(){
    /**
     * Función para cargar contenido en el <span>
     */
    textView();

    /**
     * Función para agregar evento al contenido del to-do
     */
    todoContent();
};

function newListClick(callback){
    document.getElementsByClassName('new-list')[0].addEventListener('click', function(event){
        callback(event);
    });
}

function saveAllClick(callback){
    document.getElementsByClassName('save-all')[0].addEventListener('click', function(event){
        callback(event);
    });
}

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

function parseBoolean(str){
    return ( str === "" || str === "0" || str.length < 1 || str === "false") ? false : true;
}