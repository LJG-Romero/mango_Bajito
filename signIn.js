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
                // let name = users.nombre;
                // let surname = users.apellido;
                let userState = true;
                sessionStorage.setItem("userCondition", userState);
                let userIdLog = users.id;
                sessionStorage.setItem("userId", userIdLog);
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
                $('#errorMsg').html(` <p class="error"> Ups ! El usuario y/o la constraseña no coinciden.</p>`)
                if (user == users.usuario && password != users.contraseña ){
                    counterCheck ++;
                    console.log(counterCheck);
                }
                if (counterCheck == 3) {
                    $('#user').attr("disabled","true");
                    $('#password').attr("disabled","true");
                    $('#passwordRescue').html("");
                    $('#passwordRescue').append(` <h3> Excediste el límite de intentos permitidos. </h3>
                                                    <p> ¿Probamos de otra menera? <a href="recoveryPass.html"> <strong>Recuperar contraseña</strong> </a></p>
                                                    
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