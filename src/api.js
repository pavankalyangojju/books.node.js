const router = require('express').Router();

const books = require('./books_dumb');

let booksDirectory = books;




router.get('/books', function (req, res) {
    res.send(booksDirectory)                      //localhost:5000/api/v1/books(GET) use Postman

});

router.get('/books/:id', function (req, res) {
    const { id } = req.params;

    const book = booksDirectory.find(b => b.isbn === id);            //localhost:5000/api/v1/books/1234567890(GET) use Postman
    if(!book) return res.status(404).send('book does not exist');

    res.send(book)

});

router.post('/books', function (req, res) {
    const {
        title,
        isbn,
        pageCount,
        publishedDate,
        thumbnailUrl,
        shortDescription,
        longDescription,
        status,
        authors,
        categories
    } = req.body;

    const bookExist = booksDirectory.find(b => b.isbn === isbn);
    if(bookExist) return res.send('Book already exist');             //localhost:5000/api/v1/books(POST) use Psostam

    const book = {
        title,
        isbn,
        pageCount,
        publishedDate,
        thumbnailUrl,
        shortDescription,
        longDescription,
        status,
        authors,
        categories
    };
    booksDirectory.push(book);

    res.send(book);
});

router.put('/books/:id', function (req, res) {
    const { id } = req.params;

    const {
        title,
        isbn,
        pageCount,
        publishedDate,
        thumbnailUrl,
        shortDescription,
        longDescription,
        status,
        authors,
        categories

    } = req.body;

    const book = booksDirectory.find(b => b.isbn === id);
    if(!book) return res.send('book does not exist');


    if (!book) return res.status(404).send('Book does not exist');

    const updateField = (val, prev) => !val ? prev : val;

    const updatedBook = {                                               //localhost:5000/api/v1/books/1234567890(PUT) update the book
        ...book,
        title: updateField(title, book.title),
        isbn: updateField(isbn, book.isbn),
        pageCount: updateField(pageCount, book.pageCount),
        publishedDate: updateField(publishedDate, book.publishedDate),
        thumbnailUrl: updateField(thumbnailUrl, book.thumbnailUrl),
        shortDescription: updateField(shortDescription, book.shortDescription),
        longDescription: updateField(longDescription, book.longDescription),
        status: updateField(status, book.status),
        authors: updateField(authors, book.authors),
        categories: updateField(categories, book.categories),
    };

    const bookIndex = booksDirectory.findIndex(b => b.isbn === id);
    booksDirectory.splice(bookIndex, 1, updatedBook);

    res.send(updatedBook);

});

router.delete('/books/:id', function (req, res) {
    const { id } = req.params;

    let book = booksDirectory.find(b => b.isbn === id);
    if(!book) return res.status(404).send('book does not exist');         //localhost:5000/api/v1/books/1234567890(DELETE) book is delete

    booksDirectory = booksDirectory.filter(b => b.isbn !== id);


    res.send('success')

});

module.exports = router;