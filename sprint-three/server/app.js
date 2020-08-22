const express = require('express');
const app = express(); // init app so we can use methods like app.get app.listen
const cors = require('cors');
require('dotenv').config();
const { PORT, BACKEND_URL } = process.env;
const videosRoute = require('./routes/routes');



// add middleware to help work with req.body
app.use(express.json());

app.use(cors());

app.get('/', (_req, res) => {
  res.json({
    greeting: 'Welcome in my API WORLD',
  });
});

// videos endpoint, setup using express.Router()
app.use('/videos', videosRoute);


// listen, start the application
app.listen(PORT, () => console.log(`listening at: ${BACKEND_URL}:${PORT}`));

