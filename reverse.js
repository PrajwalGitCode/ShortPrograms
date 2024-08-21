function printSeries(n) {
    let a, b = 0;
    let temp = n;
    
    while (n > 0) {
        a = n % 10;
        b = a + (b*10);
        n = Math.floor(n / 10);
    }
    return b;
}

let n = parseInt(prompt("Enter a number:"));
printSeries(n);
let m= printSeries(n);
console.log(m);
