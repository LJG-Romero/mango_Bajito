    /* Bloque a refactorizar con una función */
/* Petición de users DB */
let usersContainerLocal = localStorage.getItem("arrayUsers");
let usersContainer = JSON.parse(usersContainerLocal);

$('#btnUser').on('click', function userLogin(){
    let user = $('#user').val();
    let password = $('#password').val();

    if (user != "" && password != "") {
        for (const users of usersContainer) {
            if (user == users.usuario && password == users.contraseña) {
                userState = true;
                sessionStorage.setItem("userCondition", userState);
                //alert(`Que bueno verte otra vez ${users.nombre} !`);
                $('#loginContainer').html("");
                $('#loginContainer').append(`<h2> Bienvenido ${users.nombre} ! </h2> `)
                console.log("usuario logeado");

            }

            // Desarrollar el else y validación de intentos máximos permitidos.

        }
    }
    else{
        let areas = $('input');
        //console.log(areas);
        for (const items of areas) {
            //console.log(items);
            if (items.value == "") {
                alert(`Complete el campo ${items.placeholder}`)
            }
        }
    }
})


        /* Traditional way - Js Vanilla */

// let btnTest = document.getElementById("btnUser");
// btnTest.addEventListener("click", testFun);

// function testFun (){
//     let user = document.getElementById("user").value;
//     let password = document.getElementById("password").value;

//     console.log(user + ' ' + password);

// }


        /* Level up - Jquery implementation */

// // let varTest = $('#btnUser');
// // varTest.on("click", function testFun(){

// $("#btnUser").on("click", function testFun(){

//     let password = $('#password').val();
//     console.log($('#user').val())
//     console.log(password);
// });






        /* Borrador */
        
// let counterCheck = 0;

// if(password == user != ""){
//     for (const users of usersContainer){
//         if(user == users.usuario && password == users.usuario){
//             alert("Creación de usuario exitoso");

//         }
//     }
// }
// else{
//     //let node = getElementById("errorMsg1");
//     //let element = document.createElement("p");
//     counterCheck ++;
//     // let node2 = document.getElementsByClassName("errorMsg2");

//     for (const nodes of node2) {
//         let element2 = document.createElement("p");
//         element2.innerHTML = `Ups ! El usuario y/o la contraseña no coinciden.`
//         $("#errorMsg2").append(element2);
            
//     }
//     if(counterCheck == 3){
//         document.getElementById("password").setAttribute("disable", "true");
//         // document.getElementById("passwordCheck").setAttribute("disable", "true");
//         alert("Excedió el número máximo de intentos permitidos");
//         // let node3 = document.getElementById("passwordRescue");
//         $("#passwordRescue").append = `
//                                         <p>Lo sentimos, intentamos de otra manera?</p>
                            
//                                         <button type="button" id="btnPassResc" style="text-decoration: none; border: 1px solid tomato; border-radius: 10px; padding: 20px; margin: 5px 0px; background-color: lightsalmon; color: tomato; font-family: sans-serif;">Recuperar contraseña</button>
              
//                                      `
//     }
// }









                                /* Algoritmo IMPERATIVO inicial */

// const contraseñasIngresadas = [];
// let cantidad = 3;

// class Register{
//     constructor(nombre, apellido, usuario, nacimiento, contraseña){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.usuario = usuario;
//         this.nacimiento = nacimiento;
//         this.contraseña = contraseña;
//     }
// }
// const usuariosRegistrados = [];

// usuariosRegistrados.push(new Register("nombre1","apellido1","usuario1","xx/xx/xxxx","contraseña1"));
// usuariosRegistrados.push(new Register("nombre2","apellido2","usuario2","11/11/1111","contraseña2"));
// usuariosRegistrados.push(new Register("Lucas","Romero","LJG_Romero","01/03/1990","acft"));
// usuariosRegistrados.push(new Register("nombre4","apellido4","usuario4","22/22/2222","contraseña4"));



// let clave = "";
// let usuario = "";
// let contador = 0;
// let comprobacion = false;
// let contenedor = "";

// do{
//     usuario = prompt("Ingrese su Usuario: ");
//     clave = prompt("Ingrese su Clave: ");
//     contador ++;
//     contraseñasIngresadas.push(clave);


    
//     for(const Register of usuariosRegistrados){

//     //for(let i = 0; i < 4; i++){  ** Otra de las maneras de recorrer el array. En caso de tener 2 o más arrays podría generar conflico? OJO - Consultar en clase **
//     // console.log (Register.usuario);
//     // console.log (Register.contraseña);

//         if((usuario == Register.usuario) && (clave == Register.contraseña)){

//         //if(usuariosRegistrados[i] == clave){ ** Verificar si de esta manera tambien puedo ingresar a los parametros individuales de los objetos en el array. ** 

//             comprobacion = true;
//             //alert(`Bienvenido otra vez ${usuario} !`);

//             contenedor = document.createElement("main");
//             contenedor.innerHTML = `<h1 style="color:tomato; font-size: 50px; text-align:center;"> Bienvenido otra vez ${Register.usuario} ! </h1>`;
//             document.body.appendChild(contenedor);

//             console.log(contraseñasIngresadas.length);

//             //break; ** Break en esta linea cortaría el ciclo del for. Lo que lleva a que si tuviera más de un objeto con algun parámetro similar, este no lo tomaria.
//             //          por lo tanto el break debe estar en el ciclo que verdaderamente quiero cortar. **
//         }
//     }
//     if(comprobacion != true){
//         alert("La clave ingresada es incorrecta.");
//         console.log(contraseñasIngresadas.length);
//         if(contador == cantidad){
//             alert("Excedió la cantidad máxima permitida de intentos.");
//             alert("Intente nuevamente más tarde. \n Gracias por 'manejar el mango' con nosotros. Hasta la próxma !");

//         }
//     }
//     else{
//         break;
//     }
// }
// while(contraseñasIngresadas.length != cantidad);