// Bubble
function bubbleSort(unsortedArray) {
    let flag = false;

    for (let i = 0; i < unsortedArray.length; i++) {
        flag = false;

        for (let j = 0; j < (unsortedArray.length - i - 1); j++) {
            if (unsortedArray[j] > unsortedArray[j + 1]) {
                let temp = unsortedArray[j];

                unsortedArray[j] = unsortedArray[j + 1];
                unsortedArray[j + 1] = temp;

                flag = true;
            }
        }

        if (!flag) {
            return;
        }
    }
}

// Merge
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
