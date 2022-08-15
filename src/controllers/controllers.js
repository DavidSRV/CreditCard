// Controladores de input

const user = document.getElementById("user");
const number = document.getElementById("number");
const cardNum = document.getElementById("cardNum");        
const cardUser = document.getElementById("cardUser");
const submit = document.getElementById("submit");
const cvc = document.getElementById("cvc");
const cardCvc = document.getElementById("cardCvc")



submit.addEventListener("mouseover",(cancel)=>{

    cancel.preventDefault();

    window.addEventListener("submit",()=>{
    
        cardNum.value = number.value;
        cardUser.value = user.value;
        cardCvc.value = cvc.value;

    })

})


