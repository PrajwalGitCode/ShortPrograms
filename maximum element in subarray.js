function findMaximumSubarray(arr, length) {
    // Initialize the maximum sum and current sum with the first element
    let maxSum = arr[0];
    let currentSum = arr[0];

    // Loop through the array starting from the second element
    for (let i = 1; i < length; i++) {
        // Update currentSum to be the maximum of the current element or currentSum + current element
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        // Update maxSum to be the maximum of maxSum or currentSum
        maxSum = Math.max(maxSum, currentSum);
    }

    // Return the maximum subarray sum
    return maxSum;
}

// Example usage
let n = parseInt(prompt("Enter the number of elements in the array:"), 10);
let arr = [];

// Get array elements from the user
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(prompt(`Enter element);
}


