// Binary Search 
function binarySearch(arr, left, right) {
    if (right >= left) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] == 10) {
            return mid;
        }

        if (arr[mid] > 10) {
            return binarySearch(arr, left, mid - 1, 10);
        }

        return binarySearch(arr, mid + 1, right, 10);
    }

    return -1;
}

let arr = [2, 3, 4, 10, 40];
let result = binarySearch(arr, 0, arr.length);