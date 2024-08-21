function createArray(n) {
    let array = new Array(n);  // Create an array with n slots
    
    for (let i = 0; i < n; i++) {
        array[i] = i + 1;  // Assign values directly to each index
    }
    
    return array;  // Return the filled array
}

// Example usage
let n = prompt("Enter the size of the array:");
let result = createArray(n);
console.log(result);  // Print the resulting array
