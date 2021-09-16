let userState = sessionStorage.getItem("userCondition");
let userIdLog = sessionStorage.getItem("userId");

    /* Bloque a refactorizar con una función */
/* Petición de users DB */
let usersContainerLocal = localStorage.getItem("arrayUsers");
let usersContainer = JSON.parse(usersContainerLocal);



if (userState) {
    let nameUserLog = usersContainer[userIdLog].nombre;
    let surnameUserLog = usersContainer[userIdLog].apellido;

    console.log(nameUserLog);
    console.log(surnameUserLog);
    console.log(userState);
    console.log(userIdLog);

    $('.header__Nav--Login').css('display','none');
    if ($(window).width() > 768){
        console.log($(window).width())
        $('.cardStatus').css('display','inline-flex');
    }
    else if ($(window).width() <= 768){
        console.log($(window).width());
        $('.cardStatusMobile').css('display','inline-flex');
    }
    $('.header__Nav--User').css({'display':'flex',
                                'flex-direction':'column',
                                'justify-content':'center',
                                'align-items': 'center'
                                });
    $('.userProfile').append(`${nameUserLog} ${surnameUserLog}`);
}
