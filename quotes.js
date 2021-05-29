const express = require('express');
const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const quotesRouter = express.Router();

// Get random quote
quotesRouter.get('/random', (req, res, next) => {
    const randomQuote = { quote: getRandomElement(quotes) };
    res.send(randomQuote);
});

// Get all quotes or by author 
quotesRouter.get('/', (req, res, next) => {
    const author = req.query;
    
    if (author.hasOwnProperty('person')) {
        const foundPerson = quotes.filter(quote => {
            return quote.person === author.person;
        });
        res.send( { quotes: foundPerson } );
    } else {
        res.send( { quotes: quotes } );
    }
});

// Add new quote
quotesRouter.post('/', (req, res, next) => {
    const { person, quote } = req.query;

    if (person && quote) {
        quotes.push(req.query);
        res.send( {quote: req.query} );
    } else {
        res.status(400).send();
    }
});

module.exports = quotesRouter;