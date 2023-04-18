const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const test = require('./public/routes/initialize-array');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/initialize-array', test);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
