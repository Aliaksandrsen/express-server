const express = require('express');

const app = express();

const products = ['Apple', 'Pen', 'Computer'];

app.get('/', (req, res, next) => {
    res.send('It is working');
});

app.get('/products', (req, res, next) => {
    console.log('Page', req.query.page);
    res.send({products});
});

app.listen(5000, () => {
    console.log('it is started', new Date());
});
