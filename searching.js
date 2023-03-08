// Binary Search 
function binarySearch(arr, key){
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (arr[middle] === key) {
            // Item found
            return middle;
        } else if (arr[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

	// Item not found in the array
    return -1;
}

// Linear Search
function linearSearch(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        // Item found
        return i;
      }
    }
    
    // Item not found in the array
    return -1;
}