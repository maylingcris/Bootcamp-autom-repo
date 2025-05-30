function fibonacci(n: number): number {
    // rodear todo este codigo con un if y preguntar si es menor o igual a 10
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example evaluation
console.log(fibonacci(6));

// Faltan el primer ejercicio (de geomtria)
// Falta el b del ultimo ejercicio de funciones
// Falta ejercicio de objetos