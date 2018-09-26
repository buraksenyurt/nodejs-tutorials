const express = require('express');
const bookRouter = express.Router();

function router(nav) {
    const books = [
        {
            title: 'War and Peace',
            genre: 'Historical Fiction',
            author: 'Lev Nikolayevich Tolstoy',
            read: false
        },
        {
            title: 'Les Miserables',
            genre: 'Historical Fiction',
            author: 'Victor Hugo',
            read: false
        },
        {
            title: 'Time machine',
            genre: 'Science Fiction',
            author: 'H. G. Wells',
            read: false
        },
        {
            title: 'A Journey into the Center of the Earth',
            genre: 'Science Fiction',
            author: 'Jules Verne',
            read: false
        },
        {
            title: 'The Dark World',
            genre: 'Fantasy',
            author: 'Henry Kuttner',
            read: false
        },
        {
            title: 'The Wind int the Willows',
            genre: 'Fantasy',
            author: 'Kenneth Grahame',
            read: false
        }
    ]

    bookRouter.route('/').get((req, res) => {
        res.render('books',
            {
                title: 'My Library'
                , summary: 'All of these books listed from my working room'
                , nav
                , books: books
            });
    });

    bookRouter.route('/:id').get((req, res) => {
        const id = req.params.id;
        const book = books[id];
        res.render('book',
            {
                title: 'My Library'
                , summary: 'All of these books listed from my working room'
                , nav
                , book: book
            });    
    });

    return bookRouter;
}

module.exports = router;