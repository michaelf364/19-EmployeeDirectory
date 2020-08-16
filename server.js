const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

// hi
// routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
