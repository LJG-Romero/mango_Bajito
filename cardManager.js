/*** View - UI ***/
    /** Navbar User Logged**/
let userState = sessionStorage.getItem("userCondition");
let userIdLog = sessionStorage.getItem("userId");

        /* Bloque a refactorizar con una función */
        /* Petición de users DB */
let usersContainerLocal = localStorage.getItem("arrayUsers");
let usersContainer = JSON.parse(usersContainerLocal);

if (userState) {
    let nameUserLog = usersContainer[userIdLog].nombre;

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
    $('.userProfile').append(`Hola ${nameUserLog} !`);
}

    /** User Menu Animation **/
$('.iconBox').on('click',function iconAnimate(){
    $('.iconBox i').toggleClass('fa-user-circle-o fa-times').css({
        'transform':'rotate(360deg)',
        'transition':'2s'
    });
    $('.userProfile').toggle(700);
    $('.userMenu').toggle(700);
    setTimeout(function delay(){
        $('.iconBox i').removeAttr('style');
    },2000);
});

    /** Sign out **/
$('.signOut').on('click',function userLogout(){
    sessionStorage.removeItem("userCondition");
    sessionStorage.removeItem("userId");
})

    /** Months options from JSON **/
const urlJson = "data.json";
$.ajax({
    method: "GET",
    url: urlJson,
    success: function dataCollected(answer){
        //console.log(answer);
        $('#month').append(`<option selected disabled>Seleccione mes de compra</option>`);
        for (const months of answer) {
            $("#month").append( `
                                <option value="${months.value}">${months.month}</option>
                                `) 
        }
    }
})

    /** Cards Factory UI **/
$('.radio').on('click', function radioChecked(){
    let userType = $("input[name='cardType']:checked").val();
    console.log(userType);
    if (userType == "true"){
        $('.thirdParty').show();
    }
    else{
        $('.thirdParty').hide();
    }
})

// $('.radio').focusout(function restoreStatus(){
//     $('.thirdParty').hide();
// })

let cardsContainerLocal = localStorage.getItem("arrayCards");
let cardsContainer = JSON.parse(cardsContainerLocal);

if (cardsContainer == null){
    cardsContainerLocal = "";
    cardsContainer = [];
    $('#cards__Basket').append(`
            <p>No hay tarjetas registradas. Carga una tarjeta ! </p>
    `)
    $('#cardSelector').append(`
            <option selected disabled>Seleccione su tarjeta</option>
    `)
}
else {
    $('#cardSelector').append(`
            <option selected disabled>Seleccione su tarjeta</option>
    `)
    for (const cards of cardsContainer) {
        $('#cards__Basket').append(`
            <div class="cardsUser">
                <div class="cardsUser__Edges">
                    <h3>Visa</h3>
                    <div class="remove" >
                        <i class="fa fa-times-circle-o fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
                <p>${cards.nombre} ${cards.apellido}</p>
                <p>xxxx xxxx xxxx ${cards.lastNumbers}</p>
                <div class="cardsUser__Edges">
                    <p>xx/xx</p>
                    <p>xxx</p>
                </div>
            </div>
        `)
        $('#cardSelector').append(`
            <option>${cards.nombre} ${cards.apellido} - xxxx ${cards.lastNumbers}</option>
    `)
    }
}

    /** Months Factory UI **/
$("input[name='expiration']").focus(function changeType(){
    $("input[name='expiration']").attr('type','date');
})
$("input[name='expiration']").focusout(function restoreType(){
    $("input[name='expiration']").attr('type','text');
})
$("input[name='clousure']").focus(function changeType(){
    $("input[name='clousure']").attr('type','date');
})
$("input[name='clousure']").focusout(function restoreType(){
    $("input[name='clousure']").attr('type','text');
})

let monthsContainerLocal = localStorage.getItem("arrayMonths");
let monthsContainer = JSON.parse(monthsContainerLocal);

if(monthsContainer == null){
    monthsContainerLocal = "";
    monthsContainer = [];
    $('.months__Basket').append(`
            <p>Ups ! Ni un mango por aquí, ni un manguito por allá.</p>
    `)
}
else{
    for (const months of monthsContainer) {
        $('.months__Basket').append(`
            <div class=cardsMonth id=${months.mes}>
                <div class="cardsMonth__Container">
                    <p class="cardsP">Mes: ${months.mes}</p>
                    <p class="cardsP">Cierre: ${months.fechaCierre}</p>
                    <p class="cardsP">Vencimiento: ${months.fechaVencimiento}</p>
                </div>
                <div class="remove" >
                    <i class="fa fa-times-circle-o fa-2x" aria-hidden="true"></i>
                </div>
            </div>
        `)
    }
}

    /** Purchases Factory UI **/
$('.cardsMonth').on('click', function monthSelected(){
    let cardsSection = $('.cardsMonth');
        for (const card of cardsSection ) {
            $('.cardsMonth').removeAttr('style');
            $('.cardsMonth').find('i').removeAttr('style');
        }
    
    $(this).css({
        'background':'var(--linksNav)',
        'box-shadow':'0px 1px 5px var(--strongs)'
    });
    $(this).find('i').css({
        'color':'var(--linksNavHover)'
    })

    
    cardSelection = $(this).attr('id');
    // console.log(cardSelection)
    let monthSelection = monthsContainer.find(month => month.mes == cardSelection);
    // console.log(monthSelection);
    const purchasesContainer = monthSelection.compras;
    // console.log(purchasesContainer)
    
    if (purchasesContainer == ""){
        $('.purchases__Basket').html("");
        $('.purchases__Basket').append(`
            <p>No tienes movimientos registrados. Realiza una compra !</p>
        `)
    }
    else{
        $('.purchases__Basket').html("");
        for (const purch of purchasesContainer) {
            $('.purchases__Basket').append(`
                <div class=cardsPurch>
                    <div class="cardsPurch__Container">
                        <p class="cardsP">Monto: ${purch.monto}</p>
                        <p class="cardsP">Cuotas: ${purch.cuotas}</p>
                        <p class="cardsP">Tarjeta: ${purch.tarjetas}</p>
                    </div>
                    <div class="remove" >
                        <i class="fa fa-times-circle-o fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
            `)
        }
    }
})



/*** Model ***/
class Cards{
    constructor(nombre, apellido, lastNumbers, cardExp){
        this.nombre = nombre;
        this.apellido = apellido;
        this.lastNumbers = lastNumbers;
        this.cardExp = cardExp;
    }
}
class Months{
    constructor(mes, fechaCierre, fechaVencimiento, compras){
        this.mes = mes;
        this.fechaCierre = fechaCierre;
        this.fechaVencimiento = fechaVencimiento;
        this.compras = compras;
    }
}
class Purchases{
    constructor(monto, cuotas, tarjetas){
        this.monto = monto;
        this.cuotas = cuotas;
        this.tarjetas = tarjetas;
    }
}



/*** Controller ***/
let cardSelection;

    /** Cards Factory **/
let card = document.getElementById("btnCardsFac");
card.addEventListener ("click", cardsFactory);
function cardsFactory() {

    let userType = $("input[name='cardType']:checked").val();
    let name = "";
    let lastname = "";
    if(userType == "false"){
        name = usersContainer[userIdLog].nombre;
        lastname = usersContainer[userIdLog].apellido;
    }
    else{
        name = document.getElementById("name").value;
        lastname = document.getElementById("lastname").value;
    }
    let lastNumbers = document.getElementById("lastNumbers").value;

    cardsContainer.push(new Cards(name,lastname,lastNumbers));

    cardsContainerLocal = JSON.stringify(cardsContainer);
    localStorage.setItem("arrayCards", cardsContainerLocal);

    $('#cards__Basket').html("");
    for (const cards of cardsContainer) {
        $('#cards__Basket').append(`
            <div class="cardsUser">
                <div class="cardsUser__Edges">
                    <h3>Visa</h3>
                    <div class="remove" >
                        <i class="fa fa-times-circle-o fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
                <p>${cards.nombre} ${cards.apellido}</p>
                <p>xxxx xxxx xxxx ${cards.lastNumbers}</p>
                <div class="cardsUser__Edges">
                    <p>xx/xx</p>
                    <p>xxx</p>
                </div>
            </div>
        `)
    }

    $('#cardSelector').html("");
    $('#cardSelector').append(`
            <option selected disabled>Seleccione su tarjeta</option>
    `)
    for (const cards of cardsContainer) {
        $('#cardSelector').append(`
            <option>${cards.nombre} ${cards.apellido} - xxxx ${cards.lastNumbers}</option>
    `)
    }
    if (userType){
        $('.thirdParty').hide();
    }
}

    /** Months Factory **/
$('#btnMonthsFac').on('click', function monthFactory(){
    
    let month = $('#month').val();
    let clousure = $('#clousure').val();
    let expiration = $('#expiration').val();
    const purchasesContainer = [];

    monthsContainer.push(new Months(month, clousure, expiration, purchasesContainer));
    console.log(monthsContainer);

    monthsContainerLocal = JSON.stringify(monthsContainer);
    localStorage.setItem("arrayMonths", monthsContainerLocal);

    $('.months__Basket').html("");
    for (const months of monthsContainer) {
        $('.months__Basket').append(`
            <div class=cardsMonth id=${months.mes}>
                <div class="cardsMonth__Container">
                    <p class="cardsP">Mes: ${months.mes}</p>
                    <p class="cardsP">Cierre: ${months.fechaCierre}</p>
                    <p class="cardsP">Vencimiento: ${months.fechaVencimiento}</p>
                </div>
                <div class="remove" >
                    <i class="fa fa-times-circle-o fa-2x" aria-hidden="true"></i>
                </div>
            </div>
        `)
    }  

    $('.purchases__Basket').html("").append(`
        <p>Selecciona un mes y cargá tus compras !</p>
    `)
    
    $('.cardsMonth').on('click', function monthSelected(){
        let cardsSection = $('.cardsMonth');
        for (const card of cardsSection ) {
            $('.cardsMonth').removeAttr('style');
            $('.cardsMonth').find('i').removeAttr('style');
        }
        
        $(this).css({
            'background':'var(--linksNav)',
            'box-shadow':'0px 1px 5px var(--strongs)'
        });
        $(this).find('i').css({
            'color':'var(--linksNavHover)'
        })
        // $(this).find('i').hover(function(){
        //     $(this).css({
        //         'color':'var(--cardsBackground)'});
        //     }, function(){
        //         $(this).css({'color':'var(--linksNavHover'})
        // });


        // console.log(cardSelection)
        cardSelection = $(this).attr('id');
        // console.log(cardSelection)
        let monthSelection = monthsContainer.find(month => month.mes == cardSelection);
        // console.log(monthSelection);
        const purchasesContainer = monthSelection.compras;
        // console.log(purchasesContainer)
        
        if (purchasesContainer == ""){
            $('.purchases__Basket').html("");
            $('.purchases__Basket').append(`
                <p>No tienes movimientos registrados. Realiza una compra !</p>
            `)
        }
        else{
            $('.purchases__Basket').html("");
            for (const purch of purchasesContainer) {
                $('.purchases__Basket').append(`
                    <div class=cardsPurch>
                        <div class="cardsPurch__Container">
                            <p class="cardsP">Monto: ${purch.monto}</p>
                            <p class="cardsP">Cuotas: ${purch.cuotas}</p>
                            <p class="cardsP">Tarjeta: ${purch.tarjetas}</p>
                        </div>
                        <div class="remove" >
                            <i class="fa fa-times-circle-o fa-2x" aria-hidden="true"></i>
                        </div>
                    </div>
                `)
            }
        }
    })
})

    /** Purchases Factory **/
$('#btnPurchsFac').on('click', function purchFactory(){
    if(cardSelection == undefined){
        alert('Ups, no tan rápido. Primero seleccioná un mes !');
    }
    else{
        let monthSelection = monthsContainer.find(month => month.mes == cardSelection);
        let monthSelectionIndex = monthsContainer.indexOf(monthSelection);
        console.log(monthsContainer);
        console.log(monthSelection);
        console.log(monthSelectionIndex);

        const purchasesContainer = monthSelection.compras;
        console.log(purchasesContainer)

        let amount = $('#amount').val();
        let payments = $('#payments').val();
        let cardSelector = $('#cardSelector').val();

        purchasesContainer.push(new Purchases(amount, payments, cardSelector));
        console.log(purchasesContainer);

        monthSelection.compras = purchasesContainer;
        monthsContainer[monthSelectionIndex] = monthSelection;
        console.log(monthsContainer);

        monthsContainerLocal = JSON.stringify(monthsContainer);
        localStorage.setItem("arrayMonths", monthsContainerLocal);

        $('.purchases__Basket').html("");
        for (const purch of purchasesContainer) {
            $('.purchases__Basket').append(`
                <div class=cardsPurch>
                    <div class="cardsPurch__Container">
                        <p class="cardsP">Monto: ${purch.monto}</p>
                        <p class="cardsP">Cuotas: ${purch.cuotas}</p>
                        <p class="cardsP">Tarjeta: ${purch.tarjetas}</p>
                    </div>
                    <div class="remove" >
                        <i class="fa fa-times-circle-o fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
            `)
        }
    } 
})



