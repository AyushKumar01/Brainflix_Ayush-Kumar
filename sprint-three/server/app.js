const express = require('express');
const app = express(); // init app so we can use methods like app.get app.listen
const port = 5000;

app.get('/', (req, res) => {
  res.json({
    greeting: 'Welcome to my new first API',
  });
});


// listen, start the application
app.listen(port, () => console.log(`listening at: http://localhost:${port}`));
