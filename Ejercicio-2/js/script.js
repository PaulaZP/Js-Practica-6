let num_1 = parseInt(prompt('Ingrese el primer número'));
let num_2 = parseInt(prompt('Ingrese el segundo número'));

const num_entero = enteros(num_1,num_2);

function enteros(n_1,n_2) {
    if(n_1 % n_2 == 0){ // si n_1 es divisible entre n_2 va a retornar verdadero
        return true;
    }else{ // de caso contrario el numero va a retornar falso
        return false;
    }
}
console.log(num_entero);// Muestra en la consola si es false o true