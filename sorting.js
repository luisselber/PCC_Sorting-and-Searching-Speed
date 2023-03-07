//Bubble
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