let numero = parseInt(prompt('Ingrese un número'));

const primo = esPrimo(numero);

function esPrimo(num_1) {
    if(!isNaN(num_1) && num_1 >= 2){
        let primo = true;

        for(let i = 2; i < num_1; i++){
            if(num_1 % i == 0){
                primo = false;
            }
        }

        if(primo == true){
            return true;
        }else{
            return false;
        }
    }
}
console.log(primo);