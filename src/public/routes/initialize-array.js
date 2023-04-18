const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let unsortedArrays = Array(5).fill().map(() => []);

    let elementsLength = Math.floor(Math.random() * 990000) + 10000;

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < elementsLength; j++) {
            unsortedArrays[i].push(Math.floor(Math.random() * 1_980_000) + 20000);
        }
    }

    let sortedArrays = unsortedArrays.map((unsortedArray) => [...unsortedArray]);
    sortedArrays.map((sortedArray) => { sortedArray.sort((a, b) => a - b) });

    res.end(JSON.stringify({ 'arrays': [unsortedArrays, sortedArrays] }));
});

module.exports = router;
