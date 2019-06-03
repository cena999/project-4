const express = require('express');

// create our app
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile('public/index.html');
});

app.listen(port, () => {
//   console.log('Express server is up and running');
});
