let nombre = "";
let apellido = "";
let fechaDeNacimiento = "";
let usuario = "";
let contraseña = "";
let repetirContraseña = "";
let contenedor = "";

class Register{
    constructor(nombre, apellido, fechaDeNacimiento, usuario, contraseña){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.usuario = usuario;
        this.contraseña = contraseña;
    }
    saludar(nombre){
        alert("Bienvenido " + this.nombre + " !");

    }
} 
nombre = prompt("Ingrese su Nombre: ");
apellido = prompt("Ingrese su Apellido: ");
fechaDeNacimiento = prompt("Ingrese su fecha de nacimiento en formato dd/mm/aaaa: ");
usuario = prompt("Ingrese su Usuario: ");
alert("Gracias por sus datos");

do{
    contraseña = prompt("Ingrese su Contraseña: ");
    repetirContraseña = prompt("Repita la contraseña: ");
    if(contraseña === repetirContraseña){
        const Usuario = new Register (nombre, apellido, fechaDeNacimiento, usuario , contraseña);
        alert("Creación de usuario exitoso");

        contenedor = document.createElement("main");
        contenedor.innerHTML = `<h1 style="color:tomato; font-size: 50px; text-align:center;"> Bienvenido ${Usuario.usuario} ! </h1>`;
        document.body.appendChild(contenedor);


        //Usuario.saludar();  
        console.log(Usuario);
    }
    else{
        alert("La verifiación de la contraseña no concuerda"); 
    }    
}
while(contraseña != repetirContraseña);