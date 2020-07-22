let num_1 = parseInt(prompt('Ingrese un número'));
let num_2 = parseInt(prompt('Ingrese un número para agregar espacios'));

let derecha = alinearDerecha(num_1,num_2);

function alinearDerecha(n_1,n_2) {
    let string = n_1.toString(); // es para pasar de númros a texto
    let vacio = ' ';

    for(let i = string.length; i < n_2; i++) {
        vacio += ' ';       
    }
    return console.log(vacio,string);
}

for(let i = 0; i < 7; i++){
    num_1 = parseInt(prompt('Ingrese un número'));
    num_2 = parseInt(prompt('Ingrese un número para agregar espacios'));
    
    derecha = alinearDerecha(num_1,num_2)
}