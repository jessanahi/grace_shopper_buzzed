const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const morgan = require('morgan');
const router = require('./api');
const app = express();

app.use(cors());

app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
  // console.log('beginning router');

  next();
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is listening on:${PORT}`);
});

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  //res.json({ message: "Hello from server!" });
  res.sendFile(path.resolve(__dirname, '../client/build'));
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});