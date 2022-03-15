// ~~~~~~~ Números primos ~~~~~~~~~

Number.prototype.isPrime = function() {
    for( let i=2; i<=Math.sqrt(num); i++ ) {
        if( num % i === 0 ) {
            return false;
        }
    }
    return true; 
}

// ~~~~~~~ Tiempo en encontrar número primo 10,000 ~~~~~~~~~

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// ~~~~~~~ Fibonacci ~~~~~~~~~
// ¿Qué implementación de Fibonacci debería ser más rápida? Recursiva o Iterativa
// Recursiva es más rápida
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
rFib(20);
// Iterativa es más lento, pero no por mucho
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(20);

// ~~~~~~~~ Invertir una cadena ~~~~~~~~~~
// ¿Podemos revertir una cadena de manera más eficiente?

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam \
soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, \
laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");

// Una forma más eficiente. En bucle:
const reversed2 = story => {
    let backwards = "";
    for (let i=story.length-1; i>=0; i--) {
        backwards += story[i];
    }
    return backwards
}