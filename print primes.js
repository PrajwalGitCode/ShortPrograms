function primeNumbers(n) {
    let primes = new Array(n);  // Create an array with n slots
    let count = 0;  // Number of primes found
    let number = 2;  // Start checking from number 2

    while (count < n) {
        let isPrime = true;  // Assume the number is prime
        
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;  // Number is not prime if divisible by i
                break;
            }
        }

        if (isPrime) {
            primes[count] = number;  // Assign the prime number to the array
            count++;
        }
        
        number++;  // Move to the next number
    }

    return primes;  // Return the array of prime numbers
}

// Example usage
let n = parseInt(prompt("Enter the number of prime numbers to find:"), 10);
let result = primeNumbers(n);
console.log(result);  // Print the resulting array of prime numbers
