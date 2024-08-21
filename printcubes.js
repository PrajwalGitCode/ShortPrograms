function printSeries(n) {
    let m=Math.cbrt(n);
    for (let i = 1; i <= m; i++) {
            console.log(i*i*i); 
    }
}

let n = prompt("Enter a number:");
printSeries(n);


