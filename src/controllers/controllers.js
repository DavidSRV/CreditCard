const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input')


//REGEX
const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	number: /^\d{16,16}$/,
    date: /^\d{2}$/,
    cvc: /^\d{3}$/
}

const campos = {
    user: false,
    number: false,
    date: false,
    date1: false,
    cvc: false,
}

const validarFomulario = (e) => {
    switch (e.target.name){

        case 'user':
            validarCampo(expresiones.name, e.target, "user", "alertuser", "cardUser");

        break;

        case 'number':
            validarCampo(expresiones.number, e.target, "number", "alertnumber", "cardNum");

        break;

        case 'date':
            validarCampo(expresiones.date, e.target, "date", "alertcvc");

        break;

        case 'date1':
            validarCampo(expresiones.date, e.target, "date1", "alertcvc");

        break;

        case 'cvc':
            validarCampo(expresiones.cvc, e.target, "cvc", "alertcvc", "cardCvc");
            
        break;

    }
}

const validarCampo = (expresiones, input, campo, campoverificado, copiaTarjeta, copiarcvc) => {

    if(expresiones.test(input.value)){

        document.getElementById(campo).classList.remove('input-incorrecto');

        document.getElementById(campoverificado).classList.replace('alert-on','alert');

        campos[campo] = true;

        document.getElementById(copiaTarjeta).value = input.value;

        document.getElementById(copiarcvc).value = input.value;

        
     } else {

        document.getElementById(campo).classList.add('input-incorrecto');

        document.getElementById(campoverificado).classList.replace('alert','alert-on');

        campos[campo] = false;

        document.getElementById(copiaTarjeta).value = input.value;

        document.getElementById(copiarcvc).value = input.value;



    }
}

inputs.forEach((input)=> {
    input.addEventListener('keyup',validarFomulario);

    input.addEventListener('blur',validarFomulario);
});

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(campos.user && campos.date && campos.cvc && campos.number && campos.date1){
        formulario.reset();

        
    }else{
        document.getElementById('btnconfirm').classList.replace('alert','alert-in-input');


    }


});


