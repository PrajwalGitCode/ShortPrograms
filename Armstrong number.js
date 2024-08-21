function printSeries(n) {
    let a, b = 0;
    let temp = n;
    
    while (n > 0) {
        a = n % 10;
        b = b + (a * a * a);
        n = Math.floor(n / 10);
    }
    
    if (b == temp) {
        console.log("True");
    } else {
        console.log("False");
    }
}

let n = parseInt(prompt("Enter a number:"));
printSeries(n);
