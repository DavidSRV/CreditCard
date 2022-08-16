// Controladores de input

const user = document.getElementById("user");
const number = document.getElementById("number");
const cardNum = document.getElementById("cardNum");
const cardUser = document.getElementById("cardUser");
const button = document.getElementById("button");
const cvc = document.getElementById("cvc");
const cardCvc = document.getElementById("cardCvc")
const form = document.getElementById("form")


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



