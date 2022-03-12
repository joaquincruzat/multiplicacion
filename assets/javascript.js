let num = parseInt(prompt("Por favor, ingrese un número"));
let factorial = 1;

let tablaDeMultiplicar = num => {if (num < 1 || num > 20) {
        console.error("El número ingresado está fuera de rango")
    } else {
        for (multiplicador = 1; multiplicador <= num; multiplicador++) {
            console.log(multiplicador + " x " + num + " = " + multiplicador * num);
        } for (let i = 1; i <=num; i++) {
            factorial = factorial*i;

        }
        console.log ("El factorial de "+num+" es: "+factorial);
    }
}

console.log (tablaDeMultiplicar(num));





