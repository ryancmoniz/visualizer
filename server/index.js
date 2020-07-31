const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/hello', (req, res) => res.send('Hello World!'));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
