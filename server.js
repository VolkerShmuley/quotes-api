const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

// Import and mount Quotes router.
const quotesRouter = require('./quotes');
app.use('/api/quotes', quotesRouter);

app.listen(PORT, () => {
    console.log('Server listening on ' + PORT);
})