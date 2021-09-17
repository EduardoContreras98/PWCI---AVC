const email = document.getElementById("L_Correo")
const pass = document.getElementById("L_Password")
const formL = document.getElementById("form-login")
const warn = document.getElementById("warnings")

formL.addEventListener("submit", e=>{

    var mayus   = /[A-Z]/
    var lower   = /[a-z]/
    var numbers = /[0-9]/
    var special = /\W/


    e.preventDefault()
    let warning = "Contraseña insegura <br> Se requieren los siguientes datos <br>"
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    warn.innerHTML = ""
    

    if(pass.value.length == 0)
    {
        entrar = true;
        warning = "Llene el campo de contraseña"
    }
    else{
        if(pass.value.length < 8){
            warning += '8 o mas caracteres <br>'
            entrar = true
        }

        console.log(mayus.test(pass.value))
        if(!mayus.test(pass.value)){
            warning += 'Mayusculas <br>'
            entrar = true
        }

        console.log(lower.test(pass.value))
        if(!lower.test(pass.value)){
            warning += 'Minusculas <br>'
            entrar = true
        }

        console.log(numbers.test(pass.value))
        if(!numbers.test(pass.value)){
            warning += 'Numeros <br>'
            entrar = true
        }

        console.log(special.test(pass.value))
        if(!special.test(pass.value)){
            warning += 'Caracteres especiales <br>'
            entrar = true
        }
    } 


    if(entrar){
        warn.innerHTML = warning
    }
    else{
        warning = 'Contraseña segura <br>'
        warn.innerHTML = warning
    }
})
