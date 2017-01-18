// Temos a seguinte sequência de números:
// let numeros = [3,2,11,20,8,7];
// Sua tarefa: criar uma nova lista com a mesma quantidade de números, mas cada elemento da nova lista deve ter seu valor dobrado quando for ímpar.
let numeros = [3,2,11,20,8,7];

let newList = numeros
              .map((item) => (item % 2 + 1) * item
              );


// Quando fazemos o módulo de dois um número par, o que sobra é 0, somando-se 1, e depois multiplicando pelo item, obtemos o mesmo item. Quando o número é impar, o modulo obtido é um, o qual incrementado dá 2.