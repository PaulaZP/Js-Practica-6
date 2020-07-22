let num_1 = parseInt(prompt('Ingrese el primer número'));
let num_2 = parseInt(prompt('Ingrese el segundo número'));

const mayor = max(num_1,num_2); //Rescribe los valores que ingresa el usuario

function max(n_1,n_2){
    if(n_1 > n_2){ //verifica si el n_1 es mayor a n_2 y entra y da el mensaje
        return console.log(`El número ${n_1} es mayor a ${n_2}`);
    }else{ // de caso contrario entraria y tira este otro mensaje
        return console.log(`El número ${n_2} es mayor a ${n_1}`);
    }
}