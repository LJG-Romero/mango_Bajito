let mes = "";
let salida = "";
let region = "";
let fechaCierre = "";
let fechaVencimiento = "";

let comprasMes = 0;
let nCuotas = 0;
let valorCompra = 0;
let montoImp = 0;
let valorCuota = 0;
let valorResumen = 0;


let acumuladoImp = 0;
let acumuladoCompras = 0;
let acumuladoCuotas = 0;

let contadorComprCuotif = 0;

let contenedor = "";

class Register{
    constructor(nombre, apellido, usuario, nacimiento, contraseña){
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.nacimiento = nacimiento;
        this.contraseña = contraseña;
    }
}
const usuariosRegistrados = [];

usuariosRegistrados.push(new Register("nombre1","apellido1","usuario1","xx/xx/xxxx","contraseña1"));
usuariosRegistrados.push(new Register("nombre2","apellido2","usuario2","11/11/1111","contraseña2"));
usuariosRegistrados.push(new Register("Lucas","Romero","LJG_Romero","01/03/1990","acft"));
usuariosRegistrados.push(new Register("nombre4","apellido4","usuario4","22/22/2222","contraseña4"));

let card = document.getElementById("btn");
card.addEventListener ("click", crearCard);
function crearCard() {
    //console.log("Prueba")
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let lastNumbers = document.getElementById("lastNumbers").value;
    //let nodo = document.getElementsByClassName("cards__Basket");

    contenedor = document.getElementById("main");
    contenedor.innerHTML = `<div style="height: 200px; width: 350px; background-color: lightsalmon; box-shadow: 0px 1px 5px tomato; border-radius: 10px;">
                                <h3 style="height: 15%;">Visa</h3>
                                <p style="height: 15%;">${name} + ${lastname}</p>
                                <p style="height: 15%;">xxxx xxxx xxxx ${lastNumbers}</p>
                                <div style="height: 15%; display: flex; flex-direction: row; justify-content: space-evenly;">
                                    <p>xx/xx</p>
                                    <p>xxx</p>
                                </div>

                            </div>`;
    document.body.appendChild(contenedor);
    
}


const cuota = (valorCompra, nCuotas) => {return valorCompra / nCuotas};
const impSellos = (valorCompra) => {return valorCompra * 0.015};
const sumatoriaTotal = (acumuladoCuotas, acumuladoImp) => {return acumuladoCuotas + acumuladoImp};


alert("Bienvenido a la web app para gestionar sus compras del mes con su tarjeta de crédito.");
alert("Le recomendamos que tenga a mano su resumen anterior.");
salida = prompt("Desea continuar y/n ?");
while (salida != "n" && salida != "N"){

    region = prompt("Su lugar de residencia es la Ciudad Autónoma de Buenos Aires (CABA) o Córdoba? y/n");
    mes = prompt("Porfavor, ingrese el mes en curso.");
    fechaCierre = prompt("Porfavor, ingrese la fecha de cierre de resumen en formato dd/mm/aaaa.");
    fechaVencimiento = prompt("Porfavor, ingrese la fecha de vencimiento en formato dd/mm/aaaa.");
    comprasMes = parseInt(prompt("Porfavor, ahora ingrese la cantidad de compras del mes que realizó con su tarjeta de crédito."));
    alert("Gracias por sus datos");


    for (let i = 1; i <= comprasMes; i++) {
        valorCompra = parseInt(prompt("Ingrese el valor de la compra nº" + i + ": "));
        nCuotas = parseInt(prompt("Ingrese la cantidad de cuotas de 1 a 36"));             
        if (nCuotas > 0 && nCuotas < 36){
            valorCuota = cuota (valorCompra,nCuotas);
            acumuladoCuotas = acumuladoCuotas + valorCuota;
            acumuladoCompras = acumuladoCompras + valorCompra;
            contadorComprCuotif ++;
            if (region == "y" || region =="Y"){
                montoImp = impSellos (valorCuota);
                acumuladoImp = acumuladoImp + montoImp;
            }  
        }
        else {
            alert("Ingresó un valor de cuota no válido");
            break;
        }  
    }
    valorResumen = sumatoriaTotal (acumuladoCuotas,acumuladoImp);
    console.log("Mes en curso: " + mes + "\n Próxima fecha de cierre: " + fechaCierre + "\n Próximo vencimiento: " + fechaVencimiento + "\n Sub total del mes: " + acumuladoCuotas + "\n Sub total imp: " + acumuladoImp + "\n Monto total financiado: " + acumuladoCompras + "\n Cantidad compras coutificadas: " + contadorComprCuotif + "\n Monto total del resumen: " + valorResumen);



    salida = prompt("Desea continuar y/n ?");
    acumuladoImp = 0;
    acumuladoCompras = 0;
    acumuladoCuotas = 0;
    contadorComprCuotif = 0;
}
console.log("Gracias por utilizar nuestra app. Hasta la próxima");



