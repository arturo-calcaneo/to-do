
function todoContent(){
    // Si se presiona enter en algun input
    allInputOnEnter(function(event){
        //console.log(event.target.value);
        iziToast.success({
            icon: null,
            title: 'Guardado',
            message: 'La lista fue actualizada.',
            messageColor: '#ffffff',
            titleColor: '#ffffff',
            color: '#ffffff',
            backgroundColor: 'rgba(37, 184, 37, 0.87)',
            progressBar: false,
            timeout: 1850
        })
    });
}