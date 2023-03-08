import { linearSearch } from './searching.js';
import { binarySearch } from './searching.js';
import { quickSort } from './sorting.js';
import { radixSort } from './sorting.js';
import { mergeSort } from './sorting.js';

const stopWatch = {
    startTime: 0,
    endTime: 0,
};

const sortingAlgorithmsList = document.querySelector('.list');

const algorithmsTime = {
    quickSort: [],
    radixSort: [],
    mergeSort: [],
};

window.onload = async () => {
    const arrays = await initializeArray();
    let unsortedArrays = arrays.unsortedArrays;
    const sortedArrays = arrays.sortedArrays;

    console.log(sortedArrays);

    runSortingAlgorithms(quickSort, unsortedArrays);

    runSortingAlgorithms(radixSort, unsortedArrays);

    runSortingAlgorithms(mergeSort, unsortedArrays);

    document.getElementById('linear-search').addEventListener('click', async () => {
        await runSearchingAlgorithms(linearSearch, sortedArrays);
        sortingAlgorithmsList.children[1].children[3].innerHTML = sortingAlgorithmsList.children[1].children[3].innerHTML.slice(0, -3);
    });

    document.getElementById('binary-search').addEventListener('click', async () => {
        await runSearchingAlgorithms(binarySearch, sortedArrays);
        sortingAlgorithmsList.children[1].children[7].innerHTML = sortingAlgorithmsList.children[1].children[7].innerHTML.slice(0, -3);
    });

    sortingAlgorithmsList.children[0].children[0].innerHTML += ` ${algorithmsTime.quickSort.toString().split(',').join('ms | ')}ms = ${(algorithmsTime.quickSort.reduce((a, b) => Number(a) + Number(b), 0)).toFixed(1)}ms`;
    sortingAlgorithmsList.children[0].children[1].innerHTML += ` ${algorithmsTime.radixSort.toString().split(',').join('ms | ')}ms = ${(algorithmsTime.radixSort.reduce((a, b) => Number(a) + Number(b), 0)).toFixed(1)}ms`;
    sortingAlgorithmsList.children[0].children[2].innerHTML += ` ${algorithmsTime.mergeSort.toString().split(',').join('ms | ')}ms = ${(algorithmsTime.mergeSort.reduce((a, b) => Number(a) + Number(b), 0)).toFixed(1)}ms`;
};

async function initializeArray() {
    let unsortedArrays = Array(5).fill().map(() => []);

    let elementsLength = Math.floor(Math.random() * 990000) + 10000; // Trocar depois

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < elementsLength; j++) {
            unsortedArrays[i].push(Math.floor(Math.random() * 1_980_000) + 20000);
        }
    }

    let sortedArrays = unsortedArrays.map((unsortedArray) => [...unsortedArray]);
    sortedArrays.map((sortedArray) => { sortedArray.sort((a, b) => a - b) });

    return { unsortedArrays, sortedArrays };
}

function runSortingAlgorithms(sortingAlgorithm, unsortedArrays) {
    for (let i = 0; i < unsortedArrays.length; i++) {
        stopWatch.startTime = performance.now();

        sortingAlgorithm(unsortedArrays[i]);

        stopWatch.endTime = performance.now();

        if (sortingAlgorithm.name === 'quickSort') {
            algorithmsTime.quickSort.push((stopWatch.endTime - stopWatch.startTime).toFixed(1));
        }
        else if (sortingAlgorithm.name === 'radixSort') {
            algorithmsTime.radixSort.push((stopWatch.endTime - stopWatch.startTime).toFixed(1));
        }
        else if (sortingAlgorithm.name === 'mergeSort') {
            algorithmsTime.mergeSort.push((stopWatch.endTime - stopWatch.startTime).toFixed(1));
        }
    }
}

async function runSearchingAlgorithms(searchingAlgorithm, sortedArrays) {
    const elementsToFind = (document.getElementById('linear-elements').value).split(' ').map(Number);

    for (let i = 0; i < sortedArrays.length; i++) {
        searchingAlgorithm(sortedArrays[i], 0, sortedArrays[i].length, elementsToFind[i]);
    }
}
