/*** View - UI ***/  
let input = document.getElementsByName('bird')[0];
input.addEventListener("focus", changeType);
function changeType(){
    input.setAttribute("type","date");
}
input.addEventListener("focusout", restoreType);
function restoreType(){
    input.setAttribute("type","text");
}

/*** Model ***/  
class Register{
    constructor(nombre, apellido, fechaDeNacimiento, usuario, contraseña, id){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.id = id;
    }
} 

/*** Controller ***/  
let passCheck = false;

/* Live validation of user name availability  */

let userValidation = document.getElementById("user");
userValidation.addEventListener("input", nameValidation);

function nameValidation(){

        /* Bloque a refactorizar con una función */
    /* Peticion de users DB */
    let usersContainerLocal = localStorage.getItem("arrayUsers");
    let usersContainer = JSON.parse(usersContainerLocal);
    
    let node = document.getElementById("errorMsg1");
    // let element = document.createElement("p");

    if(usersContainerLocal = usersContainer != null){
        
        for (const users of usersContainer) {
            // console.log(userValidation.value); CHEQUEO funcionamiento ciclo
            // console.log(users.usuario);

            if(userValidation.value == users.usuario){
                //console.log("coinciden")
                node.innerHTML = "";
                node.innerHTML = `<p class="error">Ups ! ${userValidation.value} no está 
                                    disponible.</p>`
                                    
                document.getElementById("btnUser").setAttribute("disabled", true);
                break;
            }
            else if (userValidation.value != users.usuario){
                //console.log("o entra por aca")
                node.innerHTML = "";
                node.innerHTML = `<p class="success">${userValidation.value} se oye bien. Sigamos !</p>`
            
                document.getElementById("btnUser").removeAttribute("disabled");
                if(userValidation.value == ""){
                    node.innerHTML = "";
                }
            }
        }
    }
    else{
        node.innerHTML = "";        
        // element.innerHTML = `${userValidation.value} se oye bien. Sigamos !`
        node.innerHTML = `<p class="success">${userValidation.value} se oye bien. Sigamos !</p>`
        // node.appendChild(element);
        if(userValidation.value == ""){
            node.innerHTML = "";
        }
    }
}


/* User factory */

let userGenerator = document.getElementById("btnUser");
userGenerator.addEventListener("click", usersFactory);

function usersFactory(e){

    let name = document.getElementById("name").value,
        lastname = document.getElementById("lastname").value,
        bird = document.getElementById("bird").value,
        user = document.getElementById("user").value,
        password = document.getElementById("password").value,
        passwordCheck = document.getElementById("passwordCheck").value;

    if(password === passwordCheck && name != "" && lastname != "" && bird != "" && user != "" && password != "" && passwordCheck != ""){
        //console.log("Funciona checkeo campos");
        
            /* Bloque a refactorizar con una función */
        /* Reseteo users Msgs */
        let temp2 = document.getElementsByClassName("errorMsg2")
        for (const nodes of temp2){
            nodes.innerHTML = "";
        }
            /* Bloque a refactorizar con una función */
        /* Peticion de users DB */
        let usersContainerLocal = localStorage.getItem("arrayUsers");
        let usersContainer = JSON.parse(usersContainerLocal);

        
        if(usersContainerLocal == null && usersContainer == null){
            usersContainerLocal = "";
            usersContainer = [];
            // console.log(usersContainerLocal); // Chequeo el storage local y de origen.
            // console.log(usersContainer);
        }
        let idQuery = usersContainer.length;
        
        usersContainer.push(new Register(name, lastname, bird, user, password, idQuery));
        
        usersContainerLocal = JSON.stringify(usersContainer);
        localStorage.setItem("arrayUsers", usersContainerLocal);

            /* Msg welcom user */
        let node1 = document.getElementById("registerContainer");
        node1.innerHTML= `<h2>
        
                           ${name} ${lastname}, bienvenido a la comunidad <strong>Mango Bajito</strong> !
        
        
                            </h2>`
        // window.addEventListener("DOMContentLoaded", function await(){
        //     alert("Creación de usuario exitoso");
        //     alert("Inicia sesión nuevamente");
            
        // })

        e.preventDefault();

        setTimeout(function redirection(){
            alert("Creación de usuario exitoso");
            alert("Inicia sesión nuevamente");
            window.location.href = "signIn.html";
        },300);
    }
    else if (name == "" || lastname == "" || bird == "" || user == "" || password == "" || passwordCheck == "" ){
        let node3 = document.getElementsByTagName("input");
        console.log(node3);
        //console.log(node3[0].value)
        for (const items of node3) {
            // console.log(items.value);

            if(items.value == ""){
                //console.log(items.value);
                alert(`Complete el campo ${items.placeholder}`)
            }
        }
        e.preventDefault();
    }
    else{
        e.preventDefault();

        if(passCheck){
                /* Bloque a refactorizar con una función */
            /* Reseteo users Msgs */
            let temp = document.getElementsByClassName("errorMsg2")
            for (const nodes of temp){
                nodes.innerHTML = "";
            }
        }
        
        let node2 = document.getElementsByClassName("errorMsg2");
        //console.log(node2); CHEQUEO HTML Collection.

        for (const nodes of node2) {
            let element2 = document.createElement("p");
            element2.innerHTML = `Ups ! Esos mangos no coinciden, intentemos otra vez.`
            nodes.appendChild(element2);
            passCheck = true;
            
            //console.log(nodes); CHEQUEO elem. "array". 
        }
    }
}