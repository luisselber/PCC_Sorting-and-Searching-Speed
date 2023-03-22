const stopWatch = {
    startTime: 0,
    endTime: 0,
};

let sortingAlgorithmsList = document.querySelector('.list-2');
sortingAlgorithmsList = sortingAlgorithmsList.children[sortingAlgorithmsList.children.length - 1].children[0];

// Linear Search
function linearSearch(sortedArray, start, end, elementToFind, tablePosition) {
    stopWatch.startTime = performance.now();

    for (let i = start; i < end; i++) {
        if (sortedArray[i] === elementToFind) {
            stopWatch.endTime = performance.now();

            const linearSearchTimeElapsed = (stopWatch.endTime - stopWatch.startTime).toFixed(1);
            sortingAlgorithmsList.children[tablePosition + 1].children[0].innerHTML += ` ${linearSearchTimeElapsed}ms`;

            return;
        }
    }

    stopWatch.endTime = performance.now();

    const linearSearchTimeElapsed = (stopWatch.endTime - stopWatch.startTime).toFixed(1);
    sortingAlgorithmsList.children[tablePosition + 1].children[0].innerHTML += ` [Not found] ${linearSearchTimeElapsed}ms`;
}

// Binary Search
function binarySearch(sortedArray, left, right, elementToFind, tablePosition) {
    stopWatch.startTime = performance.now();

    if (right >= left) {
        let mid = left + Math.floor((right - left) / 2);

        if (sortedArray[mid] === elementToFind) {
            stopWatch.endTime = performance.now();

            const binarySearchTimeElapsed = (stopWatch.endTime - stopWatch.startTime);

            sortingAlgorithmsList.children[tablePosition + 1].children[1].innerHTML += ` ${binarySearchTimeElapsed}ms`;

            return;
        }

        if (sortedArray[mid] > elementToFind) {
            return binarySearch(sortedArray, left, mid - 1, elementToFind, tablePosition);
        }

        return binarySearch(sortedArray, mid + 1, right, elementToFind, tablePosition);
    }

    stopWatch.endTime = performance.now();

    const binarySearchTimeElapsed = (stopWatch.endTime - stopWatch.startTime).toFixed(1);
    sortingAlgorithmsList.children[tablePosition + 1].children[1].innerHTML += ` [Not found] ${binarySearchTimeElapsed}ms`;
}

export { linearSearch, binarySearch };
