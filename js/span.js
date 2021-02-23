
const month= function(number){
    var _month;
    number++;

    switch(number){
        case 1:
            _month= 'Enero';
        break;
        case 2:
            _month= 'Febrero';
        break;
        case 3:
            _month= 'Marzo';
        break;
        case 4:
            _month= 'Abril';
        break;
        case 5:
            _month= 'Mayo';
        break;
        case 6:
            _month= 'Junio';
        break;
        case 7:
            _month= 'Julio';
        break;
        case 8:
            _month= 'Agosto';
        break;
        case 9:
            _month= 'Septiembre';
        break;
        case 10:
            _month= 'Octubre';
        break;
        case 11:
            _month= 'Noviembre';
        break;
        case 12:
            _month= 'Diciembre';
        break;
    }

    return _month;
};

const day= function(number){
    var _day;

    switch(number){
        case 0:
            _day= 'Domingo';
        break;
        case 1:
            _day= 'Lunes';
        break;
        case 2:
            _day= 'Martes';
        break;
        case 3:
            _day= 'Miercoles';
        break;
        case 4:
            _day= 'Jueves';
        break;
        case 5:
            _day= 'Viernes';
        break;
        case 6:
            _day= 'Sábado';
        break;
    }

    return _day;
}

function textView(){
    var textView= document.querySelector('.text-desc > span');
    var date= new Date();
    
    textView.innerText= `${day(date.getDay())}, ${month(date.getMonth())} ${date.getDate()}`;
}