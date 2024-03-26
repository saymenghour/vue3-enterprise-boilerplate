const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 6000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log(fullUrl);
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});