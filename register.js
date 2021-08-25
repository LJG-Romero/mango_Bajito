                        /* Remaining taks */

    // Falta desarrollo de chequeo de disponibilidad de nombre de usuario en tiempo real. ******** CHECK
    // Falta input de email.
    // Falta agregarle ID al constructor Register. ******** CHECK
    // Falta acomodar ID una vez que regrese a Register 
    // Falta desarrollar chequeo de campos obligatorios.
    // Falta desarrollar que la edad sea +18.
    // Falta desarrollo de personalización input de pass cuando no se cumple la condicion con CSS.
    // Falta desarrollo para chequear formato de tipos de caracteres para contraseña e email.
    // Falta desarrollo checkbox y algoritmo para personalizar mensaje de bienvenida por género.
    // Falta implementar asinc o similar para transción entre windows.
    // Falta implementar import y export para reutilizar atributos de los usuarios para las tarjetas de cardManager.
    // Falta imlementar funciones donde se repiten tareas y reutilizarlas con import y export.

    // Falta desarrollar css.
    // Falta implementar efectos btns.
    // Falta implementar los vector ilustrations.

class Register{
    constructor(nombre, apellido, fechaDeNacimiento, usuario, contraseña, id){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.id = counter++;
    }
        /* Class method example */
    // saludar(nombre){
    //     alert("Bienvenido " + this.nombre + " !");

    // }
} 

let passCheck = false;
let counter = 1;

/* Live validation of user name availability  */

let userValidation = document.getElementById("user");
userValidation.addEventListener("input", nameValidation);

function nameValidation(){

        /* Bloque a refactorizar con una función */
    /* Peticion de users DB */
    let usersContainerLocal = localStorage.getItem("arrayUsers");
    let usersContainer = JSON.parse(usersContainerLocal);
    
    let node = document.getElementById("errorMsg1");
    let element = document.createElement("p");

    if(usersContainerLocal = usersContainer != null){
        
        for (const users of usersContainer) {
            // console.log(userValidation.value); CHEQUEO funcionamiento ciclo
            // console.log(users.usuario);

            if(userValidation.value == users.usuario){
                //console.log("coinciden")
                node.innerHTML = "";
                element.innerHTML = `Ups ! ${userValidation.value} no está 
                                    disponible.`
                                    
                                    // Intenta otra vez, mango${userValidation.value} no suena 
                                    // tan mal no? ... Mi programador se cree con mucho 'humor' ${String.
                                    // fromCodePoint(0x1F612)}`
                node.appendChild(element);
                break;
            }
            else if (userValidation.value != users.usuario){
                //console.log("o entra por aca")
                node.innerHTML = "";
                element.innerHTML = `${userValidation.value} se oye bien. Sigamos !`
                node.appendChild(element);
                if(userValidation.value == ""){
                    node.innerHTML = "";
                }
            }
        }
    }
    else{
        node.innerHTML = "";        
        element.innerHTML = `${userValidation.value} se oye bien. Sigamos !`
        node.appendChild(element);
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

    if(password === passwordCheck && password != "" && passwordCheck != "" && user != ""){
        // (password = passwordCheck != "") && user != "" Esta versión mas corta no funcionó. Pass almacena true ! 
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
        
        usersContainer.push(new Register(name, lastname, bird, user, password));
        
        usersContainerLocal = JSON.stringify(usersContainer);
        localStorage.setItem("arrayUsers", usersContainerLocal);

            /* Msg welcom user */
        // let node1 = document.getElementById("registerContainer");
        // node1.innerHTML= `<h2 style="color:tomato; font-size: 50px; text-align:center;">
        
        //                    ${name} ${lastname}, bienvenido a la comunidad Mango Bajito !
        
        
        //                     </h2>`

        alert("Creación de usuario exitoso");
        alert("Inicia sesión nuevamente");

        e.preventDefault(); // Provisorio para poder realizar el redireccionamiento a sección SingIn

        window.location.href = "signIn.html";
    }
    else if (name == "" || lastname == "" || bird == "" || user == "" || password == "" || passwordCheck == "" ){
        document.getElementById("btnUser").setAttribute("disable", "true");
        //e.preventDefault();
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



                                /* Algoritmo IMPERATIVO inicial */

// nombre = prompt("Ingrese su Nombre: ");
// apellido = prompt("Ingrese su Apellido: ");
// fechaDeNacimiento = prompt("Ingrese su fecha de nacimiento en formato dd/mm/aaaa: ");
// usuario = prompt("Ingrese su Usuario: ");
// alert("Gracias por sus datos");

// do{
//     contraseña = prompt("Ingrese su Contraseña: ");
//     repetirContraseña = prompt("Repita la contraseña: ");
//     if(contraseña === repetirContraseña){
//         const Usuario = new Register (nombre, apellido, fechaDeNacimiento, usuario , contraseña);
//         alert("Creación de usuario exitoso");

//         contenedor = document.createElement("main");
//         contenedor.innerHTML = `<h1 style="color:tomato; font-size: 50px; text-align:center;"> 
//                                 Bienvenido ${Usuario.usuario} ! </h1>`;
//         document.body.appendChild(contenedor);


//         //Usuario.saludar();  
//         console.log(Usuario);
//     }
//     else{
//         alert("La verifiación de la contraseña no concuerda"); 
//     }    
// }
// while(contraseña != repetirContraseña);