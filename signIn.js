let counterCheck = 0;
$('#btnUser').on('click', function userLogin(){

         /* Bloque a refactorizar con una función */
    /* Petición de users DB */
    let usersContainerLocal = localStorage.getItem("arrayUsers");
    let usersContainer = JSON.parse(usersContainerLocal);

    let user = $('#user').val();
    let password = $('#password').val();

    //let i = 0;

    if (user != "" && password != "") {
        for (const users of usersContainer) {
            // i++;
            // console.log(i); /* Chequeo lógica */
            if (user == users.usuario && password == users.contraseña) {
                userState = true;
                sessionStorage.setItem("userCondition", userState);
                //alert(`Que bueno verte otra vez ${users.nombre} !`);
                $('#loginContainer').html("");
                $('#loginContainer').append(`<h2 class="welcomTxt" style="display:none;"> Bienvenido ${users.nombre} ! </h2> `);

                        /* Animaciones por CallBack */
                // $(".welcomTxt").slideDown("slow", function animate(){ 
                //     $(".welcomTxt").slideUp(3000);
                // });

                        /* Animaciones por Concatenación */
                $(".welcomTxt").slideDown("slow").delay(1000).slideUp(3000);
                
                setTimeout(function redirection(){
                    $(location).attr("href","cardManager.html");
                },4500);

                console.log("usuario logeado");
                break;

            }
            else { //if (user != users.usuario || password != users.contraseña){
                $('#errorMsg').html("");
                $('#errorMsg').html(` <p> Ups ! El usuario y/o la constraseña no coinciden. </p>`)
                if (user == users.usuario && password != users.contraseña ){
                    counterCheck ++;
                    console.log(counterCheck);
                }
                if (counterCheck == 3) {
                    $('#user').attr("disabled","true");
                    $('#password').attr("disabled","true");
                    $('#passwordRescue').html("");
                    $('#passwordRescue').append(` <h3> Excediste el límite de intentos permitidos. </h3>
                                                    <p> Probamos de otra menera? </p>
                                                    <a href="#"> Recuperar contraseña </a>
                                                 `)
                    break;
                }     
            }
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