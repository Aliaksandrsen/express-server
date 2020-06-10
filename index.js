const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.send('It is working');
});


app.listen(5000, () => {
    console.log('it is started', new Date());
});