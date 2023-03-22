// Quick Sort
function quickSort(unsortedArray) {
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }

    const pivot = unsortedArray[unsortedArray.length - 1];
    const leftSubArray = [];
    const rightSubArray = [];

    for (let i = 0; i < unsortedArray.length - 1; i++) {
        unsortedArray[i] < pivot ? leftSubArray.push(unsortedArray[i]) : rightSubArray.push(unsortedArray[i]);
    }

    return [...quickSort(leftSubArray), pivot, ...quickSort(rightSubArray)];
}

// Radix Sort
function radixSort(unsortedArray) {
    let maxNum = getMax(unsortedArray, unsortedArray.length);

    for (let exp = 1; Math.floor(maxNum / exp) > 0; exp *= 10) {
        countSort(unsortedArray, unsortedArray.length, exp);
    }
}

function getMax(unsortedArray, unsortedArrayLength) {
    let maxNum = unsortedArray[0];

    for (let i = 1; i < unsortedArrayLength; i++) {
        if (unsortedArray[i] > maxNum) {
            maxNum = unsortedArray[i];
        }
    }

    return maxNum;
}

function countSort(unsortedArray, unsortedArrayLength, exp) {
    let output = new Array(unsortedArrayLength);
    let i;
    let count = new Array(10);

    for (let i = 0; i < 10; i++) {
        count[i] = 0;
    }

    for (i = 0; i < unsortedArrayLength; i++) {
        count[Math.floor(unsortedArray[i] / exp) % 10]++;
    }

    for (i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (i = unsortedArrayLength - 1; i >= 0; i--) {
        output[count[Math.floor(unsortedArray[i] / exp) % 10] - 1] = unsortedArray[i];
        count[Math.floor(unsortedArray[i] / exp) % 10]--;
    }

    for (i = 0; i < unsortedArrayLength; i++) {
        unsortedArray[i] = output[i];
    }
}

// Merge Sort
function mergeSort(unsortedArray) {
    const middleIndex = unsortedArray.length / 2;

    if (unsortedArray.length < 2) {
        return unsortedArray;
    }

    const leftSubArray = unsortedArray.splice(0, middleIndex);

    return mergeSubArrays(mergeSort(leftSubArray), mergeSort(unsortedArray));
}

function mergeSubArrays(leftSubArray, rightSubArray) {
    let array = [];

    while (leftSubArray.length && rightSubArray.length) {
        if (leftSubArray[0] < rightSubArray[0]) {
            array.push(leftSubArray.shift());
        }
        else {
            array.push(rightSubArray.shift());
        }
    }

    return [...array, ...leftSubArray, ...rightSubArray];
}

export { quickSort, radixSort, mergeSort };
