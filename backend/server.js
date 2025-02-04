const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Its working!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
