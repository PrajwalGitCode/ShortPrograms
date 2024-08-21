function printSubarrays(arr) {
    let length = arr.length;

    // Loop through each starting index of subarrays
    for (let i = 0; i < length; i++) {
        // Loop through each ending index of subarrays
        for (let j = i; j < length; j++) {
            let subarray = "";  // Create an empty string to store the subarray

            // Loop through elements from index i to j
            for (let k = i; k <= j; k++) {
                subarray += arr[k] + " ";  // Add each element to the string with a space
            }

            console.log(subarray.trim());  // Print the subarray string
        }
    }
}

// Example usage
let n = parseInt(prompt("Enter the number of elements in the array:"), 10);
let arr = [];

// Get array elements from user input
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(prompt(`Enter element ${i + 1}:`), 10);
}

// Print all subarrays
printSubarrays(arr);
