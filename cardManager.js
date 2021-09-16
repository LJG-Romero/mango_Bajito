let userState = sessionStorage.getItem("userCondition");
let userIdLog = sessionStorage.getItem("userId");

    /* Bloque a refactorizar con una función */
/* Petición de users DB */
let usersContainerLocal = localStorage.getItem("arrayUsers");
let usersContainer = JSON.parse(usersContainerLocal);


if (userState) {
    let nameUserLog = usersContainer[userIdLog].nombre;
    let surnameUserLog = usersContainer[userIdLog].apellido;

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

const urlJson = "data.json";

$.ajax({
    method: "GET",
    url: urlJson,
    success: function dataCollected(answer){
        //console.log(answer);
        for (const months of answer) {
            $("#month").append( `
                                <option value="${months.value}">${months.month}</option>
                                `) 
        }
    }
})

class Cards{
    constructor(nombre, apellido, lastNumbers, cardExp){
        this.nombre = nombre;
        this.apellido = apellido;
        this.lastNumbers = lastNumbers;
        this.cardExp = cardExp;
    }
}
const cardsContainer = [];

let card = document.getElementById("btn");
card.addEventListener ("click", cardsFactory);
function cardsFactory() {
    
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let lastNumbers = document.getElementById("lastNumbers").value;

    cardsContainer.push(new Cards(name,lastname,lastNumbers));

    //console.log(cardsContainer) //Chequeo array

    document.getElementById("cards__Basket").innerHTML = "";
    for (const cards of cardsContainer) {

        let nodo = document.getElementById("cards__Basket");
        let elemento = document.createElement("div");
    
        elemento.style.height = "200px";
        elemento.style.width = "350px";
        elemento.style.backgroundColor = "lightsalmon";
        elemento.style.boxShadow = "0px 1px 5px tomato";
        elemento.style.borderRadius = "10px";

        elemento.innerHTML = `  <h3>Visa</h3>
                                <p style="color:tomato">${cards.nombre} ${cards.apellido}</p>
                                <p style="color:tomato">xxxx xxxx xxxx ${cards.lastNumbers}</p>
                                <div style=" display: flex; flex-direction: row; justify-content: space-evenly;">
                                <p style="color:tomato">xx/xx</p>
                                <p style="color:tomato">xxx</p>
                                </div>

                            `;
        nodo.appendChild(elemento);  
    }

    //elemento.setAttribute("style","height: 200px;");
    //elemento.setAttribute("style","width: 350px;");
    //elemento.setAttribute("style","background-color: lightsalmon;");
    //elemento.setAttribute("style","box-shadow: 0px 1px 5px tomato;");
    //elemento.setAttribute("style","border-radius: 10px;");

        //** setAttribute solo inserta un atributo y/o modifica existene.

    document.getElementById("cardSelector").innerHTML = "";
    for (const cards of cardsContainer) {

        let nodo2 = document.getElementById("cardSelector");
        let elemento2 = document.createElement("option");
        elemento2.innerHTML = `
                            ${cards.nombre} ${cards.apellido} - xxxx ${cards.lastNumbers}
                             `
        nodo2.appendChild(elemento2);
    }
}



                        /* Algoritmo IMPERATIVO inicial */
// let mes = "";
// let salida = "";
// let region = "";
// let fechaCierre = "";
// let fechaVencimiento = "";

// let comprasMes = 0;
// let nCuotas = 0;
// let valorCompra = 0;
// let montoImp = 0;
// let valorCuota = 0;
// let valorResumen = 0;


// let acumuladoImp = 0;
// let acumuladoCompras = 0;
// let acumuladoCuotas = 0;

// let contadorComprCuotif = 0;

// const cuota = (valorCompra, nCuotas) => {return valorCompra / nCuotas};
// const impSellos = (valorCompra) => {return valorCompra * 0.015};
// const sumatoriaTotal = (acumuladoCuotas, acumuladoImp) => {return acumuladoCuotas + acumuladoImp};


// alert("Bienvenido a la web app para gestionar sus compras del mes con su tarjeta de crédito.");
// alert("Le recomendamos que tenga a mano su resumen anterior.");
// salida = prompt("Desea continuar y/n ?");
// while (salida != "n" && salida != "N"){

//     region = prompt("Su lugar de residencia es la Ciudad Autónoma de Buenos Aires (CABA) o Córdoba? y/n");
//     mes = prompt("Porfavor, ingrese el mes en curso.");
//     fechaCierre = prompt("Porfavor, ingrese la fecha de cierre de resumen en formato dd/mm/aaaa.");
//     fechaVencimiento = prompt("Porfavor, ingrese la fecha de vencimiento en formato dd/mm/aaaa.");
//     comprasMes = parseInt(prompt("Porfavor, ahora ingrese la cantidad de compras del mes que realizó con su tarjeta de crédito."));
//     alert("Gracias por sus datos");


//     for (let i = 1; i <= comprasMes; i++) {
//         valorCompra = parseInt(prompt("Ingrese el valor de la compra nº" + i + ": "));
//         nCuotas = parseInt(prompt("Ingrese la cantidad de cuotas de 1 a 36"));             
//         if (nCuotas > 0 && nCuotas < 36){
//             valorCuota = cuota (valorCompra,nCuotas);
//             acumuladoCuotas = acumuladoCuotas + valorCuota;
//             acumuladoCompras = acumuladoCompras + valorCompra;
//             contadorComprCuotif ++;
//             if (region == "y" || region =="Y"){
//                 montoImp = impSellos (valorCuota);
//                 acumuladoImp = acumuladoImp + montoImp;
//             }  
//         }
//         else {
//             alert("Ingresó un valor de cuota no válido");
//             break;
//         }  
//     }
//     valorResumen = sumatoriaTotal (acumuladoCuotas,acumuladoImp);
//     console.log("Mes en curso: " + mes + "\n Próxima fecha de cierre: " + fechaCierre + "\n Próximo vencimiento: " + fechaVencimiento + "\n Sub total del mes: " + acumuladoCuotas + "\n Sub total imp: " + acumuladoImp + "\n Monto total financiado: " + acumuladoCompras + "\n Cantidad compras coutificadas: " + contadorComprCuotif + "\n Monto total del resumen: " + valorResumen);



//     salida = prompt("Desea continuar y/n ?");
//     acumuladoImp = 0;
//     acumuladoCompras = 0;
//     acumuladoCuotas = 0;
//     contadorComprCuotif = 0;
// }
// console.log("Gracias por utilizar nuestra app. Hasta la próxima");



