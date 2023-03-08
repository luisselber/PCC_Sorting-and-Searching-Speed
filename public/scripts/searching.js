const stopWatch = {
    startTime: 0,
    endTime: 0,
};

const sortingAlgorithmsList = document.querySelector('.list');

// Linear Search
function linearSearch(sortedArray, start, end, elementToFind) {
    stopWatch.startTime = performance.now();

    for (let i = start; i < end; i++) {
        if (sortedArray[i] === elementToFind) {
            stopWatch.endTime = performance.now();

            const linearSearchTimeElapsed = (stopWatch.endTime - stopWatch.startTime).toFixed(1);

            sortingAlgorithmsList.children[1].children[3].innerHTML += ` ${linearSearchTimeElapsed}ms | `;

            return;
        }
    }

    stopWatch.endTime = performance.now();

    const linearSearchTimeElapsed = (stopWatch.endTime - stopWatch.startTime).toFixed(1);

    sortingAlgorithmsList.children[1].children[3].innerHTML += ` [Not found] ${linearSearchTimeElapsed}ms | `;
}

// Binary Search
function binarySearch(sortedArray, left, right, elementToFind) {
    stopWatch.startTime = performance.now();

    if (right >= left) {
        let mid = left + Math.floor((right - left) / 2);

        if (sortedArray[mid] === elementToFind) {
            stopWatch.endTime = performance.now();

            const binarySearchTimeElapsed = (stopWatch.endTime - stopWatch.startTime);

            sortingAlgorithmsList.children[1].children[7].innerHTML += ` ${binarySearchTimeElapsed}ms | `;

            return;
        }

        if (sortedArray[mid] > elementToFind) {
            return binarySearch(sortedArray, left, mid - 1, elementToFind);
        }

        return binarySearch(sortedArray, mid + 1, right, elementToFind);
    }

    stopWatch.endTime = performance.now();

    const binarySearchTimeElapsed = (stopWatch.endTime - stopWatch.startTime).toFixed(1);

    sortingAlgorithmsList.children[1].children[7].innerHTML += ` [Not found] ${binarySearchTimeElapsed}ms | `;
}

export { linearSearch, binarySearch };
