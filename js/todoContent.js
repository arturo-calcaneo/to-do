const checkedCircle= function(){
    return `<svg checked-circle class="svg-inline--fa fa-check-circle fa-w-16 icon-ident on-green" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>`;
};

const normalCircle= function(){
    return `<svg normal-circle class="svg-inline--fa fa-circle fa-w-16 icon-ident" aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path>
            </svg>`;
};

const saveTodo= function(){
    iziToast.success({
        theme: 'dark',
        //icon: null,
        title: 'Guardado',
        //message: 'La lista fue actualizada.',
        //messageColor: '#ffffff',
        //titleColor: '#ffffff',
        //color: '#ffffff',
        backgroundColor: 'rgba(37, 184, 37, 0.87)',
        progressBar: false,
        timeout: 1900
    });
};

function todoContent(){
    // Si se presiona enter en algun input
    allInputOnEnter(function(event){ saveTodo(); });
    // Si se presiona el botón guardar todo
    saveAllClick(function(event){ saveTodo(); });
}

// Cuando se marque como completado
function isComplete(event){
    var isComplete= parseBoolean(event.attributes.complete.value);
    
    if(isComplete){
        // Mostrar icono dependiendo del estado
        event.innerHTML= normalCircle();
        // Desbloquear input
        event.parentElement.children[1].children[0].removeAttribute('disabled');
        // Cambiar estado de completo
        event.setAttribute('complete', false);
    }else{
        // Mostrar icono dependiendo del estado
        event.innerHTML= checkedCircle();
        // Bloquear input
        event.parentElement.children[1].children[0].setAttribute('disabled',true);
        // Cambiar estado de completo
        event.setAttribute('complete', true);
    }
}