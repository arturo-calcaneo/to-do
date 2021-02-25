
const newListStructure= function(){
    // creado estructura de lista
    var block= document.createElement('div');
        block.classList.add('block');
    var columns= document.createElement('div');
        columns.classList.add('columns');

    var column= [
        document.createElement('div'),
        document.createElement('div'),
        document.createElement('div')
    ];

    column[0].classList.add('column');
    column[0].setAttribute('onclick', 'isComplete(this)');
    column[0].setAttribute('complete', 'false');
    column[0].innerHTML= `<svg normal-circle class="svg-inline--fa fa-circle fa-w-16 icon-ident" aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>`;

    column[1].classList.add('column');
    column[1].classList.add('is-four-fifths');
    column[1].classList.add('to-do-text');

    column[1].innerHTML= `<input type="text" class="input-to-do" placeholder="Escribe algo..." />`;

    column[2].classList.add('column');
    column[2].innerHTML= `<svg class="svg-inline--fa fa-trash fa-w-14 icon-trash" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>`;
    column[2].setAttribute('onclick', '');

    // Agregar las columnas al contenedor con clase "columns"
    for(const theColumn of column){
        columns.appendChild(theColumn);
    }

    // Agregar el contenedor "columns" al contenedor de bloque
    block.appendChild(columns);

    return block;
};

const messageEmptyContent= function(){
    // Si ninguna lista ha sido agregada
    if(document.querySelector('.content').children.length == 0){
        document.querySelector('.content').innerHTML= `
            <span class="messageEmptyContent">
                <i class="fas fa-calendar-plus"></i>
                Crea una nueva lista para comenzar...
            </span>`;
    }else{
        // Si existe el span con dicho mensaje
        if(document.querySelector('.messageEmptyContent')){
            // Eliminarlo ya que hay listas disponibles
            document.querySelector('.messageEmptyContent').remove();
        }
    }
}

function todoFooter(){
    // Mostrar un mensaje cuando no haya ninguna lista creada
    messageEmptyContent();
    // Si se presiona el botón de nueva lista
    newListClick(function(event){ 
        document.querySelector('.content').appendChild(newListStructure());
        messageEmptyContent();
    });
    // Si se presiona el botón guardar todo
    saveAllClick(function(event){ saveTodo(); });
}