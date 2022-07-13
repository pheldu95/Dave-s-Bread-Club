const express = require('express');
const app = express();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)
// const data = require('./data/index');

const bodyParser = require('body-parser');
const port = 50001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));
//serve static files from build folder instead of public folder
// app.use('/', express.static('build'));

// app.use('/api/data', data);
// app.use('/api/upload', upload);
// app.use('/api/save', save);
// app.use('/api/file', file);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});