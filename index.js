//1.Scope-enfoque 
/*
var uno_var = 4;
let uno_let = 2;

if (true) {
    
    uno_let= 2+2;    
}

console.log(uno_let);
*/

//2. Scope en accion
/*
var resultado_final=0;

function juguemos_con_una_variable (){
    let resultado_final_local = resultado_final;
    //primer toque del partido
    resultado_final_local = 1+1;
    //segundo toque del partido
    resultado_final_local = resultado_final_local * 2;//2*2
    resultado_final = resultado_final_local;
    
}

//iniciemos el partido
juguemos_con_una_variable();
//termina el partido y es hora de devolver la bola

//inspeccionar a ver como quedo la variable
console.log("el resultado final despues de jugar con la variable es: "+ resultado_final);
console.log ('queremos ver si la variable let se puede ver: ' + resultado_final_local);
*/

//3.Divide y venceras

//Que es un string? un string es texto.
//que es un integer? un integer es un numero entero 1,2,3,4,5,6,7,8,9,10,11
// que es un float? un float es un numero pero con decimal 1.25,5.85,10.14
//que es un booleano? pues un booleano es un si o un no. true o un false


//Problema: dada una variable sume dos unidades a esa variable. Sin embargo, implemente un sistema de validación
//en caso de que la variable sea un string

/*
var variable_a_calcular = 45;

function sistema_de_validacion (variable){

    if (typeof(variable) == "number"){
        return variable; //puede continuar
    }else{
        return false;
    }

}

function calculo_final (variable_a_calcular_generico){

    let decision_si_calculo_o_no = sistema_de_validacion(variable_a_calcular_generico)

    if (typeof(decision_si_calculo_o_no) == "number"){
        console.log(decision_si_calculo_o_no+2) 
    }else{
        console.log('la variable que ha ingresado es incorrecta')
    }
}

calculo_final (variable_a_calcular);

*/


//3.1 Problema si tenemos un carro para ir a la playa, primero tenemos que ver el nivel del aceite (0,25,50,100) 
//en un taller si el nivel del aceite es 50 o mas podemos ir a la playa
/*
var tenemos_carro = true;

function taller (si_tenemos_carro) {

    if (si_tenemos_carro == true){
        return 50; //si tenemos carro nos dicen el nivel del aceite
    }else if (si_tenemos_carro == false){
        return false; //no nos atienden
    }

}

function podemos_ir_a_la_playa (tenemos_carro){

    let indicacion_dueno_taller = taller(tenemos_carro) //50 o false es decir--> indicacion_dueno_taller=50 o false

    if (indicacion_dueno_taller >= 50){
        console.log('ehhhh podemos ir a la playa');
    }else{
        console.log('no podemos ir a la playa');
    }

}
*/

//sin parametros es no ocupa a nadie para ejecutarse clarificacion
/*
function suma () {
    let numero1 =4;
    let numero2 =5;
    let resultado_total = numero1 + numero2;
    return resultado_total;
}


console.log (suma());
*/

//4. ejemplo basico funciones
/*
function me_puedo_lavar_dientes (hay_pasta){

    if (hay_pasta==true){
        console.log('me puedo lavar los dientes');
    }else if (hay_pasta == false){
        console.log('no me puedo lavar los dientes');
    }
}

me_puedo_lavar_dientes(false);
*/


//6. ejemplo basico funciones

// function decir_hola (){
//     console.log ('Hola hola');
// }

// function decir_adios (){
//     console.log ('Hasta luego');
// }

// function hola_adios (){
//     decir_hola();
//     decir_adios();
// }

// hola_adios();


//funcion que sume dos numeros
/*
function suma_de_dos_numeros (numero1, numero2){
    console.log(numero1+numero2);
}

suma_de_dos_numeros(3,4);
*/

/*
function resta_de_dos_numeros (numero1,numero2){
    console.log(numero1-numero2);
}

resta_de_dos_numeros(5,3);
*/

// function multiplica_de_dos_numeros (numero1,numero2){
//     console.log(numero1*numero2);
// }

// multiplica_de_dos_numeros(8,2);