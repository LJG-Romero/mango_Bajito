class Register{
    constructor(nombre, apellido, fechaDeNacimiento, usuario, contraseña){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.usuario = usuario;
        this.contraseña = contraseña;
    }
    // saludar(nombre){
    //     alert("Bienvenido " + this.nombre + " !");

    // }
} 

let passCheck = false;

let userGenerator = document.getElementById("btnUser");
userGenerator.addEventListener("click", usersFactory);

function usersFactory(){
    

    let name = document.getElementById("name").value,
        lastname = document.getElementById("lastname").value,
        bird = document.getElementById("bird").value,
        user = document.getElementById("user").value,
        password = document.getElementById("password").value,
        passwordCheck = document.getElementById("passwordCheck").value;


    // Falta desarrollo de chequeo de disponibilidad de nombre de usuario en tiempo real.

        //let node = getElementById("errorMsg1");
        //let element = document.createElement("p");

    // Falta input de email.
    // Falta desarrollo de personalización input de pass cuando no se cumple la condicion.
    // Falta desarrollo para chequear formato de contraseña e email.
    // Falta desarrollo checkbox y algoritmo para personalizar mensaje de bienvenida por género.
    // Falta implementar asinc o similar para trasnción entre windows.
    // Falta implementar import y export para reutilizar atributos de los usuarios para las tarjetas de cardManager.

    // Falta desarrollar css.
    // Falta implementar los vector ilustrations.



    if(password === passwordCheck){
        //console.log("Funciona checkeo contras");

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
        let node1 = document.getElementById("registerContainer");
        node1.innerHTML= `<h2 style="color:tomato; font-size: 50px; text-align:center;">
        
        ${name} ${lastname}, bienvenido a la comunidad Mango Bajito !
        
        
        </h2>`
        alert("Creación de usuario exitoso");
        alert("Inicia sesión nuevamente");
        window.location.href = "signIn.html";

        // document.getElementById("registerContainer").innerHTML = `<h2 style="color:tomato; font-size: 50px; text-align:center;">
                            
        //                     ${name} ${lastname}, bienvenido a la comunidad Mango Bajito !
        
        
        //                   </h2>`

    }
    else{
        if(passCheck){
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