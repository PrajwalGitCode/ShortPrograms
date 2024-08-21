function printSeries(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {  // Check if i (not n) is odd
            console.log(i); // Print odd numbers up to n
        }
    }
}

let n = prompt("Enter a number:");
printSeries(n);
