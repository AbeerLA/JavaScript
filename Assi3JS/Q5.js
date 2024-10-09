function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // If divisible by any number, it's not prime
    }
    return true; // It's a prime number
}

function sumOfPrimes(initial, final) {
    let sum = 0;
    let primeNumbers = [];

    for (let i = initial; i <= final; i++) {
        if (isPrime(i)) {
            sum += i; // Add the prime number to the sum
            primeNumbers.push(i); // Store the prime number for display
        }
    }

    console.log(`Prime numbers: ${primeNumbers.join(", ")}`);
    return sum; // Return the total sum of prime numbers
}

// Example usage
const initialInput = 1;
const finalInput = 12;

const result = sumOfPrimes(initialInput, finalInput);
console.log(`The sum of prime numbers from ${initialInput} to ${finalInput} is: ${result}`);