/*** View - UI ***/
    /** Navbar user logged**/
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

    /** User menu animation **/
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

    /** Factories UI **/
        /** User type **/
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

        /** Alt driver "third party" section **/
// $('.radio').focusout(function restoreStatus(){
//     $('.thirdParty').hide();
// })

        /** Input date - text type **/
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

    /** Rendering "Cards" UI **/
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

    if(cardsContainer.length >= 2){
        console.log(cardsContainer.length)
        $('#cards__Basket').css({
            'justify-content':'flex-start'
        })
    }

    for (const cards of cardsContainer) {
        $('#cards__Basket').append(`
            <div class="cardsUser" style="display:none">
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
        $('.cardsUser').slideDown("slow");

        $('#cardSelector').append(`
            <option>${cards.nombre} ${cards.apellido} - xxxx ${cards.lastNumbers}</option>
        `)
    }
}
$('.cardsUser').on('click', function cardUserSelected(){
    $('.cardsUser').find('.remove').hide();
    $(this).find('.remove').show();
    let cardsSection = $('.cardsUser');
    for (const card of cardsSection ) {
        $('.cardsUser').removeAttr('style');
        $('.cardsUser').find('i').removeAttr('style').unbind('mouseenter mouseleave');
    }
    
    $(this).css({
        'background':'var(--linksNav)',
        'box-shadow':'0px 1px 5px var(--strongs)'
    });
    $(this).find('i').css({
        'color':'var(--cardsBackground)'
    }).hover(function(){
        $(this).css({
            'color':'var(--linksNavHover)'});
        }, function(){
            $(this).css({'color':'var(--cardsBackground'})
    });
})

    /** Rendering "Months" UI **/
let monthsContainerLocal = localStorage.getItem("arrayMonths");
let monthsContainer = JSON.parse(monthsContainerLocal);

if (monthsContainer.length <=4){
    $('.purchases__Basket').removeAttr('style');
}
else if(monthsContainer.length > 4){
    console.log('entro por aca')
    $('.months__Basket').css({
        'justify-content':'flex-start'
    })
}

if(monthsContainer == null ){
    monthsContainerLocal = "";
    monthsContainer = [];
    $('.months__Basket').append(`
            <p>Ups ! Ni un mango por aquí, ni un manguito por allá.</p>
    `)
}
else if (monthsContainer == ""){
    $('.months__Basket').append(`
        <p>Ups ! Ni un mango por aquí, ni un manguito por allá.</p>
    `)
}
else{
    for (const months of monthsContainer) {
        $('.months__Basket').append(`
            <div class=cardsMonth id=${months.mes} style="display:none">
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
        $('.cardsMonth').slideDown("slow");
    }
}
$('.cardsMonth').on('click', function monthSelected(){
    $('.cardsMonth').find('.remove').hide();
    $(this).find('.remove').show();
    let cardsSection = $('.cardsMonth');
    for (const card of cardsSection ) {
        $('.cardsMonth').removeAttr('style');
        $('.cardsMonth').find('i').removeAttr('style').unbind('mouseenter mouseleave');
    }
        
    $(this).css({
        'background':'var(--linksNav)',
        'box-shadow':'0px 1px 5px var(--strongs)'
    });
    $(this).find('i').css({
        'color':'var(--cardsBackground)'
    }).hover(function(){
        $(this).css({
            'color':'var(--linksNavHover)'});
        }, function(){
            $(this).css({'color':'var(--cardsBackground'})
    });

    /** Rendering "Purchases" UI **/
    cardSelection = $(this).attr('id');
    // console.log(cardSelection)
    let monthSelection = monthsContainer.find(month => month.mes == cardSelection);
    // console.log(monthSelection);
    const purchasesContainer = monthSelection.compras;
    // console.log(purchasesContainer)

    if (purchasesContainer.length <=4){
        $('.purchases__Basket').removeAttr('style');
    }
    else if (purchasesContainer.length >4){
        $('.purchases__Basket').css({
            'justify-content':'flex-start'
        })
    }
    
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
                <div class=cardsPurch style="display:none">
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
            $('.cardsPurch').slideDown('slow');
        }
    }
    $('.cardsPurch').on('click', function purchSelected(){
        $('.cardsPurch').find('.remove').hide();
        $(this).find('.remove').show();
        let purchSection = $('.cardsPurch');
        for (const card of purchSection ) {
            $('.cardsPurch').removeAttr('style');
            $('.cardsPurch').find('i').removeAttr('style').unbind('mouseenter mouseleave');
        }
            
        $(this).css({
            'background':'var(--linksNav)',
            'box-shadow':'0px 1px 5px var(--strongs)'
        });
        $(this).find('i').css({
            'color':'var(--cardsBackground)'
        }).hover(function(){
            $(this).css({
                'color':'var(--linksNavHover)'});
            }, function(){
                $(this).css({'color':'var(--cardsBackground'})
        });
    })

        /** Remove Cards Month **/
    $('.remove').unbind('click')
    $(this).find('.remove').on('click', function removeCardsMonth(){
        // $('.remove').on('click', function removeCardsMonth(){
        console.log(i)
        i++;
        console.log(cardSelection)
        $(this).parent().remove();

        console.log(monthsContainer)
        console.log(monthSelection)
        let monthSelectionIndex = monthsContainer.indexOf(monthSelection);

        console.log(monthSelectionIndex);

        let temp = monthsContainer.splice(monthSelectionIndex,1)
        console.log(monthsContainer)
        console.log(temp)

        monthsContainerLocal = JSON.stringify(monthsContainer);
        localStorage.setItem("arrayMonths", monthsContainerLocal);

        if (monthsContainer.length <=3){
            $('.months__Basket').removeAttr('style');
        }
        
        if (monthsContainer == ""){
            $('.months__Basket').append(`
                <p>Ups ! Ni un mango por aquí, ni un manguito por allá.</p>
            `)
        }

        $('.purchases__Basket').removeAttr('style');
        $('.purchases__Basket').html("").append(`
            <p>Selecciona un mes y cargá tus compras !</p>
        `)
        cardSelection = undefined;
    })
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
let i = 1;


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

    if(cardsContainer.length == 0){
        $('#cards__Basket').html("");
    }

    if(cardsContainer.length >= 2){
        $('#cards__Basket').css({
            'justify-content':'flex-start'
        })
    }

    cardsContainer.push(new Cards(name,lastname,lastNumbers));

    cardsContainerLocal = JSON.stringify(cardsContainer);
    localStorage.setItem("arrayCards", cardsContainerLocal);

    $('#cards__Basket').append(`
            <div class="cardsUser" style="display:none">
                <div class="cardsUser__Edges">
                    <h3>Visa</h3>
                    <div class="remove" >
                        <i class="fa fa-times-circle-o fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
                <p>${name} ${lastname}</p>
                <p>xxxx xxxx xxxx ${lastNumbers}</p>
                <div class="cardsUser__Edges">
                    <p>xx/xx</p>
                    <p>xxx</p>
                </div>
            </div>
        `)
    $('.cardsUser').slideDown("slow")

    setTimeout(function scrollCard (){
        $('#cards__Basket').scrollTop($('#cards__Basket').height())
    },620);

    // let temp = this.document.getElementsByClassName("cardsUser")
    // temp.scrollIntoView() **** Alt method - Js Vanilla - Only for Ids.

    $('#cardSelector').append(`
            <option>${name} ${lastname} - xxxx ${lastNumbers}</option>
    `)
    if (userType){
        $('.thirdParty').hide();
    }

    $('.cardsUser').on('click', function cardUserSelected(){
        $('.cardsUser').find('.remove').hide();
        $(this).find('.remove').show();
        let cardsSection = $('.cardsUser');
        for (const card of cardsSection ) {
            $('.cardsUser').removeAttr('style');
            $('.cardsUser').find('i').removeAttr('style').unbind('mouseenter mouseleave');
        }
        
        $(this).css({
            'background':'var(--linksNav)',
            'box-shadow':'0px 1px 5px var(--strongs)'
        });
        $(this).find('i').css({
            'color':'var(--cardsBackground)'
        }).hover(function(){
            $(this).css({
                'color':'var(--linksNavHover)'});
            }, function(){
                $(this).css({'color':'var(--cardsBackground'})
        });
    })
}

    /** Months Factory **/
$('#btnMonthsFac').on('click', function monthFactory(){
    
    let month = $('#month').val();
    let clousure = $('#clousure').val();
    let expiration = $('#expiration').val();
    const purchasesContainer = [];

    if(monthsContainer.length == 0){
        $('.months__Basket').html("");
        console.log('entro')
    }

    if(monthsContainer.length >= 4){
        console.log('entro por aca') 
        $('.months__Basket').css({
            'justify-content':'flex-start'
        })
    }

    monthsContainer.push(new Months(month, clousure, expiration, purchasesContainer));
    console.log(monthsContainer);

    monthsContainerLocal = JSON.stringify(monthsContainer);
    localStorage.setItem("arrayMonths", monthsContainerLocal);

    $('.months__Basket').append(`
            <div class=cardsMonth id=${month} style="display:none">
                <div class="cardsMonth__Container">
                    <p class="cardsP">Mes: ${month}</p>
                    <p class="cardsP">Cierre: ${clousure}</p>
                    <p class="cardsP">Vencimiento: ${expiration}</p>
                </div>
                <div class="remove" >
                    <i class="fa fa-times-circle-o fa-2x" aria-hidden="true"></i>
                </div>
            </div>
        `)
    $('.cardsMonth').slideDown('fast');

    setTimeout(function scrollCard (){
        $('.months__Basket').scrollTop($('.months__Basket').height())
    },620);

    $('.cardsMonth').find('.remove').hide();
    $('.cardsMonth').removeAttr('style');
    $('.cardsMonth').find('i').removeAttr('style').unbind('mouseenter mouseleave');

    $('.purchases__Basket').removeAttr('style');
    $('.purchases__Basket').html("").append(`
        <p>Selecciona un mes y cargá tus compras !</p>
    `)
    console.log(cardSelection);
    cardSelection = undefined;
    console.log(cardSelection);

        /** Months Selection **/
    $('.cardsMonth').on('click', function monthSelected(){
        $('.cardsMonth').find('.remove').hide();
        $(this).find('.remove').show();
        let cardsSection = $('.cardsMonth');
        for (const card of cardsSection ) {
            $('.cardsMonth').removeAttr('style');
            $('.cardsMonth').find('i').removeAttr('style').unbind('mouseenter mouseleave');
        }
        
        $(this).css({
            'background':'var(--linksNav)',
            'box-shadow':'0px 1px 5px var(--strongs)'
        });
        $(this).find('i').css({
            'color':'var(--cardsBackground)'
        }).hover(function(){
            $(this).css({
                'color':'var(--linksNavHover)'});
            }, function(){
                $(this).css({'color':'var(--cardsBackground'})
        });
        

        // console.log(cardSelection)
        cardSelection = $(this).attr('id');
        // console.log(cardSelection)
        let monthSelection = monthsContainer.find(month => month.mes == cardSelection);
        // console.log(monthSelection);
        const purchasesContainer = monthSelection.compras;
        // console.log(purchasesContainer)

        if (purchasesContainer.length <=4){
            $('.purchases__Basket').removeAttr('style');
        }
        else if (purchasesContainer.length >4){
            $('.purchases__Basket').css({
                'justify-content':'flex-start'
            })
        }
        
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
                    <div class=cardsPurch style="display:none">
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
                $('.cardsPurch').slideDown('slow');
            }
        }
        $('.cardsPurch').on('click', function purchSelected(){
            $('.cardsPurch').find('.remove').hide();
            $(this).find('.remove').show();
            let purchSection = $('.cardsPurch');
            for (const card of purchSection ) {
                $('.cardsPurch').removeAttr('style');
                $('.cardsPurch').find('i').removeAttr('style').unbind('mouseenter mouseleave');
            }
                
            $(this).css({
                'background':'var(--linksNav)',
                'box-shadow':'0px 1px 5px var(--strongs)'
            });
            $(this).find('i').css({
                'color':'var(--cardsBackground)'
            }).hover(function(){
                $(this).css({
                    'color':'var(--linksNavHover)'});
                }, function(){
                    $(this).css({'color':'var(--cardsBackground'})
            });
        })


        /** Remove Cards Month **/
        $('.remove').unbind('click')
        $(this).find('.remove').on('click', function removeCardsMonth(){
            // $('.remove').on('click', function removeCardsMonth(){
            console.log(i)
            i++;
            console.log(cardSelection)
            $(this).parent().remove();

            console.log(monthsContainer)
            console.log(monthSelection)
            let monthSelectionIndex = monthsContainer.indexOf(monthSelection);

            console.log(monthSelectionIndex);

            let temp = monthsContainer.splice(monthSelectionIndex,1)
            console.log(monthsContainer)
            console.log(temp)

            monthsContainerLocal = JSON.stringify(monthsContainer);
            localStorage.setItem("arrayMonths", monthsContainerLocal);

            if (monthsContainer.length <=3){
                $('.months__Basket').removeAttr('style');
            }

            if (monthsContainer == ""){
                $('.months__Basket').append(`
                    <p>Ups ! Ni un mango por aquí, ni un manguito por allá.</p>
                `)
            }
            
            $('.purchases__Basket').removeAttr('style');
            $('.purchases__Basket').html("").append(`
                <p>Selecciona un mes y cargá tus compras !</p>
            `)
            cardSelection = undefined;
        })
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

        if(purchasesContainer.length == 0){
            console.log('entro')
            $('.purchases__Basket').html("");
        }

        if(purchasesContainer.length >= 4){
            console.log('entro por aca tmb')
            $('.purchases__Basket').css({
                'justify-content':'flex-start'
            })
        }

        purchasesContainer.push(new Purchases(amount, payments, cardSelector));
        console.log(purchasesContainer);

        monthSelection.compras = purchasesContainer;
        monthsContainer[monthSelectionIndex] = monthSelection;
        console.log(monthsContainer);

        monthsContainerLocal = JSON.stringify(monthsContainer);
        localStorage.setItem("arrayMonths", monthsContainerLocal);

        $('.purchases__Basket').append(`
                <div class=cardsPurch style="display:none">
                    <div class="cardsPurch__Container">
                        <p class="cardsP">Monto: ${amount}</p>
                        <p class="cardsP">Cuotas: ${payments}</p>
                        <p class="cardsP">Tarjeta: ${cardSelector}</p>
                    </div>
                    <div class="remove" >
                        <i class="fa fa-times-circle-o fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
            `)
        $('.cardsPurch').slideDown('slow');

        setTimeout(function scrollCard (){
            $('.purchases__Basket').scrollTop($('.purchases__Basket').height())
        },620);

        $('.cardsPurch').on('click', function purchSelected(){
            $('.cardsPurch').find('.remove').hide();
            $(this).find('.remove').show();
            let purchSection = $('.cardsPurch');
            for (const card of purchSection ) {
                $('.cardsPurch').removeAttr('style');
                $('.cardsPurch').find('i').removeAttr('style').unbind('mouseenter mouseleave');
            }
                
            $(this).css({
                'background':'var(--linksNav)',
                'box-shadow':'0px 1px 5px var(--strongs)'
            });
            $(this).find('i').css({
                'color':'var(--cardsBackground)'
            }).hover(function(){
                $(this).css({
                    'color':'var(--linksNavHover)'});
                }, function(){
                    $(this).css({'color':'var(--cardsBackground'})
            });
        })
    } 
})