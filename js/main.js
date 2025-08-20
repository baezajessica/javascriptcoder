/* Generador de Contraseñas*/

alert("Hola soy tu Generador de Contraseñas Inhackeable");
let nombrePersona = prompt("¿Cuál es tu nombre?");
let nombreApp = prompt("Por favor Ingresa el nombre de la Aplicacion/Sitio Web para la que desea su contraseña. ");
console.log("a ver si me sale we:", nombrePersona);

let longitud = prompt("Ingresa la cantidad de caracteres de la contraseña (Ej: 10)");

let mayusculas = confirm("¿Querés que tu contraseña contenga Mayusculas?");
let minusculas = confirm("¿Querés que tu contraseña contenga minúsculas?");
let numeros = confirm("¿Querés que tu contraseña contenga números 123?");
let simbolos = confirm("¿Querés que tu contraseña contenga símbolos ./!@$?");

// 1. VALIDACIÓN
if (!mayusculas && !minusculas && !numeros && !simbolos) {
    alert("Error: Tenés que elegir al menos un tipo de carácter.");
} else {
    
    let patronBase = ""; 

    if (mayusculas) {
        patronBase += "AF"; 
    }
    if (minusculas) {
        patronBase += "ra"; 
    }
    if (numeros) {
        patronBase += "13"; 
    }
    if (simbolos) {
        patronBase += "?"; 
    }
    

     //GENERAR  CONTRASEña
    let contraseñaGenerada = "";
    
    for (let i = 0; i < longitud; i++) {
        let indiceEnPatron = i % patronBase.length;
        let caracter = patronBase[indiceEnPatron];
        contraseñaGenerada += caracter;
    }

     //RESULTADO
    alert("¡Listo " + nombrePersona + "  tu contraseña segura para " + nombreApp + " es:" + contraseñaGenerada + "!");
   console.log("La contraseña de", nombrePersona, "para", nombreApp ,"contiene:", longitud, "caracteres y es:", contraseñaGenerada,"!");
}
