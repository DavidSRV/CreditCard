// INPUTS
let user = document.getElementById("user");
let number = document.getElementById("number");
let cardNum = document.getElementById("cardNum");
let cardUser = document.getElementById("cardUser");
let button = document.getElementById("button");
let cvc = document.getElementById("cvc");
let cardCvc = document.getElementById("cardCvc");
let form = document.getElementById("form");

//ALERTAS SPAN
let alertuser = document.getElementById("alertuser")
let alertnumber = document.getElementById("alertnumber");
let alertdate = document.getElementById("alertdate");
let alertcvc = document.getElementById("alertcvc");


//REGEX
let validuser = /^(?!.* $)[A-Z][a-z ]+$||^(?!.* $)[A-Z][a-z ]+$/;
// let validnumber = ;
// let validdateday = ;
// let validdatemonth = ;
// let validcvc = ;







function cancelar() {
    let dato = form[0];

    if (dato.value === "cancelar") {
        return true;

    } else {

        button.addEventListener("click", () => {

            cardNum.value = number.value;
            cardUser.value = user.value;
            cardCvc.value = cvc.value;

        })
        return false;
    }

}



