const contraseñasIngresadas = [];
let cantidad = 3;

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



let clave = "";
let usuario = "";
let contador = 0;
let comprobacion = false;
let contenedor = "";

do{
    usuario = prompt("Ingrese su Usuario: ");
    clave = prompt("Ingrese su Clave: ");
    contador ++;
    contraseñasIngresadas.push(clave);


    
    for(const Register of usuariosRegistrados){

    //for(let i = 0; i < 4; i++){  ** Otra de las maneras de recorrer el array. En caso de tener 2 o más arrays podría generar conflico? OJO - Consultar en clase **
    // console.log (Register.usuario);
    // console.log (Register.contraseña);

        if((usuario == Register.usuario) && (clave == Register.contraseña)){

        //if(usuariosRegistrados[i] == clave){ ** Verificar si de esta manera tambien puedo ingresar a los parametros individuales de los objetos en el array. ** 

            comprobacion = true;
            //alert(`Bienvenido otra vez ${usuario} !`);

            contenedor = document.createElement("main");
            contenedor.innerHTML = `<h1 style="color:tomato; font-size: 50px; text-align:center;"> Bienvenido otra vez ${Register.usuario} ! </h1>`;
            document.body.appendChild(contenedor);

            console.log(contraseñasIngresadas.length);

            //break; ** Break en esta linea cortaría el ciclo del for. Lo que lleva a que si tuviera más de un objeto con algun parámetro similar, este no lo tomaria.
            //          por lo tanto el break debe estar en el ciclo que verdaderamente quiero cortar. **
        }
    }
    if(comprobacion != true){
        alert("La clave ingresada es incorrecta.");
        console.log(contraseñasIngresadas.length);
        if(contador == cantidad){
            alert("Excedió la cantidad máxima permitida de intentos.");
            alert("Intente nuevamente más tarde. \n Gracias por 'manejar el mango' con nosotros. Hasta la próxma !");

        }
    }
    else{
        break;
    }
}
while(contraseñasIngresadas.length != cantidad);