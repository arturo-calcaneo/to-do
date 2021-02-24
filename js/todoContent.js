
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