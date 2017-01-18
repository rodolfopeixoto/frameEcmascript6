// Temos a seguinte sequência de números:
// let numeros = [3,2,11,20,8,7];
// Sua tarefa: criar uma nova lista com a mesma quantidade de números, mas cada elemento da nova lista deve ter seu valor dobrado quando for ímpar.
let numeros = [3,2,11,20,8,7];

let newList = numeros
              .map(function(item){
                 if( (item % 2) != 0 ) return item * 2;
                 return item;
              });