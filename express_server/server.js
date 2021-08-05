const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Welcome to the channel');
});

app.listen(4000, () => console.log('server is up on 4000'));