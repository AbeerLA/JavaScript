function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // If divisible by any number, it's not prime
    }
    return true; // It's a prime number
}

function nextPrime(input) {
    let nextNumber = input + 1; // Start checking from the next number

    while (true) {
        if (isPrime(nextNumber)) {
            return nextNumber; // Return the next prime number found
        }
        nextNumber++; // Check the next number
    }
}

// Example usage
const inputs = [13, 8, 17, 20, 25];

inputs.forEach((input) => {
    const result = nextPrime(input);
    console.log(`Input: ${input}, Next Prime: ${result}`);
});