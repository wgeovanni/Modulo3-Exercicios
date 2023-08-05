function factorial(number) {
    if (number > 0) number *= factorial(number - 1)
    else number = 1
    return number;
}

// Teste a função
console.log(factorial(5)); // Saída esperada: 120
console.log(factorial(0)); // Saída esperada: 1
console.log(factorial(10)); // Saída esperada: 3628800