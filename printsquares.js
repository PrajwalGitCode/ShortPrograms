function printSeries(n) {
    let i = 1;
    while (i * i <= n) {
        console.log(i * i);
        i++;
    }
}


let n = prompt("Enter a number:");
printSeries(n);
