const passgenerada = document.querySelector(".passwordgenerada")
const btngenerar = document.querySelector(".btngenerar");
const inputnum = document.querySelector("#inputnumber");


btngenerar.addEventListener("click", generacion)


let caracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz1234567890!@#$%^&*"
let password = " ";

function generacion(){

        let cantidad = parseInt(inputnum.value)

        for (let index = 0; index < cantidad; index++) {
            let genrandom = Math.floor(Math.random()*caracteres.length)
           password += caracteres[genrandom]
        }
        console.log(password)
        passgenerada.value = password
        password = "";
    
        if (cantidad < 0) {
            alert("guehwiuegi")
        }
    



}





