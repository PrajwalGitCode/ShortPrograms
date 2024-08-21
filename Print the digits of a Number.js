function printSeries(n) {
    
    let a;
    
    while(n>0){
    a=n%10;
    n=Math.floor(n/10);
    console.log(a)
    }

}
let n = prompt("Enter a number:");
printSeries(n);
