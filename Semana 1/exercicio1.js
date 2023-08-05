// function primeNumber(number) {
//     let increment = 2;
//     let isPrime = false;

//     if (number === 2) isPrime = true;

//     while (increment < number) {
//         if (number % increment === 0) {
//             isPrime = false;
//             break;
//         } else {
//             isPrime = true;
//         }
//         increment++
//     }

//     return isPrime;
// }

// // Teste a função
// console.log(primeNumber(7)); // Saída esperada: true
// console.log(primeNumber(12)); // Saída esperada: false

class VerifyPrime {

    testPrime(number) {

        let increment = 2;
        let isPrime = false;

        if (number === 2) isPrime = true;

        while (increment < number) {
            if (number % increment === 0) {
                isPrime = false;
                break;
            } else {
                isPrime = true;
            }
            increment++
        }

        return isPrime;
    }
}

const teste = new VerifyPrime();

// Teste a função
console.log(teste.testPrime(7)); // Saída esperada: true
console.log(teste.testPrime(12)); // Saída esperada: false