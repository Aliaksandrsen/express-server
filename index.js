const express = require('express');

const booksRouter = express.Router();
const app = express();

const products = ['Apple', 'Pen', 'Computer'];

app.get('/', (req, res, next) => {
    res.send('It is working');
});

app.get('/products', (req, res, next) => {
    console.log('Page', req.query.page);
    res.send({ products });
});

app.get('/products/:id', (req, res, next) => {
    if (products[req.params.id]) {
        res.send(products[req.params.id]);
    } else {
        res.status(404).send('Product not found');
    }
});

app.get('/downloadBooks', (req, res, next) => {
    res.download('./public/books.html', 'anothername', (err) => {// 2 аргумент для изм имени
        console.log('file was sent');// 3 ф-я отраб после успешного отправления на клиент
    });
});

app.get('/blog', (req, res, next) => {
    // res.redirect('/'); по умолчанию ставит 302 статус
    res.redirect(301, '/');
});

booksRouter.get('/', (req, res) => {
    res.send('Books');
});

booksRouter.get('/about', (req, res) => {
    res.send('About books');
});

app.use('/books', booksRouter);


app.listen(5000, () => {
    console.log('it is started', new Date());
});
