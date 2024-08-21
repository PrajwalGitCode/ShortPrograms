function findMax(arr) {
    let max = arr[0];  // Initialize max with the first element of the array
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];  // Update max if the current element is greater
        }
    }
    
    return max;  // Return the maximum value found
}

// Example usage
let arr = [5, 4, 7, 2, 6];
let result = findMax(arr);
console.log(result);  // Output: 7
